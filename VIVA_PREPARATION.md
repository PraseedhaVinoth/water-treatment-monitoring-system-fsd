# Viva Preparation

1. **What is the project?** A MERN web application that monitors simulated or externally provided treatment readings, detects threshold exceptions, and presents alerts, history, analytics, and reports.
2. **Why this project?** Operators need understandable information and timely abnormal-condition awareness.
3. **Why MERN?** JavaScript across a responsive React client and modular Node/Express API, with MongoDB suited to timestamped readings.
4. **MongoDB?** It stores users, readings, alerts, and editable thresholds.
5. **Express?** It exposes REST endpoints and connects requests to business services.
6. **React?** It renders the dashboard, workflows, charts, and protected navigation.
7. **Node.js?** It runs the backend JavaScript service.
8. **JWT?** A signed token proving the authenticated user on protected requests.
9. **bcrypt?** It hashes passwords so plain text is never stored.
10. **REST API?** Resource-oriented HTTP endpoints used by the frontend.
11. **How are alerts generated?** Each reading is compared with each stored threshold; out-of-range parameters create warning or critical Alert records.
12. **How are thresholds used?** They define configurable minimum and maximum values for evaluation.
13. **How does simulation work?** The browser starts a five-second interval that submits varying normal readings; a separate action submits a deliberate abnormal reading.
14. **How is history stored?** Every accepted reading is a MongoDB MonitoringReading document with timestamps.
15. **How do graphs work?** Recharts receives readings returned by the analytics endpoint.
16. **How does authentication work?** Register/login returns a JWT; middleware verifies it and attaches the user to the request.
17. **Architecture?** User → React → Axios/REST → Express → threshold service → MongoDB → dashboard/analytics/reports.
18. **Functional requirements?** Auth, monitoring, simulation, thresholds, alerts, acknowledgement, history, analytics, reporting, profile, and role access.
19. **Non-functional requirements?** Usability, security, validation, maintainability, responsiveness, performance, and data integrity.
20. **ER diagram?** User accounts submit readings conceptually; a reading can produce Alerts, and Threshold records define parameter rules.
21. **Use cases?** Admin and operator share monitoring workflows; only admin modifies thresholds.
22. **Modules?** Authentication, dashboard, monitoring, simulation, alert engine, history, analytics, reports, thresholds, and profile.
23. **Future scope?** Real IoT integration, notifications, cloud hosting, mobile, predictive maintenance, and multi-plant support.
24. **Is this IoT?** No. It is currently a full-stack web application using simulated or externally provided data. Real sensor integration is future scope.
25. **How does a non-technical nursery owner use it?** They log in and view the simple dashboard. The system automatically processes readings, compares them with thresholds, and generates clear alerts; they do not need to understand APIs, databases, JSON, or technical processing.
