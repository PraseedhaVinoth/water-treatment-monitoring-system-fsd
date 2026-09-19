# Entity Relationship Diagram

```mermaid
erDiagram
  USER ||--o{ MONITORING_READING : submits
  MONITORING_READING ||--o{ ALERT : produces
  USER {
    ObjectId _id PK
    string name
    string email UK
    string password_hash
    string role
    datetime createdAt
  }
  MONITORING_READING {
    ObjectId _id PK
    number pH
    number turbidity
    number temperature
    number waterLevel
    number flowRate
    string pumpStatus
    string overallStatus
    string source
    datetime createdAt
  }
  ALERT {
    ObjectId _id PK
    string parameter
    number value
    number minimum
    number maximum
    string severity
    string message
    ObjectId reading FK
    boolean acknowledged
    datetime createdAt
  }
  THRESHOLD {
    ObjectId _id PK
    string parameter UK
    string label
    string unit
    number minimum
    number maximum
    datetime updatedAt
  }
```

`MonitoringReading` is currently created by an authenticated request rather than storing a user foreign key, because both the simulator and externally provided sources use the same ingestion endpoint. `Alert.reading` references its originating reading. `Threshold` is keyed by parameter and is consumed by the threshold service.
