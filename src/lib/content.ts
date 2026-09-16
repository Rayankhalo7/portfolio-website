export const site = {
  name: "Rayan Khalo",
  role: "Webentwickler / Fachinformatiker AE",
  location: "Hofgeismar",
  availability: "nach Absprache",
  email: "r.khalo@web.de",
  githubUser: "Rayankhalo7",
};

export const profileText =
  "Junior- bis Early-Professional-Webentwickler mit IHK-Abschluss als Fachinformatiker Anwendungsentwicklung. Schwerpunkt: Webplattformen mit PHP, JavaScript/TypeScript, SQL, Laravel, React/Next.js und WordPress; praxisnah in DNS- und Mailserver-Betrieb. Suche eine entwicklungsnahe Web-/Fullstack-Rolle (hybrid, Region oder remote). Arbeitsproben aus Firmenprojekten auf Anfrage.";

/** Kuratierte Experience für Web-Scan (max. 3–4 Bullets); Volltext bleibt im Lebenslauf. */
export const experience = [
  {
    period: "01/2026 – heute",
    title: "Webentwickler",
    org: "HB-Internetservice GmbH & Co. KG, Hofgeismar",
    items: [
      "Weiterentwicklung von Kunden-Webplattformen (u. a. WordPress) in Backend und Frontend",
      "SQL: Abfragen, Datenpflege und Analyse von Schnittstellenfehlern",
      "DNS- und Mailbetrieb inkl. DKIM, SPF und DMARC",
      "Debugging von Störungen und Integrationen im laufenden Betrieb",
    ],
  },
  {
    period: "08/2022 – 01/2026",
    title: "Ausbildung Fachinformatiker für Anwendungsentwicklung",
    org: "HB-Internetservice GmbH & Co. KG, Hofgeismar",
    items: [
      "Ausbildung in Softwarearchitektur, Datenbanken und Netzwerken",
      "Abschlussprojekt „Zeitmeister“: Zeiterfassung mit Python und Flask",
      "Aufbau eines Büronetzwerks (5 Arbeitsplätze + Server)",
      "IHK-Abschluss bestanden (DQR-Niveau 4)",
    ],
  },
];

export const skillGroups = [
  {
    title: "Schwerpunkt",
    skills: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
      "SQL",
      "WordPress",
      "Git",
    ],
  },
  {
    title: "Frameworks & Web",
    skills: ["Laravel", "React", "Next.js", "Flask", "Angular (Grundlagen)"],
  },
  {
    title: "Netzwerk & Mail",
    skills: [
      "LAN-Aufbau",
      "DNS (A, MX, CNAME)",
      "Mailserver / Mailboxen",
      "DKIM / SPF / DMARC",
    ],
  },
  {
    title: "Weitere",
    skills: [
      "Java",
      "C#",
      ".NET",
      "Spring Boot",
      "JSON",
      "XML",
      "Windows 10/11",
      "Linux",
      "Virtualisierung",
      "VS Code",
      "Jira",
      "Asana",
      "Microsoft 365",
    ],
  },
  {
    title: "Sprachen",
    skills: [
      "Deutsch – Sehr gut",
      "Englisch – Sehr gut",
      "Arabisch – Sehr gut",
      "Kurdisch – Muttersprache",
    ],
  },
];

export const projects = [
  {
    title: "ChronoTrack",
    description:
      "Fullstack-Zeiterfassung mit Demo-Login: Projekte, Start/Stop und Dashboard — offen nachvollziehbar als Portfolio-Demo.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    repoUrl: "https://github.com/Rayankhalo7/chronotrack-demo",
    /** Live erst nach Deploy — UI soll Link weglassen oder als „Demo folgt“ zeigen, kein „Platzhalter“-Wording. */
    liveUrl: undefined as string | undefined,
    liveStatus: "coming_soon" as const,
  },
];

export const firmSamplesNote = "Firmen-Arbeitsproben auf Anfrage.";

export const zeitmeisterNote =
  "Abschlussprojekt „Zeitmeister“ (Python, Flask) — beschrieben auf About; öffentliche Neuimplementierung als ChronoTrack.";
