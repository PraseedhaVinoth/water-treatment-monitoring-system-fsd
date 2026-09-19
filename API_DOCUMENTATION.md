# API Documentation

Base URL: `http://localhost:5000/api`. Protected endpoints require `Authorization: Bearer <JWT>`.

## Authentication

| Method | Endpoint | Purpose | Body |
|---|---|---|---|
| POST | `/auth/register` | Create account; first account defaults to admin | `{name,email,password,role?}` |
| POST | `/auth/login` | Start a session | `{email,password}` |
| GET | `/auth/me` | Return current user | none |

Successful login returns `{ token, user }`. Errors include 400 validation, 401 invalid credentials, and 409 duplicate email.

## Monitoring

| Method | Endpoint | Purpose | Body |
|---|---|---|---|
| POST | `/monitoring` | Store a reading and evaluate alerts | `{pH,turbidity,temperature,waterLevel,flowRate,pumpStatus,source?}` |
| GET | `/monitoring` | List recent readings | optional `limit`, `from`, `to`, `status` |
| GET | `/monitoring/latest` | Current reading | none |
| GET | `/monitoring/:id` | One reading | none |

A successful POST returns `{ reading, alerts }`. Example body: `{ "pH": 7.2, "turbidity": 3.5, "temperature": 28, "waterLevel": 75, "flowRate": 120, "pumpStatus": "ON" }`.

## Alerts

`GET /alerts`, `/alerts/recent`, `/alerts/unresolved`, and `/alerts/:id` return `{ alerts }` or `{ alert }`. `PATCH /alerts/:id/acknowledge` marks an alert acknowledged and returns `{ alert }`. Alert creation is automatic during monitoring POST.

## Thresholds

`GET /thresholds` returns `{ thresholds }`. `PUT /thresholds/:parameter` is admin-only and accepts `{minimum,maximum}`. It returns `{ threshold }`; invalid ranges return 400 and non-admin users receive 403.

## Analytics

`GET /analytics?hours=24` returns stored readings for the period, calculated averages, severity counts, and period timestamps. It is used by charts and report summaries.

## Common errors

401 means a missing/expired JWT, 403 means insufficient role, 404 means the resource does not exist, 400 means invalid input or ID, and 500 means an unexpected server failure. Passwords are never returned.
