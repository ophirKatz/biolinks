enum TabType {
  Products = "Products",
  Coupons = "Coupons",
}

type Tab = {
  type: TabType;
  isActive: boolean;
  // TODO : Add links
};

export type JoinUser = {
  email: string;
  username: string;
  tabs: Tab[];
};
