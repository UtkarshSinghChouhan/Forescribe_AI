import application from "../public/sidebar_assests/application.svg";
import renewals from "../public/sidebar_assests/renewals.svg";
import transactions from "../public/sidebar_assests/transactions.svg";
import employees from "../public/sidebar_assests/employees.svg";
import integrations from "../public/sidebar_assests/integration.svg";
import account from "../public/sidebar_assests/account.svg";
import google from "../public/mainContent_assests/google.png";
import office from "../public/mainContent_assests/office.png";
import integration_group from "../public/mainContent_assests/integration_group.svg";
import xero from "../public/mainContent_assests/xero.png";
import quickbox from "../public/mainContent_assests/quickbox.png";
import csv from "../public/mainContent_assests/csv.png";
import accounting_group1 from "../public/mainContent_assests/accounting_group1.svg";
import accounting_group2 from "../public/mainContent_assests/accounting_group2.svg";
import zoom from "../public/mainContent_assests/zoom.png";
import slack from "../public/mainContent_assests/slack.png";
import jira from "../public/mainContent_assests/jira.png";

export const menu_info = [
  {
    id: 1,
    icon: application,
    name: "Applications",
  },
  {
    id: 2,
    icon: renewals,
    name: "Renewals",
  },
  {
    id: 3,
    icon: transactions,
    name: "Transactions",
  },
  {
    id: 4,
    icon: employees,
    name: "Employees",
  },
];
export const settings_info = [
  {
    id: 1,
    icon: integrations,
    name: "Integrations",
  },
  {
    id: 2,
    icon: account,
    name: "Account",
  },
];

export const mc_integration = [
  {
    id: 1,
    symbol: google,
    icon: [integration_group],
    title: "Google Workspace",
    bgcolor: "bg-[#fff]",
    btn: true,

    detail:
      "Setup Google Workspace with one-click to work flawlessly with Forescribe",
  },
  {
    id: 2,
    symbol: office,
    icon: [integration_group],
    title: "Office 365",
    bgcolor: "",
    btn: true,
    detail:
      "Setup Office 365 if your organization depends on it as an Identity provider",
  },
];

export const mc_accounting = [
  {
    id: 1,
    symbol: xero,
    icon: [accounting_group1, accounting_group2],
    title: "Xero",
    bgcolor: "bg-[#13B5EA]",
    btn: true,
    detail:
      "Gather actionable information for every known Application that persists in your books",
  },
  {
    id: 2,
    symbol: quickbox,
    icon: [accounting_group1, accounting_group2],
    title: "Quickbooks",
    btn: true,
    bgcolor: "24A205",
    detail:
      "Organize your App spend and gather actionable insights to make informed decisions",
  },
  {
    id: 3,
    symbol: csv,
    icon: [accounting_group1, accounting_group2],
    title: "CSV",
    bgcolor: "E1F0F1",
    btn: true,
    detail:
      "Manually upload your transaction data every month and stay aware of your App spend and usage",
  },
];

export const mc_engagement = [
  {
    id: 1,
    symbol: zoom,
    title: "Zoom",
    bgcolor: "518EF7",
    btn: false,
    icon: [],
    detail:
      "Gather actionable insights off Zoom and stay aware of its user engagement and analyse spend",
  },
  {
    id: 2,
    symbol: slack,
    title: "Slack",
    bgcolor: "541855",
    btn: false,
    icon: [],
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    symbol: jira,
    icon: [],
    title: "Jira",
    bgcolor: "",
    btn: false,
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
