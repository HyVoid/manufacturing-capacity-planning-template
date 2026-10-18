[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
<h1 align="left">Vorlage für Fertigungskapazitätsplanung & Nachverfolgung direkter Arbeitskosten</h1>

<div align="left">

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)

</div>

<p align="left"><strong>
Eine leichtgewichtige Engine für Produktionsplanung und Arbeitskostenrechnung in der Fertigung. Verwandle Produktionspläne für die Halle, direkte Arbeitsstunden und tägliche Output-Daten in Echtzeit-Kapazitätsplanung, Auslastungsraten der Belegschaft, präzise Produktarbeitskosten und Personalentscheidungen—ohne teure ERP-Software oder MES-Implementierung.
</strong></p>

**Keine Registrierung. Keine Installation. Kostenlos in deinem Browser.**

Teste das browserbasierte Produktions-Dashboard kostenlos. Wenn du für das wiederkehrende Offline-Betriebsmanagement bereit bist, kannst du die freigeschaltete Excel-Version mit einer 30-tägigen Geld-zurück-Garantie ohne Fragen erwerben.

> **🌐 Web-App testen**  👉 [*Kostenloses Fertigungskapazitäts-Dashboard starten (Browser-Demo)*](https://hyvoid.github.io/manufacturing-capacity-planning-template/)
>
> **📥 Excel-Tool**   👉 [*Die wiederverwendbare Excel-Arbeitsmappe zur Arbeitskostenverfolgung herunterladen (.XLSX)*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
 
---

## Probleme in der Produktion & Lösungen zur Kapazitätsplanung

Anstatt einfach nur Kennzahlen zu verfolgen, bildet dieser Rahmen deine kritischsten Engpässe auf dem Shop Floor auf automatisierte analytische Lösungen ab:

- **Schmerzpunkt: Unerklärliche Arbeitskostenvarianz & Überstundenwachstum**  
  **Lösung:** Verfolgt geplante Standardfertigungsstunden versus tatsächlichen Durchsatz der direkten Arbeitskräfte über alle Arbeitsplanstufen hinweg und zeigt genau auf, wo die Produktivität einbricht.
- **Schmerzpunkt: "Beschäftigte" Mitarbeiter vs. tatsächliche Produktivität (niedrige OEE)**  
  **Lösung:** Berechnet echte Arbeitsauslastungsraten, statt sich auf subjektive Eindrücke von Meistern über die Aktivität in der Halle zu verlassen.
- **Schmerzpunkt: Ungenaue Stücklisten-(BOM-)Kostenrechnung**  
  **Lösung:** Verteilt gemeinsame direkte Arbeitskosten automatisch auf gemischte Fertigungslinien, um die tatsächlichen Arbeitskosten pro Produkteinheit zu ermitteln.
- **Schmerzpunkt: Blinde Einstellungs- und Investitionsentscheidungen (CapEx)**  
  **Lösung:** Simuliert Kapazitätsauslastungsszenarien, um die betrieblichen Auswirkungen veränderter Belegschaftsgröße, Schichtpläne oder Produktionsmengen zu quantifizieren—*bevor* du einstellst oder in Anlagen investierst.

---

## Standardarbeitsanweisung (SOP): Schnellstart-Tutorial

Aussagekräftige Erkenntnisse der Fertigungstechnik sollten es nicht erfordern, makrobeladene Tabellenkalkulationen jede Woche neu aufzubauen. Dieser Workflow ist als Standardarbeitsanweisung (SOP) für wiederkehrende Produktionssteuerung konzipiert. 

### Schritt 1: Konfiguriere die Annahmen für den Fertigungsarbeitsplan
Öffne das Blatt **Setup_Assumptions**. Lege deine zentralen Betriebsparameter fest: Standard-Schichtstunden, Stundenlohn-Benchmarks, Überstundenmultiplikatoren und Standard-Produktionsdurchsatzraten (Einheiten pro Stunde) für jeden Fertigungsprozess.  
*Maßnahme:* Etabliere deine Produktionsbasislinie einmal, um alle künftigen Kapazitätsberechnungen zu automatisieren.

### Schritt 2: Importiere Shop-Floor-Daten
Füge deine bestehenden täglichen Fertigungsaufzeichnungen in die vorgesehenen Eingabetabellen ein:
- Hauptproduktionsplan (MPS) / Produktionspläne
- Tatsächlicher Produktionsertrag / Output
- Arbeitszeiten der Belegschaft und bezahlte Arbeitsstunden
- Direkte Lohnkosten der Arbeitskräfte  
*Maßnahme:* Exportiere diese Daten aus deiner Buchhaltungssoftware, deinem Zeiterfassungssystem oder aus CSV-Dateien direkt in die Engine.

### Schritt 3: Analysiere das Produktions-KPI-Dashboard
Wechsle zum **Management Dashboard**. Prüfe deine automatisierten Leistungskennzahlen:
- Arbeitsauslastung & Kapazitätsauslastung
- Wahre Produktarbeitskosten & Produktionsvarianz
- Wochendurchsatz vs. Ziel  
*Maßnahme:* Nutze diese quantitativen Erkenntnisse für deine täglichen Team-Besprechungen und die wöchentliche Produktionsdurchsicht.

### Schritt 4: Skaliere deine Abläufe mit der wiederverwendbaren Excel-Vorlage
Sobald du die Logik im Browser getestet hast, migriere für die kontinuierliche Datenprotokollierung auf die Offline-Version. Füge einfach neue Zeilen zu den Eingabetabellen hinzu, wenn Produktionsaufzeichnungen eingehen.  
**👉 [*Die Excel-Vorlage zur Kapazitätsplanung herunterladen*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity) um deine dauerhafte historische Produktionsdatenbank ohne Abonnementgebühren aufzubauen.**

---

## Warum ich dieses Tool zur Unterstützung von Produktionsentscheidungen gebaut habe

Viele kleine und mittlere Fertigungsunternehmen (KMU) kennen ihre wöchentliche Gesamtlohnsumme, können diese Gemeinkosten aber nicht auf die tatsächliche Produktionsleistung zurückführen. 

In Management-Meetings geht es oft um Aussagen wie:
> "Der Shop Floor schien heute beschäftigt."  
> "Wir brauchen wahrscheinlich einen weiteren Linienarbeiter."

Keine dieser Aussagen wird durch schlanke Fertigungsdaten gestützt. Das zugrunde liegende analytische Versagen besteht darin, direkte Arbeitskräfte als statischen Aufwand zu behandeln statt als produktive Ressource, die durch Arbeitspläne und Standardzeiten begrenzt ist.

Ein Beispiel: Eine Fabrik gibt wöchentlich **8.000 $** aus und produziert vier verschiedene Produktlinien. Das Management kennt die Gesamtlohnsumme, hat aber keine Transparenz über:
- Welche SKU hat die meisten direkten Arbeitskräfte verbraucht?
- Hat der Produktionslauf die theoretische Maschinenkapazität erreicht?
- Waren die Bediener voll ausgelastet oder mit Leerlaufzeit und Rüstvorgängen belastet?

Vor der Verwendung dieser Vorlage könnte ein Werksleiter zu folgendem Schluss kommen:
```text
Symptom: Production missed the weekly target.
Knee-jerk Reaction: Hire another employee.

```

Nach Anwendung standardisierter Durchsatz-Benchmarking mit diesem Tool:

```text
Labor Utilization: 71%
Capacity Utilization: 68%
Root Cause: Production scheduling created idle labor (wait time), not a staffing shortage.
Recommendation: Optimize batch scheduling and material flow before increasing payroll.

```

---

## Engpässe auf dem Shop Floor: Legacy-Erfassung vs. automatisierte Lösungen

| Fertigungsproblem | Manuelle Legacy-Erfassung (Tabellenchaos) | Automatisierte Kapazitätsplanungslösung |
| --- | --- | --- |
| **Arbeitseffizienz ist unsichtbar** | Personalentscheidungen stützen sich auf die Erfahrung und Intuition der Schichtführer | Standard-Durchsatzalgorithmen etablieren messbare, objektive Arbeitsauslastung |
| **Produktmargen sind ungenau** | Gesamtlohnsumme ist bekannt, aber genaue Arbeitskosten pro SKU werden geschätzt | Gemeinsame indirekte und direkte Arbeitskräfte werden automatisch nach Produktionsaufwand verteilt |
| **Diskrepanz im Produktionsplan** | Verfehlten Fertigungszielen fehlt eine messbare Ursachenanalyse | Geplante vs. tatsächliche Produktionsvarianz wird täglich verfolgt |
| **Reaktive Einstellungspraxis** | Einstellungen erhöhen die Lohnkosten ohne garantierte Durchsatzsteigerung | Belegschaftskapazitätssimulationen quantifizieren die Auswirkungen auf den Output *vor* Einstellungsentscheidungen |
| **CapEx-Investitionsrisiken** | Anlagenautomatisierungskäufe basieren auf Bauchgefühl | Kapazitätsauslastungskennzahlen belegen, ob Engpässe Maschinen-Upgrades rechtfertigen |
| **Reporting-Müdigkeit** | Betriebsleiter verschwenden Stunden mit dem wöchentlichen Neuaufbau von Excel-Berichten | Dynamische Dashboards aktualisieren sich sofort aus rohen Shop-Floor-Eingabedaten |

---

## Produktionsszenarien: Wer braucht dieses Kapazitätsplanungstool?

Dieses Tool erfasst spezifische Workflow-Anforderungen für verschiedene Fertigungsrollen. Es dient als leichtgewichtige Alternative zu komplexen Advanced-Planning-and-Scheduling-Modulen (APS).

* **Werksleiter & Betriebsleiter, die eine Excel-Vorlage zur Kapazitätsplanung brauchen**:
Bewerte den Gesamtoutput der Anlage, begründe Personalanfragen und überwache die Bruttomargen der Arbeitskosten, ohne in rohe ERP-Daten einzutauchen.
* **Produktionssupervisoren, die einen täglichen Arbeitskostenvarianz-Tracker suchen**:
Verwalte die Schichtleistung, verfolge den täglichen Durchsatz gegenüber Standardbetriebszeiten und identifiziere, welche Produktionslinien Engpässe verursachen.
* **Wirtschaftsingenieure & Lean-Manufacturing-Berater, die ein OEE-Berechnungs-Tabellenblatt suchen**:
Prüfe die Leistung von Kunden oder Anlagen, indem du Arbeitsauslastung, Prozesseffizienz und theoretische Kapazitätsgrenzen schnell berechnest.
* **Kleinunternehmer (Lebensmittel, Tierfutter, Verpackung), die Alternativen zu Fertigungssoftware brauchen**:
Steuere arbeitsintensive Produktionsabläufe, in denen Mitarbeiter häufig zwischen verschiedenen Produkten und Stationen wechseln, was traditionelle Direktarbeitskostenverfolgung unmöglich macht.

*Hinweis: Diese Arbeitsmappe ist eine Entscheidungsunterstützungs-Engine. Sie ist **nicht** dafür bestimmt, unternehmensweite ERP-, MES- oder Echtzeit-SCADA-Systeme zur Fabriksteuerung zu ersetzen.*

---

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</summary>

### Arbeitsmappenarchitektur & relationaler Datenfluss

Die Arbeitsmappe folgt einer strikt normalisierten, einseitigen Analyse-Pipeline. Das minimiert Zirkelbezüge, verbessert die Prüfbarkeit und erzwingt eine strenge Trennung zwischen Stammdaten, Transaktionseingaben und Berichtslogik.

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

| Datenbank/Arbeitsblatt | Zweck in der Fertigungstechnik | Aktualisierungsfrequenz |
| --- | --- | --- |
| **Setup_Assumptions** | Globale Betriebsannahmen (Schichten, Grundlöhne) | Selten |
| **Product_Master** | Standard-Produktionsraten (UPH) und Arbeitsplandefinitionen | Selten |
| **Production_Plan** | Hauptproduktionsplan (MPS) / geplante Mengen | Täglich / wöchentlich |
| **Actual_Production** | Shop-Floor-Ertrag / produzierte Gutteile | Täglich |
| **Labor_Input** | Zeiterfassungsanwesenheit, bezahlte Stunden, Überstunden | Täglich |
| **Cost_Allocation_Engine** | Automatische aktivitätsbasierte Kostenrechnung (ABC) für Arbeitskräfte | Automatisch |
| **Scenario_Model** | Kapazitätsplanung für Was-wäre-wenn-Szenarien und Personalsimulation | Auf Abruf |
| **Management_Dashboard** | Executive-KPIs, OEE-Äquivalente, Varianzberichte | Automatisch |

---

### Drei Fallen, in die selbst erfahrene Produktionsleiter tappen

#### Falle 1 — Beschäftigte Mitarbeiter mit hoher Arbeitsauslastung verwechseln (Der Trugschluss der Leerlaufzeit)

*Annahme:* Jeder Mitarbeiter hat eine volle 8-Stunden-Schicht gearbeitet, daher liegt die Arbeitsauslastung bei 100%.
*Realität:* Bezahlte Stunden ≠ Produktive Stunden. Bezahlte Zeit umfasst Materialmangel, Maschinenrüstung, Umrüstvorgänge, Reinigung und Leerlaufzeit.

**Korrekte Interpretation:**
Die Arbeitsauslastung wird durch den produktiven Output im Verhältnis zu den bezahlten Arbeitsstunden bestimmt, nicht durch physische Bewegung.

```excel
Labor Utilization = Standard Earned Labor Hours / Actual Paid Labor Hours

```

#### Falle 2 — Erdnussbutter-Kostenrechnung (Lohnkosten gleichmäßig verteilen)

*Annahme:* Eine wöchentliche Lohnsumme von 8.000 $ über 4 Produktlinien bedeutet, dass jedes Produkt 2.000 $ an Arbeitskosten verursacht.
*Realität:* Produkte haben stark unterschiedliche Arbeitsintensitäten und Standardarbeitsplanzeiten. Eine gleichmäßige Verteilung zerstört die Produktrentabilitätsanalyse.

**Korrekte Interpretation:**
Arbeitskosten müssen proportional auf Basis verdienter Standardstunden (Produktionsaufwand) verteilt werden, nicht nach Produktanzahl.

```excel
Allocated Cost = (Standard Hours / Daily Total Standard Hours) × Daily Payroll

```

#### Falle 3 — Personal einstellen, bevor die Kapazität gemessen wird (Die Durchsatzfalle)

*Annahme:* Produktion hat Ziele verfehlt -> Wir müssen einen weiteren Linienarbeiter einstellen.
*Realität:* Wenn die aktuelle Arbeitsauslastung nur 72% beträgt, erhöht die Einstellung eines weiteren Mitarbeiters nur den Leerlaufzeitaufwand.

**Korrekte Interpretation:**
Steigere die Auslastung und beseitige Planungsengpässe, um versteckte Kapazität freizusetzen—*bevor* du die Lohnsumme ausweitest.

```excel
Effective Capacity = Available Workforce Hours × Current Utilization Rate

```

</details>

---

## Die Geschäftslogik & Methodik

Um die Lücke zwischen finanziellen Lohndatensätzen und Shop-Floor-Ausführung zu schließen, verzichtet diese Engine auf subjektive Beobachtung zugunsten der Methoden **Standardkostenrechnung** und **aktivitätsbasierte Kostenrechnung (ABC)**. 

### 1. Das Kernproblem: Die Lohndiskrepanz
In den meisten kleinen und mittleren Fertigungsbetrieben werden direkte Arbeitskräfte als fixer Wochenaufwand in der GuV behandelt. Die Finanzabteilung kennt die Gesamtlohnsumme, das Produktionsteam kennt den Gesamtoutput. Da Bediener jedoch häufig zwischen mehreren Produktlinien und Arbeitsplanstufen wechseln, verliert das Management die Transparenz darüber, *wie viele Arbeitskräfte* tatsächlich von *welchem Produkt* verbraucht wurden. 

Diese Diskrepanz führt zu verzerrten Bruttomargen, ungenauen Preisstrategien und blinder Kapazitätsplanung, bei der Einstellungen auf Stress statt auf Mathematik basieren.

### 2. Die Methodik: Aktivitätsbasierte Standardkostenrechnung
Diese Analyse-Engine löst die Diskrepanz durch eine dreistufige quantitative Methodik:

*   **Phase 1: Normalisierung über verdiente Standardstunden**
    Anstatt physische Einheiten zu zählen (die in der Arbeitskomplexität stark variieren), wandelt die Engine die gesamte Produktion in eine universelle Betriebswährung um: **Standardstunden**. Durch die Definition einer theoretischen Durchsatzrate (Einheiten pro Stunde) für jeden Arbeitsplanschritt berechnet das Modell genau, wie viel Zeit *hätte* aufgewendet werden müssen, um den tatsächlichen Tagesertrag zu erreichen.
*   **Phase 2: Proportionale Arbeitskostenverteilung (ABC)**
    Traditionelle Tabellenkalkulationen verteilen die tägliche Lohnsumme oft gleichmäßig auf alle an diesem Tag produzierten Produkte—eine fehlerhafte Methode, die einfache, hochvolumige SKUs bestraft und komplexe, arbeitsintensive subventioniert. Diese Engine verteilt Dollar proportional nach Aufwand. Wenn Produkt A 70% der gesamten verdienten Standardstunden des Tages erzeugt hat, absorbiert es automatisch 70% der gesamten direkten Arbeitskosten des Tages.
*   **Phase 3: Die Auslastungslücken-Analyse**
    Durch den Kontrast von **tatsächlichen bezahlten Stunden** gegenüber **verdienten Standardstunden** isoliert die Engine die "Auslastungslücke". Diese Kennzahl deckt die exakten finanziellen Kosten von Aktivitäten ohne Wertschöpfung auf, wie Maschinenstillstand, Materialmangel, Umrüstvorgänge und Planungsineffizienzen.

### 3. Das wirtschaftliche Ergebnis
Durch die systematische Anwendung dieser Logik verwandelt die Engine subjektive Managementdebatten ("Brauchen wir mehr Personal?") in objektive, datengestützte Entscheidungen ("Wir haben 28% ungenutzte Arbeitskapazität; wir müssen die Chargenplanung optimieren, nicht die Lohnsumme erhöhen"). Sie stellt sicher, dass deine Produktpreislogik auf tatsächlichem Ressourcenverbrauch aufbaut und schützt letztlich deine Betriebsmargen.

---

## Weitere Tools in dieser Operations-Reihe

Diese Vorlagen folgen einer einheitlichen Philosophie: leichtgewichtige, Excel-basierte Analyse-Rahmen, die Betriebsteams befähigen, sofortige, datengestützte Entscheidungen zu treffen.

* **Konstruktionskalkulationssystem** — Kalkuliere Projektkosten, vergleiche Subunternehmerangebote und überwache WIP-Konstruktionsbudgets.
* **Bestandsprognose- & Nachschubplaner** — Prognostiziere die Nachfrage, berechne Sicherheitsbestände und lege Nachbestellungspunkte auf Basis historischer ERP-Daten fest.
* **Einzelhandels- & Maquila-Bestandsledger** — Verfolge Bulk-WIP-Bestände, Arbeitsplanfehler und Fertigwaren über Auftragsfertigungs-Workflows hinweg.
* **Reisefinanz-Tracker** — Überwache Logistikrentabilität, mehrwährungsbasierten Cashflow und Flottenbetriebskosten.

---

## Lizenz

Dieses Projekt steht unter der **Apache-Lizenz 2.0**.

Du kannst diese Analyse-Engine frei verwenden, modifizieren und verteilen, im Einklang mit den Bedingungen der Apache-Lizenz 2.0. Beiträge zur Produktionskennzahlenlogik sind willkommen, sofern die ursprüngliche Lizenz gewahrt bleibt.
