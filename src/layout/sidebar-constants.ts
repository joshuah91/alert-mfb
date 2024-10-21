import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import transactionIcon from "../assets/icons/transaction-icon.svg";
import refundsIcon from "../assets/icons/refunds-icon.svg";
import paymentsIcon from "../assets/icons/payments-icon.svg";
import cardsIcon from "../assets/icons/cards-icon.svg";
import accountsIcon from "../assets/icons/accounts-icon.svg";
import billsIcon from "../assets/icons/bills-icon.svg";
import commerceIcon from "../assets/icons/commerce-icon.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import contactIcon from "../assets/icons/contact-icon.svg";

export const sidebarConstants = [
  {
    name: "Dashboard",
    path: "/",
    icon: dashboardIcon,
    activeIcon: dashboardIcon,
  },
  {
    name: "Transactions",
    // path: "/transaction",
    icon: transactionIcon,
    activeIcon: transactionIcon,
  },
  {
    name: "Refunds",
    // path: "/transaction",
    icon: refundsIcon,
    activeIcon: refundsIcon,
  },
  {
    name: "Payments",
    // path: "/transaction",
    icon: paymentsIcon,
    activeIcon: paymentsIcon,
  },
  {
    name: "Cards",
    // path: "/transaction",
    icon: cardsIcon,
    activeIcon: cardsIcon,
  },
  {
    name: "Accounts",
    // path: "/transaction",
    icon: accountsIcon,
    activeIcon: accountsIcon,
  },
  {
    name: "Manage Bills",
    // path: "/transaction",
    icon: billsIcon,
    activeIcon: billsIcon,
  },
  {
    name: "Ecommerce",
    // path: "/transaction",
    icon: commerceIcon,
    activeIcon: commerceIcon,
  },
  {
    name: "Settings",
    // path: "/transaction",
    icon: settingsIcon,
    activeIcon: settingsIcon,
  },
  {
    name: "Contact us",
    // path: "/transaction",
    icon: contactIcon,
    activeIcon: contactIcon,
  },
];
