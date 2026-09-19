# Testing Plan

## Backend acceptance cases

| Area | Test | Expected result |
|---|---|---|
| Auth | Register valid user | 201, JWT, safe user object |
| Auth | Register duplicate email | 409 |
| Auth | Login valid/invalid | 200 for valid, 401 for invalid |
| Auth | Call protected route without token | 401 |
| Monitoring | Submit normal reading | Stored with NORMAL and no alerts |
| Monitoring | Submit abnormal reading | Stored and one alert per abnormal parameter |
| Monitoring | List and fetch by ID | Real MongoDB records returned |
| Alerts | Recent/unresolved list | Correct stored alerts returned |
| Alerts | Acknowledge alert | acknowledged becomes true |
| Thresholds | View thresholds | Default records exist automatically |
| Thresholds | Admin update | New values affect future readings |
| Thresholds | Operator update | 403 |
| Simulation | Start/stop | Client interval starts and cleanup stops it |

## Frontend acceptance cases

1. Login redirects to dashboard and persists after refresh.
2. Dashboard cards show current values or a clear empty state.
3. Normal and abnormal controls create backend readings; abnormal data changes plant status and alert list.
4. Navigation opens history, alerts, analytics, reports, settings, and profile without broken routes.
5. Alert acknowledgement updates the backend and removes the unresolved action.
6. Charts render database readings, not hard-coded metrics.
7. Reports use browser print and hide navigation while printing.
8. Admin settings inputs save; operator inputs are disabled.
9. Mobile layout remains usable with the collapsed navigation rail.

## Executed checks

- `node --check` passed for every backend JavaScript file.
- `npm run build` passed for the frontend.
- Full runtime API testing requires MongoDB to be running at the configured URI.
