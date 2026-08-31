<h1 align="center">Manufacturing Capacity Planning & Direct Labor Cost Tracking Template</h1>

<div align="center">

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)

</div>

<p align="center"><strong>
A lightweight production scheduling and manufacturing labor economics engine. Transform shop floor production plans, direct labor hours, and daily output data into real-time capacity planning, workforce utilization rates, accurate product labor costs, and staffing decisions—without expensive ERP software or MES implementation.
</strong></p>

**No signup. No installation. Free in your browser.**

Test the browser-based production dashboard for free. Once you are ready for recurring offline operational management, you can purchase the unlocked Excel version with a 30-day, no-questions-asked money-back guarantee.

> **🌐 Web App Trial**  👉 [*Launch Free Manufacturing Capacity Dashboard (Browser Demo)*](https://hyvoid.github.io/manufacturing-capacity-planning-template/)
>
> **📥 Excel Tool**   👉 [*Download the Reusable Labor Cost Tracking Excel Spreadsheet (.XLSX)*](https://alexhasgreatestuff.gumroad.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
 
---

## Production Pain Points & Capacity Planning Solutions

Instead of simply tracking metrics, this framework maps your most critical shop floor bottlenecks to automated analytical solutions:

- **Pain Point: Unexplained Labor Variance & Overtime Bloat**  
  **Solution:** Tracks planned production standard hours versus actual direct labor throughput across all routing stages, revealing exactly where productivity drops.
- **Pain Point: "Busy" Employees vs. Actual Productivity (Low OEE)**  
  **Solution:** Calculates true labor utilization rates instead of relying on subjective supervisor impressions of shop floor activity.
- **Pain Point: Inaccurate Bill of Materials (BOM) Costing**  
  **Solution:** Automatically allocates shared direct labor across mixed manufacturing lines to reveal the actual labor cost per product unit.
- **Pain Point: Blind Hiring & Capital Expenditure (CapEx) Decisions**  
  **Solution:** Simulates capacity utilization scenarios to quantify the operational impact of changing workforce size, shift schedules, or production volume *before* you hire or invest in equipment.

---

## Standard Operating Procedure (SOP): Quick Start Tutorial

Getting meaningful industrial engineering insights should not require rebuilding macro-heavy spreadsheets every week. This workflow is designed as a standard operating procedure (SOP) for recurring production control. 

### Step 1: Configure Manufacturing Routing Assumptions
Open the **Setup_Assumptions** sheet. Define your core operating parameters: standard shift hours, hourly wage benchmarks, overtime multipliers, and standard production throughput rates (units per hour) for each manufacturing process.  
*Action:* Establish your production baseline once to automate all future capacity calculations.

### Step 2: Import Shop Floor Data
Paste your existing daily manufacturing records into the designated input tables:
- Master Production Schedule (MPS) / Production plans
- Actual production yield / output
- Labor attendance and paid labor hours
- Direct labor payroll costs  
*Action:* Export this data from your accounting software, time-clock system, or CSV files directly into the engine.

### Step 3: Analyze the Production KPI Dashboard
Switch to the **Management Dashboard**. Review your automated performance metrics:
- Labor utilization & Capacity utilization
- True product labor cost & Production variance
- Weekly throughput vs. Target  
*Action:* Use these quantitative insights for your daily stand-up meetings and weekly production reviews.

### Step 4: Scale Your Operations with the Reusable Excel Template
Once you have tested the logic in the browser, migrate to the offline version for continuous data logging. Simply append new rows to the input tables as production records come in.  
**👉 [*Download the Excel Capacity Planning Template*](https://alexhasgreatestuff.gumroad.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity) to build your permanent historical production database without subscription fees.**

---

## Why I Built This Production Decision Support Tool

Many SME manufacturing businesses know their total weekly payroll, yet cannot map that overhead back to actual production performance. 

Management meetings often revolve around statements like:
> "The shop floor seemed busy today."  
> "We probably need to hire another line worker."

Neither statement is supported by lean manufacturing data. The underlying analytical failure is treating direct labor as a static expense rather than a productive resource constrained by routing and standard times.

For example, a factory spends **$8,000** weekly while producing four different product lines. Management knows the total payroll, but lacks visibility into:
- Which SKU consumed the most direct labor?
- Did the production run meet theoretical machine capacity?
- Were operators fully utilized, or burdened by idle time and changeovers?

Before using this template, a plant manager might conclude:
```text
Symptom: Production missed the weekly target.
Knee-jerk Reaction: Hire another employee.

```

After applying standardized throughput benchmarking via this tool:

```text
Labor Utilization: 71%
Capacity Utilization: 68%
Root Cause: Production scheduling created idle labor (wait time), not a staffing shortage.
Recommendation: Optimize batch scheduling and material flow before increasing payroll.

```

---

## Shop Floor Bottlenecks: Legacy Tracking vs. Automated Solutions

| Manufacturing Operation Problem | Legacy Manual Tracking (Spreadsheet Chaos) | Automated Capacity Planning Solution |
| --- | --- | --- |
| **Labor efficiency is invisible** | Staffing decisions rely on supervisor intuition and visual observation | Standard throughput algorithms establish measurable, objective labor utilization |
| **Product margins are inaccurate** | Total payroll is known, but exact per-SKU labor cost is guessed | Shared indirect and direct labor is allocated automatically based on production effort |
| **Production Schedule Disconnect** | Missed manufacturing targets lack measurable root-cause analysis | Planned vs. Actual production variance is tracked daily |
| **Reactive Hiring Practices** | Hiring expands payroll overhead without guaranteeing throughput increases | Workforce capacity simulations quantify output impact *before* hiring decisions are made |
| **CapEx Investment Risks** | Equipment automation purchases are based on gut feeling | Capacity utilization metrics prove whether bottlenecks justify machinery upgrades |
| **Reporting Fatigue** | Operations managers waste hours rebuilding Excel reports every Friday | Dynamic dashboards refresh instantly from raw shop floor data inputs |

---

## Production Floor Scenarios: Who Needs This Capacity Planning Tool?

This tool captures specific workflow requirements for various manufacturing roles. It acts as a lightweight alternative to complex Advanced Planning and Scheduling (APS) modules.

* **Plant Managers & Operations Directors needing a capacity planning excel template**:
Evaluate overall facility output, justify headcount requests, and monitor gross labor margins without digging into raw ERP data.
* **Production Supervisors looking for a daily labor variance tracker**:
Manage shift performance, track daily throughput against standard operating times, and identify which production lines are causing bottlenecks.
* **Industrial Engineers & Lean Manufacturing Consultants seeking an OEE calculation spreadsheet**:
Audit client or facility performance by rapidly calculating labor utilization, process efficiency, and theoretical capacity limits.
* **Small Business Owners (Food, Pet Treat, Packaging) needing manufacturing software alternatives**:
Control labor-intensive production operations where employees frequently switch between different products and stations, making traditional direct labor tracking impossible.

*Note: This workbook is a decision-support engine. It is **not** intended to replace enterprise-grade ERP, MES, or real-time SCADA factory execution systems.*

---

## Technical Details

### Workbook Architecture & Relational Data Flow

The workbook follows a strictly normalized, one-way analytical pipeline. This minimizes circular references, improves auditability, and enforces a strict separation between master data, transactional inputs, and reporting logic.

```text
Business Parameters (Standard Times, Wages)
        │
        ▼
Setup_Assumptions
        │
        ▼
Product_Master (BOM / Routing)
        │
        ├──────────────┐
        ▼              ▼
Production_Plan  Actual_Production
        │              │
        └──────┬───────┘
               ▼
         Labor_Input (Time & Attendance)
               │
               ▼
Cost_Allocation_Engine (Activity Based Costing)
               │
        ┌──────┴─────────┐
        ▼                ▼
Scenario_Model   Management_Dashboard (Power Query / Array Logic)

```

| Database/Worksheet | Industrial Engineering Purpose | Update Frequency |
| --- | --- | --- |
| **Setup_Assumptions** | Global operating assumptions (shifts, base wages) | Rare |
| **Product_Master** | Standard production rates (UPH) and routing definitions | Rare |
| **Production_Plan** | Master Production Schedule (MPS) / Planned quantities | Daily / Weekly |
| **Actual_Production** | Shop floor yield / Good units produced | Daily |
| **Labor_Input** | Time-clock attendance, paid hours, overtime | Daily |
| **Cost_Allocation_Engine** | Automatic Activity-Based Costing (ABC) for labor | Automatic |
| **Scenario_Model** | What-if capacity planning and headcount simulation | On demand |
| **Management_Dashboard** | Executive KPIs, OEE equivalents, variance reports | Automatic |

---

### Three Traps That Catch Even Experienced Production Managers

#### Trap 1 — Confusing Busy Employees with High Labor Utilization (The Idle Time Fallacy)

*Assumption:* Every employee worked a full 8-hour shift, therefore labor utilization is 100%.
*Reality:* Paid hours ≠ Productive hours. Paid time includes material starvation, machine setup, changeovers, cleaning, and idle time.

**Correct interpretation:**
Labor utilization is determined by productive output relative to paid labor input, not physical movement.

```excel
Labor Utilization = Standard Earned Labor Hours / Actual Paid Labor Hours

```

#### Trap 2 — Peanut-Butter Costing (Allocating Payroll Evenly)

*Assumption:* A weekly payroll of $8,000 across 4 product lines means each product costs $2,000 in labor.
*Reality:* Products have vastly different labor intensities and standard routing times. Equal allocation destroys product profitability analysis.

**Correct interpretation:**
Labor must be allocated proportionally based on standard hours earned (production effort), not product count.

```excel
Allocated Cost = (Standard Hours / Daily Total Standard Hours) × Daily Payroll

```

#### Trap 3 — Hiring Headcount Before Measuring Capacity (The Throughput Trap)

*Assumption:* Production missed targets -> We must hire another line worker.
*Reality:* If current labor utilization is only 72%, hiring another worker just adds to idle time expense.

**Correct interpretation:**
Increase utilization and clear scheduling bottlenecks to unlock hidden capacity *before* expanding payroll.

```excel
Effective Capacity = Available Workforce Hours × Current Utilization Rate

```

---

## The Business Logic & Methodology

To bridge the gap between financial payroll records and shop floor execution, this engine abandons subjective observation in favor of **Standard Costing** and **Activity-Based Costing (ABC)** methodologies. 

### 1. The Core Business Problem: The Payroll Disconnect
In most small-to-medium manufacturing operations, direct labor is treated as a fixed weekly expense on the P&L. The finance department knows the total payroll, and the production team knows the total physical output. However, because operators frequently switch between multiple product lines and routing stages, management loses visibility into *how much labor* was actually consumed by *which product*. 

This disconnect leads to distorted gross margins, inaccurate pricing strategies, and blind capacity planning where hiring is based on stress rather than math.

### 2. The Methodology: Activity-Based Standard Costing
This analytical engine resolves the disconnect by implementing a three-step quantitative methodology:

*   **Phase 1: Normalization via Standard Earned Hours**
    Instead of counting physical units (which vary wildly in labor complexity), the engine converts all production into a universal operational currency: **Standard Hours**. By defining a theoretical throughput rate (Units per Hour) for each routing step, the model calculates exactly how much time *should* have been spent to achieve the actual daily yield.
*   **Phase 2: Proportional Labor Cost Allocation (ABC)**
    Traditional spreadsheets often spread daily payroll evenly across all products produced that day—a flawed method that penalizes simple, high-volume SKUs and subsidizes complex, labor-intensive ones. This engine allocates dollars proportionally based on effort. If Product A generated 70% of the day's total Standard Earned Hours, it automatically absorbs 70% of the day's total direct labor cost.
*   **Phase 3: The Utilization Gap Analysis**
    By contrasting **Actual Paid Hours** against **Standard Earned Hours**, the engine isolates the "Utilization Gap." This metric reveals the exact financial cost of non-value-added activities, such as machine downtime, material starvation, changeovers, and scheduling inefficiencies.

### 3. The Commercial Outcome
By systematically applying this logic, the engine transforms subjective management debates ("Do we need to hire more staff?") into objective, data-backed decisions ("We have 28% unused labor capacity; we must optimize batch scheduling, not increase payroll"). It ensures your product pricing logic is built on actual resource consumption, ultimately protecting your operating margins.

---

## Other Tools in This Operations Series

These templates follow a unified philosophy: lightweight, Excel-based analytical frameworks that empower operations teams to make immediate, data-driven decisions.

* **Construction Estimating System** — Estimate project costs, compare subcontractor bids, and monitor WIP construction budgets.
* **Inventory Forecasting & Replenishment Planner** — Forecast demand, calculate safety stock, and set reorder points using historical ERP data.
* **Retail & Maquila Inventory Ledger** — Track bulk WIP inventory, routing defects, and finished goods across contract manufacturing workflows.
* **Trip Finance Tracker** — Monitor logistics profitability, multi-currency cash flow, and fleet operational expenses.

---

## License

This project is licensed under the **Apache License 2.0**.

You are free to use, modify, and distribute this analytical engine in accordance with the terms of the Apache License 2.0. Contributions to the production metrics logic are welcome while preserving the original license.
