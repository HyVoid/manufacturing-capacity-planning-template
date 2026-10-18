[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
<h1 align="left">Sjabloon voor productiecapaciteitsplanning & tracing van directe arbeidskosten</h1>

<div align="left">

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)

</div>

<p align="left"><strong>
Een lichte engine voor productieplanning en arbeidskostenanalyse in de fabricage. Zet productieplannen voor de productievloer, directe arbeidsuren en dagelijkse outputgegevens om in capaciteitsplanning in real time, benuttingsgraad van de arbeidskrachten, nauwkeurige arbeidskosten per product en beslissingen over bezetting—zonder dure ERP-software of MES-implementatie.
</strong></p>

**Geen aanmelding. Geen installatie. Gratis in uw browser.**

Test het browsergebaseerde productiedashboard gratis. Wanneer u klaar bent voor terugkerend offline operationeel beheer, kunt u de ontgrendelde Excel-versie kopen met een geld-terug-garantie van 30 dagen zonder vragen.

> **🌐 Web-app proberen**  👉 [*Start het gratis dashboard voor fabricagecapaciteit (browserdemo)*](https://hyvoid.github.io/manufacturing-capacity-planning-template/)
>
> **📥 Excel-tool**   👉 [*Download het herbruikbare spreadsheet voor tracing van arbeidskosten (.XLSX)*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
 
---

## Pijnpunten in de productie & oplossingen voor capaciteitsplanning

In plaats van alleen maar metrieken te volgen, koppelt dit raamwerk uw meest kritieke knelpunten op de productievloer aan geautomatiseerde analytische oplossingen:

- **Pijnpunt: onverklaarde arbeidsvariantie & uitbreiding van overuren**  
  **Oplossing:** volgt geplande standaardproductieuren versus werkelijke doorvoer van directe arbeid over alle stappen van de productieroute heen, en legt precies bloot waar de productiviteit wegvalt.
- **Pijnpunt: "drukke" medewerkers vs. werkelijke productiviteit (lage OEE)**  
  **Oplossing:** berekent werkelijke arbeidsbenuttingspercentages in plaats van te vertrouwen op subjectieve indrukken van ploegbazen over de activiteit op de productievloer.
- **Pijnpunt: onnauwkeurige kostenberekening van de stuklijst (BOM)**  
  **Oplossing:** verdeelt gedeelde directe arbeid automatisch over gemengde productielijnen om de werkelijke arbeidskosten per producteenheid bloot te leggen.
- **Pijnpunt: blinde beslissingen over werving & kapitaaluitgaven (CapEx)**  
  **Oplossing:** simuleert scenario's voor capaciteitsbenutting om de operationele impact van een andere omvang van de beroepsbevolking, andere dienstroosters of een ander productievolume te kwantificeren—*voordat* u personeel aannemt of in apparatuur investeert.

---

## Standaardwerkwijze (SOP): quickstart-tutorial

Het verkrijgen van betekenisvolle industriële technische inzichten zou niet vereisen dat u elke week macrobeladen spreadsheets opnieuw opbouwt. Deze workflow is ontworpen als standaardwerkwijze (SOP) voor terugkerende productiecontrole. 

### Stap 1: configureer de aannames voor de productierouting
Open het blad **Setup_Assumptions**. Definieer uw kernbedrijfsparameters: standaard diensturen, referentielonen per uur, overuurmultiplicatoren en standaardproductiedoorsatzet (eenheden per uur) voor elk productieproces.  
*Actie:* leg uw productiebasislijn één keer vast om alle toekomstige capaciteitsberekeningen te automatiseren.

### Stap 2: importeer gegevens van de productievloer
Plak uw bestaande dagelijkse productieregistraties in de daarvoor bestemde invoertabellen:
- Hoofdproductieschema (MPS) / productieplannen
- Werkelijk productierendement / output
- Aanwezigheid van arbeid en betaalde arbeidsuren
- Loonkosten van directe arbeid  
*Actie:* exporteer deze gegevens vanuit uw boekhoudsoftware, uw tijdregistratiesysteem of uw CSV-bestanden direct naar de engine.

### Stap 3: analyseer het productie-KPI-dashboard
Ga naar het **Management Dashboard**. Bekijk uw geautomatiseerde prestatie-indicatoren:
- Arbeidsbenutting & capaciteitsbenutting
- Werkelijke arbeidskosten per product & productievariantie
- Wekelijkse doorvoer vs. doel  
*Actie:* gebruik deze kwantitatieve inzichten voor uw dagelijkse teamoverleggen en wekelijkse productiebeoordelingen.

### Stap 4: schaal uw operaties met het herbruikbare Excel-sjabloon
Nadat u de logica in de browser heeft getest, migreert u naar de offlineversie voor continue gegevensregistratie. Voeg gewoon nieuwe rijen toe aan de invoertabellen naarmate productieregistraties binnenkomen.  
**👉 [*Download het Excel-sjabloon voor capaciteitsplanning*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity) om uw permanente historische productiedatabase op te bouwen zonder abonnementskosten.**

---

## Waarom ik deze tool voor productiebeslissingen heb gebouwd

Veel kleine en middelgrote productiebedrijven (MKB) kennen hun totale weeklonen, maar kunnen die overhead niet terugleiden naar de werkelijke productieprestaties. 

Vergaderingen van het management draaien vaak om uitspraken als:
> "De productievloer leek vandaag druk."  
> "We hebben waarschijnlijk een extra bandwerker nodig."

Geen van beide uitspraken wordt ondersteund door lean-productiegegevens. De onderliggende analytische mislukking is het behandelen van directe arbeid als een statische kostenpost in plaats van als een productieve hulpbron die wordt begrensd door routing en standaardtijden.

Een fabriek geeft bijvoorbeeld wekelijks **$ 8.000** uit terwijl het vier verschillende productlijnen produceert. Het management kent de totale loonlijst, maar heeft geen zicht op:
- Welke SKU verbruikte de meeste directe arbeid?
- Haalde de productierun de theoretische machinecapaciteit?
- Weren operators volledig benut, of belast met stilstand en overstapwerkzaamheden?

Voordat u dit sjabloon gebruikt, zou een fabrieksleider tot de volgende conclusie kunnen komen:
```text
Symptom: Production missed the weekly target.
Knee-jerk Reaction: Hire another employee.

```

Na toepassing van gestandaardiseerde doorvoerbenchmarking via deze tool:

```text
Labor Utilization: 71%
Capacity Utilization: 68%
Root Cause: Production scheduling created idle labor (wait time), not a staffing shortage.
Recommendation: Optimize batch scheduling and material flow before increasing payroll.

```

---

## Knelpunten op de productievloer: legacy-tracking vs. geautomatiseerde oplossingen

| Productieprobleem | Legacy handmatige tracking (chaos van spreadsheets) | Geautomatiseerde oplossing voor capaciteitsplanning |
| --- | --- | --- |
| **Arbeidsefficiëntie is onzichtbaar** | Beslissingen over bezetting steunen op intuïtie van de ploegbaas en visuele observatie | Standaarddoorvoeralgoritmes leggen meetbare, objectieve arbeidsbenutting vast |
| **Productmarges zijn onnauwkeurig** | De totale loonlijst is bekend, maar exacte arbeidskosten per SKU worden geschat | Gedeelde indirecte en directe arbeid wordt automatisch verdeeld op basis van productie-inspanning |
| **Kloof in het productieschema** | Gemiste productiedoelen missen meetbare oorzakenanalyse | Geplande vs. werkelijke productievariantie wordt dagelijks gevolgd |
| **Reactief wervingsbeleid** | Werving verhoogt de loonoverhead zonder een gegarandeerde stijging van de doorvoer te waarborgen | Simulaties van de capaciteit van de beroepsbevolking kwantificeren de impact op de output *voordat* wervingsbeslissingen worden genomen |
| **Risico's bij CapEx-investeringen** | Aankopen van machine-automatisering zijn gebaseerd op onderbuikgevoel | Benuttingscijfers van capaciteit bewijzen of knelpunten machine-upgrades rechtvaardigen |
| **Vermoeidheid van rapportage** | Operationele managers verspillen uren aan het wekelijks opnieuw opbouwen van Excel-rapporten | Dynamische dashboards verfrissen direct uit ruwe gegevensinvoer van de productievloer |

---

## Productiescenario's: wie heeft deze tool voor capaciteitsplanning nodig?

Deze tool legt specifieke workflowvereisten vast voor diverse productierollen. Het fungeert als een lichtgewicht alternatief voor complexe modules voor geavanceerde planning en scheduling (APS).

* **Fabrieksleiders & operationeel directeuren die een Excel-sjabloon voor capaciteitsplanning nodig hebben**:
Beoordeel de totale output van de faciliteit, onderbouw verzoeken om personeel en volg de brutomarges op arbeid zonder in ruwe ERP-gegevens te duiken.
* **Productieleiders die een dagelijkse tracker voor arbeidsvariantie zoeken**:
Beheer de prestaties van de ploeg, volg de dagelijkse doorvoer tegen standaardbewerkingstijden en bepaal welke productielijnen knelpunten veroorzaken.
* **Industriële ingenieurs & lean-productieconsultants die een spreadsheet voor OEE-berekening zoeken**:
Audit de prestaties van een klant of faciliteit door arbeidsbenutting, proces-efficiëntie en theoretische capaciteitsgrenzen snel te berekenen.
* **Kleine ondernemers (voedsel, dierensnacks, verpakking) die alternatieven voor productiesoftware nodig hebben**:
Beheer arbeidsintensieve productieprocessen waarin medewerkers vaak schakelen tussen verschillende producten en stations, wat traditionele tracing van directe arbeid onmogelijk maakt.

*Let op: deze werkmap is een engine voor besluitondersteuning. Het is **niet** bedoeld om ERP-, MES- of realtime SCADA-systemen voor fabrieksuitvoering op ondernemingsniveau te vervangen.*

---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

### Werkmaparchitectuur & relationele gegevensstroom

De werkmap volgt een strikt genormaliseerde, eenrichtings analysepipeline. Dit minimaliseert circulaire verwijzingen, verbetert de controleerbaarheid en dwingt een strikte scheiding tussen stamgegevens, transactionele invoer en rapportagelogica af.

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

| Database/blad | Doel in de industriële techniek | Updatefrequentie |
| --- | --- | --- |
| **Setup_Assumptions** | Wereldwijde bedrijfsaannames (diensten, basislonen) | Zelden |
| **Product_Master** | Standaardproductiedoorschof (UPH) en definities van de productieroute | Zelden |
| **Production_Plan** | Hoofdproductieschema (MPS) / geplande hoeveelheden | Dagelijks / wekelijks |
| **Actual_Production** | Rendement van de productievloer / geproduceerde goede eenheden | Dagelijks |
| **Labor_Input** | Aanwezigheid via tijdregistratie, betaalde uren, overuren | Dagelijks |
| **Cost_Allocation_Engine** | Automatische activiteitsgebaseerde kostprijsberekening (ABC) voor arbeid | Automatisch |
| **Scenario_Model** | Capaciteitsplanning voor scenario-analyse en simulatie van bezetting | Op aanvraag |
| **Management_Dashboard** | KPI's voor directie, equivalenten van OEE, variantierapporten | Automatisch |

---

### Drie valkuilen die zelfs ervaren productiemanagers vangen

#### Valkuil 1 — drukke medewerkers verwarren met hoge arbeidsbenutting (de misleiding van de stilstandtijd)

*Veronderstelling:* elke medewerker werkte een volledige dienst van 8 uur, dus de arbeidsbenutting is 100%.
*Werkelijkheid:* betaalde uren ≠ productieve uren. Betaalde tijd omvat materiaaltekorten, machine-instellingen, overstapwerkzaamheden, schoonmaak en stilstand.

**Correcte interpretatie:**
Arbeidsbenutting wordt bepaald door productieve output in verhouding tot betaalde arbeidsinput, niet door fysieke beweging.

```excel
Labor Utilization = Standard Earned Labor Hours / Actual Paid Labor Hours

```

#### Valkuil 2 — pindakaascostprijsberekening (loonlijst gelijkmatig verdelen)

*Veronderstelling:* een weeklonenlijst van $ 8.000 over 4 productlijnen betekent dat elk product $ 2.000 aan arbeid kost.
*Werkelijkheid:* producten hebben enorm verschillende arbeidsintensiteiten en standaardtijden voor de routing. Een gelijkmatige verdeling vernielt de analyse van productrendabiliteit.

**Correcte interpretatie:**
Arbeid moet proportioneel worden verdeeld op basis van verdiende standaarduren (productie-inspanning), niet op basis van het aantal producten.

```excel
Allocated Cost = (Standard Hours / Daily Total Standard Hours) × Daily Payroll

```

#### Valkuil 3 — personeel aannemen voordat de capaciteit wordt gemeten (de doorvoervalkuil)

*Veronderstelling:* de productie heeft de doelen gemist -> we moeten een extra bandwerker aannemen.
*Werkelijkheid:* als de huidige arbeidsbenutting slechts 72% bedraagt, voegt een extra werker alleen maar kosten voor stilstand toe.

**Correcte interpretatie:**
Verhoog de benutting en ruim planningsknelpunten op om verborgen capaciteit vrij te maken—*voordat* u de loonlijst uitbreidt.

```excel
Effective Capacity = Available Workforce Hours × Current Utilization Rate

```

</details>

---

## De bedrijfslogica & methodiek

Om de kloof tussen financiële loonregistraties en uitvoering op de productievloer te overbruggen, verruilt deze engine subjectieve observatie voor de methodieken **standaardkostprijsberekening** en **activiteitsgebaseerde kostprijsberekening (ABC)**. 

### 1. Het kernbedrijfsprobleem: de kloof in de loonlijst
In de meeste productieprocessen van kleine en middelgrote bedrijven wordt directe arbeid behandeld als een vaste wekelijkse kostenpost in de winst-en-verliesrekening. De financiële afdeling kent de totale loonlijst, en het productieteam kent de totale fysieke output. Omdat operators echter frequent schakelen tussen meerdere productlijnen en stappen van de productieroute, verliest het management het zicht op *hoeveel arbeid* werd verbruikt door *welk product*. 

Deze kloof leidt tot vertekte brutomarges, onnauwkeurige prijsstrategieën en blinde capaciteitsplanning waarbij werving is gebaseerd op druk in plaats van op rekenwerk.

### 2. De methodiek: activiteitsgebaseerde standaardkostprijsberekening
Deze analyse-engine lost de kloof op door een kwantitatieve methodiek in drie stappen te implementeren:

*   **Fase 1: normalisatie via verdiende standaarduren**
    In plaats van fysieke eenheden te tellen (die enorm variëren in arbeidscomplexiteit), zet de engine alle productie om in een universele operationele munt: **standaarduren**. Door een theoretische doorsatzet (eenheden per uur) te definiëren voor elke stap van de productieroute, berekent het model precies hoeveel tijd *zou hebben moeten* worden besteed om het werkelijke dagelijkse rendement te bereiken.
*   **Fase 2: proportionele verdeling van arbeidskosten (ABC)**
    Traditionele spreadsheets verspreiden de dagelijkse loonlijst vaak gelijkmatig over alle producten die die dag zijn geproduceerd—een gebrekkige methode die eenvoudige, hoogvolume SKU's bestraft en complexe, arbeidsintensieve subsidieert. Deze engine verdeelt dollars proportioneel op basis van inspanning. Als product A 70% van de totale verdiende standaarduren van de dag heeft gegenereerd, absorbeert het automatisch 70% van de totale directe arbeidskosten van de dag.
*   **Fase 3: de analyse van de benuttingskloof**
    Door **werkelijk betaalde uren** af te zetten tegen **verdiende standaarduren**, isoleert de engine de "benuttingskloof". Deze meetwaarde legt de exacte financiële kosten bloot van activiteiten zonder toegevoegde waarde, zoals machinestilstand, materiaaltekorten, overstapwerkzaamheden en planninginefficiënties.

### 3. Het commerciële resultaat
Door deze logica systematisch toe te passen, transformeert de engine subjectieve managementdiscussies ("Hebben we meer personeel nodig?") in objectieve, op data gebaseerde beslissingen ("We hebben 28% ongebruikte arbeidscapaciteit; we moeten de planning van batches optimaliseren, niet de loonlijst verhogen"). Het zorgt ervoor dat de prijslogica van uw product is gebaseerd op werkelijk resourceverbruik, waardoor uw operationele marges uiteindelijk worden beschermd.

---

## Andere tools in deze operations-reeks

Deze sjablonen volgen één uniforme filosofie: lichte, op Excel gebaseerde analyserames waarmee operationele teams directe, op data gebaseerde beslissingen kunnen nemen.

* **Systeem voor constructieschatting** — Schat projectkosten, vergelijk aanbiedingen van aannemers en volg WIP-constructiebudgetten.
* **Planner voor voorraadvoorspelling & aanvulling** — Voorspel de vraag, bereken de veiligheidsvoorraad en stel nabestelpunt in op basis van historische ERP-gegevens.
* **Retail- & maquila-voorraadboek** — Volg bulk-WIP-voorraad, defecten in de productieroute en eindproducten over workflows voor uitbestede productie heen.
* **Tracker voor reisfinanciën** — Volg de rentabiliteit van logistiek, cashflow in meerdere valuta's en operationele kosten van het wagenpark.

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

U mag deze analyse-engine vrij gebruiken, wijzigen en distribueren in overeenstemming met de voorwaarden van de Apache License 2.0. Bijdragen aan de logica van de productiemeetwaarden zijn welkom, mits de oorspronkelijke licentie behouden blijft.
