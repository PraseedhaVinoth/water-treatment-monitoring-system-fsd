# Project Documentation

## 1. Overview and problem statement

Treatment-plant operators need a simple view of changing water parameters and timely notice of values outside configured ranges. This application centralizes monitoring, threshold evaluation, alerts, history, analytics, and reporting. Data is simulated by the application or submitted through the REST API; no physical sensors are claimed.

## 2. Functional requirements

1. Users can register, log in, persist a session, view their profile, and log out.
2. Protected users can view a dashboard containing current readings and overall plant status.
3. Users can start/stop a five-second simulator and generate normal or abnormal readings.
4. The backend validates and stores readings in MongoDB.
5. Each reading is checked against stored pH, turbidity, temperature, water-level, and flow thresholds.
6. Out-of-range values create warning or critical alerts with the value and acceptable range.
7. Users can view, filter by unresolved state through API, and acknowledge alerts.
8. Users can inspect historical readings, trends, averages, alert counts, and print-ready reports.
9. Users can view thresholds; administrators can update threshold ranges.
10. Role-based access restricts threshold updates to administrators.

## 3. Non-functional requirements

- Usability: plain labels, status text, empty states, and a low-training operator workflow.
- Performance: indexed recent-reading queries, bounded history responses, and a five-second client interval.
- Reliability: validation, centralized error responses, and automatic threshold initialization.
- Security: hashed passwords, JWT protection, safe user responses, environment secrets, CORS, and role checks.
- Maintainability: separated models, routes, middleware, and threshold service.
- Responsiveness: desktop, tablet, and mobile layouts.
- Data integrity: Mongoose validation and a single reading evaluation path.
- Availability: local development service with clear MongoDB connection failure output.

## 4. System architecture

The user interacts with the React frontend. Axios calls the Express REST API. Authentication middleware validates JWTs, the threshold service evaluates readings, Mongoose persists entities, and MongoDB provides data to the dashboard, analytics, and reports. See [docs/architecture.md](docs/architecture.md).

## 5. Modules

Authentication, dashboard, monitoring and simulation, threshold/alert engine, historical data, analytics, reporting, threshold management, and profile. The simulator is a frontend-controlled interval that submits readings to the same backend endpoint as externally provided readings.

## 6. Technology stack

React, Vite, React Router, Axios, Recharts, CSS, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, dotenv, and cors.

## 7. UI design

The interface uses a dark teal navigation rail, warm action accent, quiet neutral workspace, strong typography, status pills with text and symbols, responsive tables, and print-friendly reports. Color is paired with labels such as NORMAL, WARNING, and CRITICAL so status does not rely on color alone.

## 8. Demonstration thresholds

The application defaults to project-defined demonstration values: pH 6.5–8.5, turbidity 0–5 NTU, temperature 20–35 °C, water level 20–100%, and flow rate 50–200 L/min. They are configurable and are not presented as universal treatment standards.

## 9. Review-1 diagrams

- [Architecture](docs/architecture.md)
- [Use case diagram](docs/use-case.md)
- [ER diagram](docs/er-diagram.md)

## 10. Scope boundary

The current system does not install, control, or connect to physical plant equipment. Real IoT sensor integration is future scope.
