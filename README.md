# Manufacturing Labor Economics & Capacity Planning Engine

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)


**A lightweight production labor economics engine that transforms production plans, labor hours, and output data into capacity, utilization, labor cost, and staffing decisions—without software installation or ERP implementation.**

> ## ✅ No signup. No installation. Free.
>
> **🌐 Browser Version**  👉 [*HTML Demo*](https://hyvoid.github.io/Manufacturing-Labor-Cost-Capacity-Planning-Toolkit/)
>
> **📥 Excel Version**   👉[*Download Link*](https://alexhasgreatestuff.gumroad.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
> 

---

# What It Helps You Track

- Planned production versus actual throughput across products and production stages.
- Labor utilization rates instead of relying on subjective impressions of whether the team was "busy."
- Actual labor cost per product after allocating shared labor across mixed production lines.
- Weekly and monthly productivity trends that reveal whether operational improvements are working.
- Capacity utilization before hiring additional employees or investing in equipment.
- Staffing and production scenarios that quantify the operational impact of changing workforce size, efficiency, or production volume.

---

# Quick Start Workflow

Getting meaningful production insights should not require rebuilding spreadsheets every week. This workbook follows a simple operational workflow designed for recurring production analysis rather than one-off reporting.

### 1. Configure business assumptions

Open the **Setup_Assumptions** sheet once and define the operating parameters that rarely change, including standard shift hours, hourly wage assumptions, overtime multipliers, and standard production rates for each manufacturing process.

This configuration becomes the baseline for every future calculation.

---

### 2. Import production data

Paste existing production information into the designated input sheets:

- Production plans
- Actual production output
- Labor attendance
- Paid labor hours
- Labor costs

Data can be exported directly from accounting software, manufacturing records, CSV files, or copied from existing spreadsheets without redesigning the workbook.

---

### 3. Review management results

Switch to the **Management Dashboard**.

Every KPI updates automatically, including:

- Labor utilization
- Capacity utilization
- Product labor cost
- Production variance
- Weekly throughput
- Monthly performance
- Cost per unit

No manual calculations or report rebuilding are required.

---

### 4. Refresh periodically

As new production records become available, simply append additional rows to the input tables.

The workbook automatically extends calculations using structured Excel tables and refreshes every dashboard metric.

**Set a few key parameters. Drop in existing production data. Review the analysis. Refresh whenever new operational data becomes available.**

---

# Why I Built This

Many small manufacturing businesses know exactly how much they spend on payroll every week, yet cannot explain how that payroll actually contributes to production performance.

Management meetings often revolve around statements like:

> "The team seemed busy today."

or

> "We probably need another employee."

Neither statement is supported by measurable evidence.

The underlying analytical failure is that labor is treated only as an expense rather than as a productive resource that should be measured against output.

For example, a factory may spend **$8,000** on weekly wages while producing four different product categories. Everyone knows total payroll, but nobody knows:

- which products consumed the labor,
- whether production met theoretical capacity,
- whether employees were fully utilized,
- whether hiring another employee would actually solve the problem.

This workbook productizes a repeatable reasoning framework instead of creating another custom spreadsheet.

Before using the workbook, management might conclude:

```
Production missed target.
Hire another employee.
```

After applying standardized throughput benchmarks and labor allocation:

```
Labor Utilization: 71%

Capacity Utilization: 68%

Root Cause:
Production scheduling created idle labor,
not insufficient staffing.

Recommendation:
Improve scheduling before increasing payroll.
```

The workbook turns recurring operational reasoning into a reusable decision-support framework instead of requiring managers to rebuild the same analysis every reporting period.

---

# Common Manufacturing Problems This Solves

| Problem | Without This Tool | With This Tool |
|------------|-------------------|----------------|
| Labor efficiency cannot be measured | Decisions rely on observations and intuition | Standard throughput establishes measurable labor utilization |
| Payroll is known but product labor cost is unknown | Product profitability cannot be evaluated accurately | Shared labor is allocated across products automatically |
| Production plans are disconnected from execution | Missed targets have no measurable explanation | Planned versus actual production variance becomes visible |
| Staffing decisions depend on experience | Hiring may increase cost without increasing throughput | Capacity simulations quantify staffing impact before hiring |
| Equipment investment lacks operational evidence | Capital spending is based on assumptions | Capacity utilization shows whether bottlenecks justify automation |
| Weekly reporting requires manual spreadsheet work | Reports are rebuilt every reporting cycle | Dashboards refresh automatically from updated production data |

---

# Who This Is For

This workbook is designed for:

- Small food manufacturers
- Pet treat manufacturers
- Mixed manufacturing and packaging operations
- Production supervisors
- Plant managers
- Operations managers
- Manufacturing consultants
- Business owners managing labor-intensive production

It is particularly useful where labor is shared across multiple products and production stages, making direct labor allocation difficult.

This workbook is **not** intended to replace ERP, MES, APS, or real-time factory execution systems.

No spreadsheet expertise is required. Open the browser version or Excel workbook, import production data, and begin tracking operational performance immediately.

---

# About

I build lightweight analytical tools for operational situations where too many variables must be considered simultaneously and traditional spreadsheets become difficult to manage.

Instead of asking, "What report should I build?", I start with a different question:

> **What information must appear together so the next operational decision becomes obvious?**

The **Pet Treat Manufacturing Labor Economics & Capacity Planning Engine** is one example of that approach. It packages recurring production reasoning into a reusable analytical framework that remains practical for small and medium manufacturing businesses.

## Technical Details

<details>
<summary><strong>For technical reviewers, Excel practitioners, and collaborators</strong></summary>

---

### Workbook Architecture

The workbook follows a one-way analytical pipeline rather than allowing calculations to flow in multiple directions. This minimizes circular references, improves auditability, and separates data entry from decision outputs.

```text
Business Parameters
        │
        ▼
Setup_Assumptions
        │
        ▼
Product_Master
        │
        ├──────────────┐
        ▼              ▼
Production_Plan   Actual_Production
        │              │
        └──────┬───────┘
               ▼
         Labor_Input
               │
               ▼
Cost_Allocation_Engine
               │
        ┌──────┴─────────┐
        ▼                ▼
Scenario_Model     Management_Dashboard
```

| Worksheet | Purpose | Update Frequency |
|------------|----------|-----------------|
| Setup_Assumptions | Global operating assumptions | Rare |
| Product_Master | Standard production rates and process definitions | Rare |
| Production_Plan | Planned production quantities | Daily / Weekly |
| Actual_Production | Actual production reporting | Daily |
| Labor_Input | Labor attendance, hours and payroll | Daily |
| Cost_Allocation_Engine | Automatic labor allocation and utilization calculations | Automatic |
| Scenario_Model | Capacity and staffing simulations | On demand |
| Management_Dashboard | Executive KPIs and production summaries | Automatic |

### Data Flow

```text
Configuration
      ↓
Master Data
      ↓
Operational Inputs
      ↓
Labor Allocation
      ↓
Performance Metrics
      ↓
Management Decisions
```

The calculation engine deliberately separates:

- input data
- reference data
- business assumptions
- calculated measures
- executive reporting

This structure allows operational data to be refreshed without modifying formulas or dashboard layouts.

---

## Three Traps That Catch Even Experienced Production Managers

---

### Trap 1 — Confusing Busy Employees with High Labor Utilization

A production manager observes that every employee worked a full shift.

The conclusion is:

> Labor utilization must have been high.

The unnoticed assumption is that **paid hours equal productive hours**.

In reality, paid hours include:

- waiting for materials
- equipment setup
- changeovers
- cleaning
- idle time

Example:

| Metric | Value |
|---------|------|
| Paid labor hours | 56 |
| Standard production hours | 38 |
| Labor Utilization | 68% |

Without measurement:

```text
Busy factory
=
Good productivity
```

Correct interpretation:

```text
Busy factory

does NOT equal

Productive factory.
```

Labor utilization is determined by productive output relative to paid labor input rather than employee activity.

<details>
<summary>Formula Reference</summary>

```excel
Labor Utilization =
Standard Labor Hours
/
Actual Paid Labor Hours
```

```excel
=SUM(Standard Labor Hours)
/SUM(Paid Labor Hours)
```

</details>

Correct operational recommendation:

- Improve scheduling
- Reduce idle time
- Balance production flow

before considering additional hiring.

---

### Trap 2 — Allocating Payroll Evenly Across Products

A weekly payroll totals:

```
$8,000
```

Management divides payroll equally among four products.

Each receives:

```
$2,000
```

The hidden assumption:

Every product consumes identical labor resources.

Actual production:

| Product | Standard Hours |
|----------|---------------|
| Chicken | 210 |
| Beef Heart | 150 |
| Sweet Potato | 240 |
| Pack-out | 70 |

Equal allocation hides the fact that products require very different labor intensity.

Instead, labor should follow production effort rather than product count.

<details>
<summary>Formula Reference</summary>

```excel
Allocated Cost

=

(Standard Hours

/

Daily Standard Hours)

×

Daily Payroll
```

```excel
=(
Standard Hours
/
Daily Standard Hours
)
*
Daily Labor Cost
```

</details>

Correct recommendation:

Price products using allocated labor consumption instead of equal payroll splits.

---

### Trap 3 — Hiring Before Measuring Capacity

Production targets are missed.

Management immediately concludes:

```
Need another employee.
```

Missing information:

Current workforce utilization.

Example:

| Metric | Current |
|---------|---------|
| Employees | 7 |
| Capacity Utilization | 67% |
| Labor Utilization | 72% |

Simulation:

| Scenario | Weekly Capacity |
|-----------|----------------|
| Current Team | 10,800 packs |
| Improve Utilization to 85% | 12,900 packs |
| Hire One Employee | 12,300 packs |

Improving utilization produces greater throughput than hiring another worker.

<details>
<summary>Formula Reference</summary>

```excel
Effective Capacity

=

Available Hours

×

Utilization
```

```excel
Capacity Gap

=

Effective Capacity

-

Required Standard Hours
```

</details>

Correct operational recommendation:

Increase utilization before increasing payroll whenever spare capacity already exists.

---

### Example Scenario

A small pet treat manufacturer operates one production line with seven employees.

Weekly production target:

| Product | Planned Packs |
|----------|--------------|
| Chicken | 4,000 |
| Beef Heart | 2,000 |
| Sweet Potato | 3,500 |
| Pack-out | 5,000 |

Labor records show:

| Metric | Value |
|---------|------|
| Employees | 7 |
| Paid Hours | 280 |
| Payroll | $7,560 |

Using the standard throughput library, the workbook calculates:

| Result | Value |
|---------|------|
| Standard Production Hours | 218 |
| Labor Utilization | 77.9% |
| Capacity Utilization | 74.6% |
| Average Labor Cost per Pack | $0.52 |

Rather than concluding that production requires additional employees, management discovers that nearly one quarter of paid labor time is not converted into productive output.

Scenario simulation evaluates three alternatives.

| Option | Estimated Result |
|---------|-----------------|
| Hire one employee | Higher payroll with limited throughput gain |
| Increase utilization to 85% | Throughput increases without additional payroll |
| Improve packaging scheduling | Lowest implementation cost with highest short-term return |

Instead of treating labor as a fixed expense, management can now evaluate labor as an operational investment whose return depends on scheduling efficiency, production flow, and standardized throughput.

---

### Formula Reference

<details>
<summary>Setup_Assumptions</summary>

| Formula | Purpose |
|----------|---------|
| Named Ranges | Store wage rate, shift hours, overtime multipliers |
| Global Parameters | Centralize business assumptions |

</details>

<details>
<summary>Product_Master</summary>

```excel
=1/Standard Throughput
```

Converts hourly production rates into standard labor hours per unit.

</details>

<details>
<summary>Production_Plan</summary>

```excel
=XLOOKUP()
```

Retrieves product names and production process classifications automatically.

</details>

<details>
<summary>Actual_Production</summary>

```excel
Actual Quantity
×

Standard Labor Hours
```

Calculates theoretical labor hours required for completed production.

</details>

<details>
<summary>Labor_Input</summary>

```excel
Labor Cost
/
Paid Hours
```

Calculates actual average hourly labor cost.

</details>

<details>
<summary>Cost Allocation Engine</summary>

```excel
SUMIFS()
```

Aggregates daily production.

```excel
XLOOKUP()
```

Retrieves labor records.

```excel
Allocated Cost

=

Standard Hour Share
×

Daily Payroll
```

Calculates actual labor cost by production batch.

</details>

<details>
<summary>Scenario Model</summary>

Uses configurable assumptions for:

- workforce size
- labor utilization
- standard throughput
- wage rates
- production targets

to estimate future capacity, payroll, and labor cost.

</details>

<details>
<summary>Dashboard</summary>

Uses structured tables together with:

- SUMIFS
- UNIQUE
- Dynamic Arrays
- XLOOKUP

to refresh all KPIs automatically after new production data is added.

</details>

---

### Validation Rules

| Field | Rule | Error Behavior |
|-------|------|----------------|
| Product ID | Must exist in Product_Master | Returns Unknown Product |
| Production Date | Required | Record excluded from summaries |
| Actual Quantity | ≥ 0 | Negative values blocked |
| Planned Quantity | ≥ 0 | Validation warning |
| Paid Hours | > 0 | Utilization returns zero |
| Labor Cost | ≥ 0 | Cost allocation prevented |
| Standard Throughput | > 0 | Division by zero prevented |
| Employees | Positive integer | Scenario calculation disabled |
| Wage Rate | Positive number | Uses default assumption |
| Duplicate Product IDs | Not permitted | Validation flag displayed |

</details>

---

## Other Tools in This Series

These workbooks follow the same philosophy: lightweight analytical frameworks that help operational teams make better decisions without replacing enterprise software.

- **Construction Estimating System** — Estimate project costs, compare bids, and monitor construction budgets.
- **Inventory Forecasting & Replenishment Planner** — Forecast demand and calculate reorder points using historical inventory data.
- **Retail & Maquila Inventory Ledger** — Track bulk inventory, production, defects, and finished goods across hybrid manufacturing workflows.
- **Trip Finance Tracker** — Monitor trip profitability, multi-currency cash flow, and operational expenses.
- More lightweight decision-support tools are available through the GitHub repository and Gumroad releases.

---

## License

This project is licensed under the **Apache License 2.0**.

You are free to use, modify, and distribute this workbook in accordance with the terms of the Apache License 2.0. Contributions and improvements are welcome while preserving the original license requirements.
