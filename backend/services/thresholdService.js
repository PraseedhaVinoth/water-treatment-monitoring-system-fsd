import Threshold from '../models/Threshold.js';
import Alert from '../models/Alert.js';

export const defaults = [
  ['pH', 'pH', '', 6.5, 8.5], ['turbidity', 'Turbidity', 'NTU', 0, 5],
  ['temperature', 'Temperature', '°C', 20, 35], ['waterLevel', 'Water Level', '%', 20, 100],
  ['flowRate', 'Flow Rate', 'L/min', 50, 200]
];
export async function ensureThresholds() {
  for (const [parameter, label, unit, minimum, maximum] of defaults) await Threshold.updateOne({ parameter }, { $setOnInsert: { parameter, label, unit, minimum, maximum } }, { upsert: true });
  return Threshold.find().sort({ _id: 1 });
}
export async function evaluateReading(reading) {
  const thresholds = await ensureThresholds(); const alerts = [];
  for (const threshold of thresholds) {
    const value = reading[threshold.parameter]; if (value === undefined) continue;
    if (value < threshold.minimum || value > threshold.maximum) {
      const distance = value < threshold.minimum ? threshold.minimum - value : value - threshold.maximum;
      const span = Math.max(threshold.maximum - threshold.minimum, 1);
      const severity = distance >= span * 0.35 ? 'CRITICAL' : 'WARNING';
      alerts.push(await Alert.create({ parameter: threshold.parameter, value, minimum: threshold.minimum, maximum: threshold.maximum, severity, message: `${threshold.label} is ${value < threshold.minimum ? 'below' : 'above'} the acceptable range.`, reading: reading._id }));
    }
  }
  return alerts;
}
export function statusForAlerts(alerts) { return alerts.some(a => a.severity === 'CRITICAL') ? 'CRITICAL' : alerts.length ? 'ATTENTION REQUIRED' : 'NORMAL'; }