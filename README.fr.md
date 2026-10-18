[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
<h1 align="left">Modèle Excel de planification des capacités de production et de suivi des coûts de main-d'œuvre directe</h1>

<div align="left">

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Production%20Decision%20Support-orange)
![No VBA](https://img.shields.io/badge/No-VBA-green)

</div>

<p align="left"><strong>
Un moteur léger de planification de production et d'économie de la main-d'œuvre manufacturière. Transforme les plans de production de l'atelier, les heures de main-d'œuvre directe et les données de production quotidiennes en planification des capacités en temps réel, en taux d'utilisation de la main-d'œuvre, en coûts de main-d'œuvre par produit précis et en décisions de dotation en personnel—sans logiciel ERP coûteux ni mise en œuvre MES.
</strong></p>

**Aucune inscription. Aucune installation. Gratuit dans ton navigateur.**

Teste gratuitement le tableau de bord de production basé sur navigateur. Lorsque tu es prêt pour une gestion opérationnelle hors ligne récurrente, tu peux acheter la version Excel déverrouillée avec une garantie de remboursement de 30 jours sans questions.

> **🌐 Essai de l'application web**  👉 [*Lancer le tableau de bord de capacité de fabrication gratuit (démo navigateur)*](https://hyvoid.github.io/manufacturing-capacity-planning-template/)
>
> **📥 Outil Excel**   👉 [*Télécharger le tableur réutilisable de suivi des coûts de main-d'œuvre (.XLSX)*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity)
 
---

## Points de douleur en production et solutions de planification des capacités

Au lieu de simplement suivre des indicateurs, ce cadre fait correspondre tes goulets d'étranglement les plus critiques de l'atelier à des solutions analytiques automatisées :

- **Point de douleur : variance de main-d'œuvre inexpliquée et gonflement des heures supplémentaires**  
  **Solution :** suit les heures standard planifiées par rapport au débit réel de la main-d'œuvre directe à travers toutes les étapes de gamme, révélant exactement où la productivité chute.
- **Point de douleur : employés « occupés » vs. productivité réelle (faible TRS)**  
  **Solution :** calcule les véritables taux d'utilisation de la main-d'œuvre au lieu de s'appuyer sur les impressions subjectives des superviseurs sur l'activité de l'atelier.
- **Point de douleur : calcul imprécis du coût de la nomenclature (BOM)**  
  **Solution :** répartit automatiquement la main-d'œuvre directe partagée entre les lignes de production mixtes pour révéler le coût de main-d'œuvre réel par unité de produit.
- **Point de douleur : décisions d'embauche et d'investissement (CapEx) à l'aveugle**  
  **Solution :** simule des scénarios d'utilisation des capacités pour quantifier l'impact opérationnel d'un changement de taille de la main-d'œuvre, des horaires d'équipe ou du volume de production *avant* d'embaucher ou d'investir dans des équipements.

---

## Procédure opérationnelle standard (SOP) : tutoriel de démarrage rapide

Obtenir des informations d'ingénierie industrielle utiles ne devrait pas exiger de reconstruire des tableurs bourrés de macros chaque semaine. Ce flux de travail est conçu comme une procédure opérationnelle standard (SOP) pour un contrôle de production récurrent. 

### Étape 1 : configurer les hypothèses de gamme de fabrication
Ouvre la feuille **Setup_Assumptions**. Définis tes paramètres d'exploitation principaux : heures d'équipe standard, références de salaire horaire, multiplicateurs d'heures supplémentaires et taux de production standard (unités par heure) pour chaque processus de fabrication.  
*Action :* établis ta ligne de base de production une seule fois pour automatiser tous les calculs de capacité futurs.

### Étape 2 : importer les données de l'atelier
Colle tes enregistrements de fabrication quotidiens existants dans les tableaux d'entrée désignés :
- Plan directeur de production (PDP) / plans de production
- Rendement / production réels
- Présence de la main-d'œuvre et heures de travail payées
- Coûts de paie de la main-d'œuvre directe  
*Action :* exporte ces données depuis ton logiciel de comptabilité, ton système de pointage ou tes fichiers CSV directement dans le moteur.

### Étape 3 : analyser le tableau de bord des KPI de production
Passe au **Management Dashboard**. Passe en revue tes indicateurs de performance automatisés :
- Utilisation de la main-d'œuvre et utilisation des capacités
- Coût de main-d'œuvre réel par produit et variance de production
- Débit hebdomadaire vs. objectif  
*Action :* utilise ces informations quantitatives pour tes réunions quotidiennes et tes revues de production hebdomadaires.

### Étape 4 : fais évoluer tes opérations avec le modèle Excel réutilisable
Une fois la logique testée dans le navigateur, migre vers la version hors ligne pour la journalisation continue des données. Ajoute simplement de nouvelles lignes aux tableaux d'entrée au fur et à mesure que les enregistrements de production arrivent.  
**👉 [*Télécharger le modèle Excel de planification des capacités*](https://www.theseusworkshop.com/l/nmsae?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=manufacturing-labor-capacity) pour construire ta base de données historique de production permanente sans frais d'abonnement.**

---

## Pourquoi j'ai construit cet outil d'aide à la décision de production

Beaucoup de petites et moyennes entreprises de fabrication connaissent leur paie hebdomadaire totale, mais ne parviennent pas à rattacher ces frais généraux à la performance de production réelle. 

Les réunions de direction tournent souvent autour d'affirmations comme :
> « L'atelier semblait occupé aujourd'hui. »  
> « Nous avons probablement besoin d'embaucher un autre opérateur de ligne. »

Aucune de ces affirmations n'est étayée par des données de fabrication au plus juste. L'échec analytique sous-jacent est de traiter la main-d'œuvre directe comme une charge statique plutôt que comme une ressource productive contrainte par la gamme et les temps standards.

Par exemple, une usine dépense **8 000 $** par semaine tout en produisant quatre lignes de produits différentes. La direction connaît la paie totale, mais manque de visibilité sur :
- Quel SKU a consommé le plus de main-d'œuvre directe ?
- La production a-t-elle atteint la capacité théorique de la machine ?
- Les opérateurs étaient-ils pleinement utilisés, ou accablés par du temps mort et des changements de série ?

Avant d'utiliser ce modèle, un chef d'établissement pourrait conclure :
```text
Symptom: Production missed the weekly target.
Knee-jerk Reaction: Hire another employee.

```

Après application du benchmarking de débit standardisé via cet outil :

```text
Labor Utilization: 71%
Capacity Utilization: 68%
Root Cause: Production scheduling created idle labor (wait time), not a staffing shortage.
Recommendation: Optimize batch scheduling and material flow before increasing payroll.

```

---

## Goulets d'étranglement de l'atelier : suivi hérité vs. solutions automatisées

| Problème opérationnel de fabrication | Suivi manuel hérité (chaos de tableurs) | Solution de planification des capacités automatisée |
| --- | --- | --- |
| **L'efficacité de la main-d'œuvre est invisible** | Les décisions de dotation reposent sur l'intuition du superviseur et l'observation visuelle | Les algorithmes de débit standard établissent une utilisation de la main-d'œuvre mesurable et objective |
| **Les marges produit sont imprécises** | La paie totale est connue, mais le coût de main-d'œuvre exact par SKU est deviné | La main-d'œuvre indirecte et directe partagée est répartie automatiquement selon l'effort de production |
| **Déconnexion du planning de production** | Les objectifs de fabrication manqués n'ont pas d'analyse des causes mesurable | La variance de production planifiée vs. réelle est suivie quotidiennement |
| **Pratiques d'embauche réactives** | L'embauche augmente les frais de paie sans garantir d'augmentation du débit | Les simulations de capacité de main-d'œuvre quantifient l'impact sur la production *avant* que les décisions d'embauche ne soient prises |
| **Risques d'investissement CapEx** | Les achats d'automatisation d'équipements reposent sur le feeling | Les indicateurs d'utilisation des capacités prouvent si les goulets d'étranglement justifient des mises à niveau machines |
| **Fatigue du reporting** | Les responsables d'exploitation perdent des heures à reconstruire des rapports Excel chaque vendredi | Les tableaux de bord dynamiques se rafraîchissent instantanément à partir des données brutes de l'atelier |

---

## Scénarios de l'atelier : qui a besoin de cet outil de planification des capacités ?

Cet outil capte les exigences de flux de travail spécifiques à divers rôles de fabrication. Il agit comme une alternative légère aux modules complexes de planification avancée et ordonnancement (APS).

* **Chefs d'établissement et directeurs des opérations ayant besoin d'un modèle Excel de planification des capacités** :
Évalue la production globale de l'établissement, justifie les demandes d'effectifs et surveille les marges brutes de main-d'œuvre sans fouiller dans les données ERP brutes.
* **Superviseurs de production recherchant un suivi quotidien des écarts de main-d'œuvre** :
Gère la performance des équipes, suis la production quotidienne par rapport aux temps opératoires standards et identifie les lignes de production à l'origine des goulets d'étranglement.
* **Ingénieurs industriels et consultants en fabrication au plus juste recherchant un tableur de calcul du TRS** :
Audite la performance d'un client ou d'un établissement en calculant rapidement l'utilisation de la main-d'œuvre, l'efficacité des processus et les limites de capacité théoriques.
* **Petits entrepreneurs (alimentation, friandises pour animaux, emballage) ayant besoin d'alternatives aux logiciels de fabrication** :
Contrôle les opérations de production à forte intensité de main-d'œuvre où les employés changent fréquemment de produits et de postes, rendant le suivi traditionnel de la main-d'œuvre directe impossible.

*Remarque : ce classeur est un moteur d'aide à la décision. Il n'est **pas** destiné à remplacer des systèmes ERP, MES ou SCADA d'exécution d'usine en temps réel de niveau entreprise.*

---

## Détails techniques

<details>
<summary>Pour les réviseurs techniques, les praticiens d'Excel et les collaborateurs</summary>

### Architecture du classeur et flux de données relationnel

Le classeur suit un pipeline analytique strictement normalisé et unidirectionnel. Cela minimise les références circulaires, améliore l'auditabilité et impose une séparation stricte entre les données de base, les entrées transactionnelles et la logique de reporting.

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

| Base de données / feuille | Objectif d'ingénierie industrielle | Fréquence de mise à jour |
| --- | --- | --- |
| **Setup_Assumptions** | Hypothèses d'exploitation globales (équipes, salaires de base) | Rare |
| **Product_Master** | Taux de production standard (UPH) et définitions de gamme | Rare |
| **Production_Plan** | Plan directeur de production (PDP) / quantités planifiées | Quotidien / hebdomadaire |
| **Actual_Production** | Rendement de l'atelier / bonnes unités produites | Quotidien |
| **Labor_Input** | Présence au pointage, heures payées, heures supplémentaires | Quotidien |
| **Cost_Allocation_Engine** | Calcul de coûts par activité (ABC) automatique pour la main-d'œuvre | Automatique |
| **Scenario_Model** | Planification des capacités en scénarios hypothétiques et simulation d'effectifs | À la demande |
| **Management_Dashboard** | KPI de direction, équivalents TRS, rapports de variance | Automatique |

---

### Trois pièges qui prennent même les responsables de production expérimentés

#### Piège 1 — confondre employés occupés et forte utilisation de la main-d'œuvre (le sophisme du temps mort)

*Hypothèse :* chaque employé a effectué une équipe complète de 8 heures, donc l'utilisation de la main-d'œuvre est de 100 %.
*Réalité :* les heures payées ≠ les heures productives. Le temps payé comprend les ruptures de matériel, le réglage machine, les changements de série, le nettoyage et le temps mort.

**Interprétation correcte :**
L'utilisation de la main-d'œuvre est déterminée par la production productive rapportée aux heures de main-d'œuvre payées, pas par le mouvement physique.

```excel
Labor Utilization = Standard Earned Labor Hours / Actual Paid Labor Hours

```

#### Piège 2 — le calcul de coûts « beurre de cacahuète » (répartir la paie uniformément)

*Hypothèse :* une paie hebdomadaire de 8 000 $ sur 4 lignes de produits signifie que chaque produit coûte 2 000 $ de main-d'œuvre.
*Réalité :* les produits ont des intensités de main-d'œuvre et des temps de gamme standard très différents. Une répartition égale détruit l'analyse de rentabilité des produits.

**Interprétation correcte :**
La main-d'œuvre doit être répartie proportionnellement sur la base des heures standard gagnées (effort de production), et non du nombre de produits.

```excel
Allocated Cost = (Standard Hours / Daily Total Standard Hours) × Daily Payroll

```

#### Piège 3 — embaucher avant de mesurer la capacité (le piège du débit)

*Hypothèse :* la production a manqué les objectifs -> nous devons embaucher un autre opérateur de ligne.
*Réalité :* si l'utilisation actuelle de la main-d'œuvre n'est que de 72 %, embaucher un autre travailleur ne fait qu'ajouter des frais de temps mort.

**Interprétation correcte :**
Augmente l'utilisation et élimine les goulets d'étranglement de planification pour libérer la capacité cachée *avant* d'augmenter la paie.

```excel
Effective Capacity = Available Workforce Hours × Current Utilization Rate

```

</details>

---

## La logique métier et la méthodologie

Pour combler le fossé entre les registres financiers de paie et l'exécution sur l'atelier, ce moteur abandonne l'observation subjective en faveur des méthodologies **du calcul des coûts standard** et **du calcul des coûts par activité (ABC)**. 

### 1. Le problème métier central : la déconnexion de la paie
Dans la plupart des opérations de fabrication petites et moyennes, la main-d'œuvre directe est traitée comme une charge hebdomadaire fixe dans le compte de résultat. Le service financier connaît la paie totale, et l'équipe de production connaît la production physique totale. Cependant, comme les opérateurs changent fréquemment de lignes de produits et d'étapes de gamme, la direction perd la visibilité sur *la quantité de main-d'œuvre* réellement consommée par *quel produit*. 

Cette déconnexion conduit à des marges brutes déformées, des stratégies de tarification inexactes et une planification des capacités aveugle où l'embauche repose sur le stress plutôt que sur les mathématiques.

### 2. La méthodologie : le calcul des coûts standard par activité
Ce moteur analytique résout la déconnexion en mettant en œuvre une méthodologie quantitative en trois étapes :

*   **Phase 1 : normalisation via les heures standard gagnées**
    Au lieu de compter les unités physiques (qui varient énormément en complexité de main-d'œuvre), le moteur convertit toute la production en une monnaie opérationnelle universelle : les **heures standard**. En définissant un taux de débit théorique (unités par heure) pour chaque étape de gamme, le modèle calcule exactement combien de temps *aurait dû* être consacré pour atteindre le rendement journalier réel.
*   **Phase 2 : répartition proportionnelle des coûts de main-d'œuvre (ABC)**
    Les tableurs traditionnels répartissent souvent la paie quotidienne uniformément entre tous les produits fabriqués ce jour-là—une méthode défectueuse qui pénalise les SKU simples à gros volume et subventionne les complexes à forte intensité de main-d'œuvre. Ce moteur répartit les dollars proportionnellement à l'effort. Si le produit A a généré 70 % des heures standard gagnées totales de la journée, il absorbe automatiquement 70 % du coût total de main-d'œuvre directe de la journée.
*   **Phase 3 : l'analyse de l'écart d'utilisation**
    En confrontant les **heures réellement payées** aux **heures standard gagnées**, le moteur isole « l'écart d'utilisation ». Cet indicateur révèle le coût financier exact des activités sans valeur ajoutée, telles que les arrêts machine, les ruptures de matériel, les changements de série et les inefficacités de planification.

### 3. Le résultat commercial
En appliquant systématiquement cette logique, le moteur transforme les débats de direction subjectifs (« Avons-nous besoin de plus de personnel ? ») en décisions objectives étayées par les données (« Nous avons 28 % de capacité de main-d'œuvre inutilisée ; nous devons optimiser la planification des lots, pas augmenter la paie »). Elle garantit que la logique de tarification de tes produits est bâtie sur la consommation réelle des ressources, protégeant en fin de compte tes marges d'exploitation.

---

## Autres outils de cette série opérationnelle

Ces modèles suivent une philosophie unifiée : des cadres analytiques légers, basés sur Excel, qui permettent aux équipes opérationnelles de prendre des décisions immédiates fondées sur les données.

* **Système d'estimation de la construction** — Estime les coûts de projet, compare les offres des sous-traitants et suis les budgets de chantier en cours (WIP).
* **Planificateur de prévision et de réapprovisionnement des stocks** — Prévois la demande, calcule le stock de sécurité et fixe les points de réapprovisionnement à partir des données ERP historiques.
* **Registre de stock de détail et maquila** — Suis les stocks d'en-cours en vrac, les défauts de gamme et les produits finis à travers les flux de fabrication sous-traitée.
* **Suivi des finances de voyage** — Surveille la rentabilité logistique, les flux de trésorerie multidevises et les dépenses d'exploitation de flotte.

---

## Licence

Ce projet est sous licence **Apache License 2.0**.

Tu es libre d'utiliser, de modifier et de distribuer ce moteur analytique conformément aux termes de la licence Apache 2.0. Les contributions à la logique des indicateurs de production sont bienvenues tout en préservant la licence d'origine.
