[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
<h1 align="left">Plantilla de planificación de capacidad de fabricación y seguimiento de costos de mano de obra directa</h1>

<div align="left">

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)

</div>

<p align="left"><strong>
Un motor liviano de planificación de producción y economía de la mano de obra fabril. Transforma los planes de producción de planta, las horas de mano de obra directa y los datos de producción diarios en planificación de capacidad en tiempo real, tasas de utilización de la mano de obra, costos de mano de obra por producto precisos y decisiones de dotación de personal—sin software ERP costoso ni implementación de MES.
</strong></p>

**Sin registro. Sin instalación. Gratis en tu navegador.**

Prueba gratis el panel de producción basado en navegador. Cuando estés listo para la gestión operativa offline recurrente, puedes comprar la versión Excel desbloqueada con una garantía de devolución de dinero de 30 días sin preguntas.

> **🌐 Prueba de la aplicación web**  👉 [*Ejecutar el panel de capacidad de fabricación gratuito (demo de navegador)*](https://hyvoid.github.io/manufacturing-capacity-planning-template/)
>
> **📥 Herramienta Excel**   👉 [*Descargar la hoja de cálculo reutilizable de seguimiento de costos de mano de obra (.XLSX)*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
 
---

## Puntos de dolor en producción y soluciones de planificación de capacidad

En lugar de limitarse a seguir métricas, este marco asigna tus cuellos de botella más críticos de la planta a soluciones analíticas automatizadas:

- **Punto de dolor: variación de mano de obra inexplicada e inflación de horas extras**  
  **Solución:** sigue las horas estándar de producción planificadas frente al rendimiento real de la mano de obra directa en todas las etapas de ruta, revelando exactamente dónde cae la productividad.
- **Punto de dolor: empleados "ocupados" vs. productividad real (bajo OEE)**  
  **Solución:** calcula las verdaderas tasas de utilización de la mano de obra en lugar de depender de impresiones subjetivas del supervisor sobre la actividad de la planta.
- **Punto de dolor: cálculo de costos de la lista de materiales (BOM) inexacto**  
  **Solución:** asigna automáticamente la mano de obra directa compartida entre líneas de fabricación mixtas para revelar el costo real de mano de obra por unidad de producto.
- **Punto de dolor: decisiones de contratación e inversión de capital (CapEx) a ciegas**  
  **Solución:** simula escenarios de utilización de capacidad para cuantificar el impacto operativo de cambiar el tamaño de la mano de obra, los horarios de turnos o el volumen de producción *antes* de contratar o invertir en equipos.

---

## Procedimiento operativo estándar (SOP): tutorial de inicio rápido

Obtener conocimientos significativos de ingeniería industrial no debería exigir reconstruir hojas de cálculo plagadas de macros cada semana. Este flujo de trabajo está diseñado como un procedimiento operativo estándar (SOP) para el control de producción recurrente. 

### Paso 1: configura los supuestos de ruta de fabricación
Abre la hoja **Setup_Assumptions**. Define tus parámetros operativos principales: horas de turno estándar, referencias de salario por hora, multiplicadores de horas extras y tasas de producción estándar (unidades por hora) para cada proceso de fabricación.  
*Acción:* establece tu línea base de producción una sola vez para automatizar todos los cálculos de capacidad futuros.

### Paso 2: importa los datos de la planta
Pega tus registros de fabricación diarios existentes en las tablas de entrada designadas:
- Programa maestro de producción (MPS) / planes de producción
- Rendimiento / producción reales
- Asistencia de la mano de obra y horas de trabajo pagadas
- Costos de nómina de la mano de obra directa  
*Acción:* exporta estos datos desde tu software de contabilidad, tu sistema de fichaje o tus archivos CSV directamente al motor.

### Paso 3: analiza el panel de KPI de producción
Cambia al **Management Dashboard**. Revisa tus métricas de rendimiento automatizadas:
- Utilización de la mano de obra y utilización de la capacidad
- Costo real de mano de obra por producto y variación de producción
- Rendimiento semanal vs. objetivo  
*Acción:* usa estos conocimientos cuantitativos en tus reuniones diarias de pie y tus revisiones semanales de producción.

### Paso 4: escala tus operaciones con la plantilla Excel reutilizable
Una vez que hayas probado la lógica en el navegador, migra a la versión offline para el registro continuo de datos. Simplemente añade nuevas filas a las tablas de entrada a medida que lleguen los registros de producción.  
**👉 [*Descargar la plantilla de planificación de capacidad para Excel*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity) para construir tu base de datos histórica de producción permanente sin cuotas de suscripción.**

---

## Por qué construí esta herramienta de apoyo a las decisiones de producción

Muchas pequeñas y medianas empresas de fabricación (PYME) conocen su nómina semanal total, pero no pueden asignar esos gastos generales al rendimiento de producción real. 

Las reuniones de dirección a menudo giran en torno a afirmaciones como:
> "La planta parecía estar ocupada hoy."  
> "Probablemente necesitamos contratar a otro operario de línea."

Ninguna de las dos afirmaciones está respaldada por datos de fabricación ajustada. El fallo analítico subyacente es tratar la mano de obra directa como un gasto estático en lugar de como un recurso productivo limitado por la ruta y los tiempos estándar.

Por ejemplo, una fábrica gasta **8.000 $** por semana mientras produce cuatro líneas de productos diferentes. La dirección conoce la nómina total, pero carece de visibilidad sobre:
- ¿Qué SKU consumió más mano de obra directa?
- ¿La producción alcanzó la capacidad teórica de la máquina?
- ¿Los operarios estaban plenamente utilizados, o cargados de tiempo muerto y cambios de formato?

Antes de usar esta plantilla, un gerente de planta podría concluir:
```text
Symptom: Production missed the weekly target.
Knee-jerk Reaction: Hire another employee.

```

Después de aplicar la comparación de rendimiento estandarizada a través de esta herramienta:

```text
Labor Utilization: 71%
Capacity Utilization: 68%
Root Cause: Production scheduling created idle labor (wait time), not a staffing shortage.
Recommendation: Optimize batch scheduling and material flow before increasing payroll.

```

---

## Cuellos de botella de la planta: seguimiento heredado vs. soluciones automatizadas

| Problema operativo de fabricación | Seguimiento manual heredado (caos de hojas de cálculo) | Solución de planificación de capacidad automatizada |
| --- | --- | --- |
| **La eficiencia de la mano de obra es invisible** | Las decisiones de dotación se basan en la intuición del supervisor y la observación visual | Los algoritmos de rendimiento estándar establecen una utilización de mano de obra medible y objetiva |
| **Los márgenes de producto son inexactos** | Se conoce la nómina total, pero el costo exacto de mano de obra por SKU se adivina | La mano de obra indirecta y directa compartida se asigna automáticamente según el esfuerzo de producción |
| **Desconexión del programa de producción** | Los objetivos de fabricación incumplidos carecen de un análisis mesurable de la causa raíz | La variación de producción planificada vs. real se sigue a diario |
| **Prácticas de contratación reactivas** | La contratación amplía los gastos de nómina sin garantizar aumentos de rendimiento | Las simulaciones de capacidad de la mano de obra cuantifican el impacto en la producción *antes* de tomar decisiones de contratación |
| **Riesgos de inversión CapEx** | Las compras de automatización de equipos se basan en corazonadas | Las métricas de utilización de capacidad demuestran si los cuellos de botella justifican mejoras de maquinaria |
| **Fatiga de informes** | Los gerentes de operaciones pierden horas reconstruyendo informes de Excel cada viernes | Los paneles dinámicos se actualizan al instante a partir de las entradas de datos brutos de la planta |

---

## Escenarios de planta: ¿quién necesita esta herramienta de planificación de capacidad?

Esta herramienta captura requisitos de flujo de trabajo específicos para diversos roles de fabricación. Actúa como una alternativa liviana a los módulos complejos de planificación avanzada y programación (APS).

* **Gerentes de planta y directores de operaciones que necesitan una plantilla Excel de planificación de capacidad**:
Evalúa la producción global de la instalación, justifica las solicitudes de personal y supervisa los márgenes brutos de mano de obra sin excavar en datos ERP brutos.
* **Supervisores de producción que buscan un seguidor diario de variación de mano de obra**:
Gestiona el rendimiento de los turnos, sigue la producción diaria frente a los tiempos de operación estándar e identifica qué líneas de producción causan los cuellos de botella.
* **Ingenieros industriales y consultores de fabricación ajustada que buscan una hoja de cálculo de OEE**:
Audita el rendimiento de un cliente o instalación calculando rápidamente la utilización de la mano de obra, la eficiencia de los procesos y los límites de capacidad teóricos.
* **Pequeños empresarios (alimentación, golosinas para mascotas, envasado) que necesitan alternativas al software de fabricación**:
Controla las operaciones de producción intensivas en mano de obra donde los empleados cambian con frecuencia entre diferentes productos y estaciones, lo que hace imposible el seguimiento tradicional de la mano de obra directa.

*Nota: este libro es un motor de apoyo a las decisiones. **No** está destinado a reemplazar sistemas ERP, MES o SCADA de ejecución fabril en tiempo real de nivel empresarial.*

---

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

### Arquitectura del libro y flujo de datos relacional

El libro sigue una canalización analítica estrictamente normalizada y unidireccional. Esto minimiza las referencias circulares, mejora la auditabilidad e impone una separación estricta entre los datos maestros, las entradas transaccionales y la lógica de informes.

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

| Base de datos / hoja | Propósito de ingeniería industrial | Frecuencia de actualización |
| --- | --- | --- |
| **Setup_Assumptions** | Supuestos operativos globales (turnos, salarios base) | Rara |
| **Product_Master** | Tasas de producción estándar (UPH) y definiciones de ruta | Rara |
| **Production_Plan** | Programa maestro de producción (MPS) / cantidades planificadas | Diaria / semanal |
| **Actual_Production** | Rendimiento de planta / unidades buenas producidas | Diaria |
| **Labor_Input** | Asistencia de fichaje, horas pagadas, horas extras | Diaria |
| **Cost_Allocation_Engine** | Cálculo de costos por actividades (ABC) automático para la mano de obra | Automática |
| **Scenario_Model** | Planificación de capacidad en escenarios hipotéticos y simulación de personal | Bajo demanda |
| **Management_Dashboard** | KPI ejecutivos, equivalentes de OEE, informes de variación | Automática |

---

### Tres trampas que atrapan incluso a gerentes de producción experimentados

#### Trampa 1 — confundir empleados ocupados con alta utilización de mano de obra (la falacia del tiempo muerto)

*Supuesto:* cada empleado trabajó un turno completo de 8 horas, por lo que la utilización de la mano de obra es del 100 %.
*Realidad:* las horas pagadas ≠ las horas productivas. El tiempo pagado incluye falta de material, preparación de máquinas, cambios de formato, limpieza y tiempo muerto.

**Interpretación correcta:**
La utilización de la mano de obra se determina por la producción productiva en relación con las horas de mano de obra pagadas, no por el movimiento físico.

```excel
Labor Utilization = Standard Earned Labor Hours / Actual Paid Labor Hours

```

#### Trampa 2 — costeo «mantequilla de maní» (distribuir la nómina uniformemente)

*Supuesto:* una nómina semanal de 8.000 $ entre 4 líneas de productos significa que cada producto cuesta 2.000 $ de mano de obra.
*Realidad:* los productos tienen intensidades de mano de obra y tiempos de ruta estándar muy diferentes. Una distribución uniforme destruye el análisis de rentabilidad del producto.

**Interpretación correcta:**
La mano de obra debe distribuirse proporcionalmente en función de las horas estándar ganadas (esfuerzo de producción), no del recuento de productos.

```excel
Allocated Cost = (Standard Hours / Daily Total Standard Hours) × Daily Payroll

```

#### Trampa 3 — contratar personal antes de medir la capacidad (la trampa del rendimiento)

*Supuesto:* la producción no alcanzó los objetivos -> debemos contratar a otro operario de línea.
*Realidad:* si la utilización actual de la mano de obra es solo del 72 %, contratar a otro trabajador solo añade gasto de tiempo muerto.

**Interpretación correcta:**
Aumenta la utilización y elimina los cuellos de botella de programación para liberar la capacidad oculta *antes* de ampliar la nómina.

```excel
Effective Capacity = Available Workforce Hours × Current Utilization Rate

```

</details>

---

## La lógica de negocio y la metodología

Para cerrar la brecha entre los registros financieros de nómina y la ejecución en planta, este motor abandona la observación subjetiva en favor de las metodologías de **cálculo de costos estándar** y **cálculo de costos por actividades (ABC)**. 

### 1. El problema de negocio central: la desconexión de la nómina
En la mayoría de las operaciones de fabricación pequeñas y medianas, la mano de obra directa se trata como un gasto semanal fijo en la cuenta de resultados. El departamento financiero conoce la nómina total, y el equipo de producción conoce la producción física total. Sin embargo, debido a que los operarios cambian con frecuencia entre múltiples líneas de productos y etapas de ruta, la dirección pierde visibilidad sobre *cuánta mano de obra* consumió realmente *cada producto*. 

Esta desconexión conduce a márgenes brutos distorsionados, estrategias de fijación de precios inexactas y una planificación de capacidad ciega en la que la contratación se basa en el estrés en lugar de en las matemáticas.

### 2. La metodología: cálculo de costos estándar por actividades
Este motor analítico resuelve la desconexión implementando una metodología cuantitativa de tres pasos:

*   **Fase 1: normalización mediante horas estándar ganadas**
    En lugar de contar unidades físicas (que varían enormemente en complejidad de mano de obra), el motor convierte toda la producción en una moneda operativa universal: las **horas estándar**. Al definir una tasa de rendimiento teórica (unidades por hora) para cada etapa de ruta, el modelo calcula exactamente cuánto tiempo *debería* haberse invertido para lograr el rendimiento diario real.
*   **Fase 2: asignación proporcional de costos de mano de obra (ABC)**
    Las hojas de cálculo tradicionales suelen repartir la nómina diaria uniformemente entre todos los productos fabricados ese día—un método defectuoso que penaliza a los SKU simples de alto volumen y subvenciona a los complejos e intensivos en mano de obra. Este motor asigna los dólares proporcionalmente al esfuerzo. Si el producto A generó el 70 % de las horas estándar ganadas totales del día, absorbe automáticamente el 70 % del costo total de mano de obra directa del día.
*   **Fase 3: el análisis de la brecha de utilización**
    Al contrastar las **horas pagadas reales** con las **horas estándar ganadas**, el motor aísla la "brecha de utilización". Esta métrica revela el costo financiero exacto de las actividades sin valor añadido, como el tiempo de inactividad de las máquinas, la falta de material, los cambios de formato y las ineficiencias de programación.

### 3. El resultado comercial
Al aplicar sistemáticamente esta lógica, el motor transforma los debates de dirección subjetivos ("¿Necesitamos contratar más personal?") en decisiones objetivas respaldadas por datos ("Tenemos un 28 % de capacidad de mano de obra sin usar; debemos optimizar la programación de lotes, no aumentar la nómina"). Garantiza que la lógica de fijación de precios de tus productos se base en el consumo real de recursos, protegiendo en última instancia tus márgenes operativos.

---

## Otras herramientas de esta serie de operaciones

Estas plantillas siguen una filosofía unificada: marcos analíticos livianos basados en Excel que permiten a los equipos de operaciones tomar decisiones inmediatas basadas en datos.

* **Sistema de estimación de construcción** — Estima los costos del proyecto, compara las ofertas de los subcontratistas y supervisa los presupuestos de construcción en curso (WIP).
* **Planificador de previsión y reposición de inventario** — Prevé la demanda, calcula el stock de seguridad y fija los puntos de reposición usando datos ERP históricos.
* **Libro de inventario minorista y maquila** — Sigue el inventario WIP a granel, los defectos de ruta y los productos terminados a lo largo de los flujos de fabricación por contrato.
* **Seguidor de finanzas de viaje** — Supervisa la rentabilidad logística, el flujo de caja multidivisa y los gastos operativos de la flota.

---

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**.

Eres libre de usar, modificar y distribuir este motor analítico de acuerdo con los términos de la Apache License 2.0. Las contribuciones a la lógica de las métricas de producción son bienvenidas preservando la licencia original.
