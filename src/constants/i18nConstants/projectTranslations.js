import { getAsset } from "@/utils/util";

export const myProjects = [
  {
    logo: getAsset("assets/Novelis.png"),
    logoStyle: {
      backgroundColor: "#00539B",
      border: "0.2px solid #00539B",
      boxShadow: "0px 0px 50px 0px rgba(0,83,155,0.3)",
    },
    spotlight: getAsset("assets/spotlight3.png"),
    texture: getAsset("textures/project/p1.mp4"),
    href: "#",
    tags: [
      {
        id: 1,
        name: "Playwright",
        path: getAsset("assets/tech/playwright.png"),
      },
      {
        id: 2,
        name: "JavaScript",
        path: getAsset("assets/tech/javascript.png"),
      },
      { id: 3, name: "SQL", path: getAsset("assets/tech/sql.png") },
      {
        id: 4,
        name: "Salesforce",
        path: getAsset("assets/tech/salesforce.png"),
      },
      { id: 5, name: "ETL Testing", path: getAsset("assets/tech/etl.png") },
      { id: 6, name: "JIRA", path: getAsset("assets/tech/jira.jpg") },
      { id: 7, name: "qTest", path: getAsset("assets/tech/qtest.jpg") },
      {
        id: 8,
        name: "Database Testing",
        path: getAsset("assets/tech/database.png"),
      },
    ],
    content: {
      en: {
        title: "Sales & Insurance Platform Testing – Kaiser Permanente",
        desc: "Enterprise healthcare insurance platform supporting sales workflows, policy lifecycle management, document validation, and UI-based insurance enrollment processes.",
        subdesc:
          "Focused primarily on ETL and database validation across source systems and data warehouse layers. Executed SQL-based backend testing, performed data reconciliation and document comparison testing for insurance workflows, and validated Salesforce sales modules. Automated UI regression scenarios using Playwright (JavaScript). Managed defects and test cycles using JIRA and qTest in Agile delivery environments.",
      },
      kn: {
        title:
          "ಸೇಲ್ಸ್ ಮತ್ತು ಇನ್ಶೂರೆನ್ಸ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಟೆಸ್ಟಿಂಗ್ – Kaiser Permanente",
        desc: "ಆರೋಗ್ಯ ವಿಮೆ ಮಾರಾಟ ಮತ್ತು ಪಾಲಿಸಿ ನಿರ್ವಹಣೆಗೆ ಬೆಂಬಲ ನೀಡುವ ಎಂಟರ್‌ಪ್ರೈಸ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
        subdesc:
          "ETL ಮತ್ತು ಡೇಟಾಬೇಸ್ ಪರಿಶೀಲನೆಗೆ ಮುಖ್ಯವಾಗಿ ಕೇಂದ್ರೀಕರಿಸಿ SQL ಮೂಲಕ ಡೇಟಾ ಸರಿಹೊಂದುವಿಕೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. Playwright ಬಳಸಿ UI automation ಮತ್ತು Salesforce modules ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
      },
    },
  },

  {
    logo: getAsset("assets/kaiser.png.png"),
    logoStyle: {
      backgroundColor: "#007A33",
      border: "0.2px solid #007A33",
      boxShadow: "0px 0px 50px 0px rgba(0,122,51,0.3)",
    },
    spotlight: getAsset("assets/spotlight2.png"),
    texture: getAsset("textures/project/p2.mp4"),
    href: "#",
    tags: [
      { id: 1, name: "SQL", path: getAsset("assets/tech/sql.png") },
      { id: 2, name: "ETL Testing", path: getAsset("assets/tech/etl.png") },
      {
        id: 3,
        name: "Database Testing",
        path: getAsset("assets/tech/database.png"),
      },
      { id: 4, name: "JIRA", path: getAsset("assets/tech/jira.jpg") },
      { id: 5, name: "qTest", path: getAsset("assets/tech/qtest.jpg") },
    ],
    content: {
      en: {
        title:
          "Healthcare Data Warehouse & Reporting Validation – Kaiser Permanente",
        desc: "Centralized enterprise data warehouse supporting healthcare analytics, insurance claims reporting, sales performance dashboards, and regulatory compliance reporting.",
        subdesc:
          "Performed extensive ETL validation across staging, transformation, and warehouse layers. Validated data mappings, transformation rules, aggregation logic, and reconciliation between source and target systems using complex SQL queries. Conducted batch job validation, error log analysis, and report-level data verification to ensure accuracy in healthcare analytics and compliance reporting.",
      },
      kn: {
        title:
          "ಹೆಲ್ತ್‌ಕೇರ್ ಡೇಟಾ ವೇರ್‌ಹೌಸ್ ಮತ್ತು ರಿಪೋರ್ಟಿಂಗ್ ಪರಿಶೀಲನೆ – Kaiser Permanente",
        desc: "ಹೆಲ್ತ್‌ಕೇರ್ ಅನಾಲಿಟಿಕ್ಸ್ ಮತ್ತು ವರದಿ ವ್ಯವಸ್ಥೆಗೆ ಬೆಂಬಲ ನೀಡುವ ಡೇಟಾ ವೇರ್‌ಹೌಸ್.",
        subdesc:
          "ETL ಪ್ರಕ್ರಿಯೆಗಳಲ್ಲಿನ mapping, transformation ಮತ್ತು reconciliation ಪರಿಶೀಲಿಸಲಾಗಿದೆ. SQL ಬಳಸಿ source ಮತ್ತು target ಡೇಟಾ ಪರಿಶೀಲನೆ ನಡೆಸಲಾಗಿದೆ.",
      },
    },
  },
];
