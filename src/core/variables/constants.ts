export enum Pages {
  Main = "",
  Auth = "Auth",
  Reg = "Sign-up",
  Profile = "Profile",
  Dashboard = "Dashboard",
  Applications = "Applications",
  RecoveryPass = "RecoveryPass",
  Board = "Board",
  Kanban = "Kanban",
}

export const getPath = (page: Pages): string => `/${page.toLowerCase()}`;

export enum LocalMenu {
  Board = "Board",
  Activities = "Activities",
  Contacts = "Contacts",
  Documents = "Documents",
  Map = "Map",
  Metrics = "Metrics",
}

export enum BoardMenu {
  WISHLIST = "WISHLIST",
  APPLIED = "APPLIED",
  INTERVIEW = "INTERVIEW",
  OFFER = "OFFER",
}
