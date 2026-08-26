# AURA – Personnel Welfare Intelligence Platform

## SIH 2026 – Problem Statement SIH26186

### AI-Based Predictive Personnel Stress and Welfare Monitoring System for Uniformed Forces

AURA is an AI-powered welfare intelligence platform designed to help uniformed forces identify early indicators of stress, fatigue, burnout, and welfare concerns before they escalate into serious issues.

The system focuses on proactive welfare support, privacy-preserving analytics, and data-driven decision-making to improve personnel well-being and organizational resilience.

---

## Problem Statement

Personnel serving in:

- Central Armed Police Forces (CAPFs)
- Armed Forces
- State Police Organizations
- Disaster Response Forces
- Other Uniformed Services

often face:

- Extended deployments
- Consecutive duty schedules
- Operational stress
- Night-duty burden
- Limited recovery periods
- Family separation
- High workload pressure

Traditional identification methods are largely reactive and depend on manual observation or self-reporting.

AURA aims to enable early detection and proactive intervention.

---

## Core Features

### Predictive Welfare Intelligence
- Multi-signal stress and welfare risk analysis
- Early identification of burnout indicators
- Risk classification:
  - 🟢 Watch
  - 🟡 Concern
  - 🔴 Urgent

### Explainable AI
- Transparent risk factors
- Contributing indicator analysis
- Human-understandable recommendations

### Unit Resilience Intelligence
- Unit-level welfare monitoring
- Aggregated and anonymized analytics
- Organizational risk trends

### Welfare Officer Dashboard
- Personnel risk overview
- Trend monitoring
- Intervention tracking
- Actionable insights

### Privacy-First Architecture
- Role-based access control
- Welfare-focused design
- Consent-based data usage
- Protection against unnecessary exposure of sensitive information

### Future Scope
- DutyFair: Welfare-aware duty allocation recommendations
- What-If Welfare Simulator
- Family Resilience Support System
- Advanced predictive analytics

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Recharts
- Lucide React

### Backend (Planned)
- FastAPI
- Python

### Machine Learning (Planned)
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- SHAP

### Database (Planned)
- PostgreSQL

---

## Project Structure

```text
src/
├── components/
├── pages/
├── data/
├── services/
├── layouts/
├── App.tsx
└── main.tsx
