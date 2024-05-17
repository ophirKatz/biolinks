export type UserProfileModel = {
  id: string;
  username: string;
  title: string;
  description: string;
  cover_photo1_url?: string;
  cover_photo2_url?: string;
  cover_photo3_url?: string;
  tabs: UserTabModel[];
  channels: UserChannelModel[];
  coupons: UserCouponModel[];
  products: UserProductModel[];
};

export enum TabType {
  Products = "Products",
  Coupons = "Coupons",
  Contact = "Contact",
}

export enum ChannelType {
  Instagram = "Instagram",
  Tiktok = "Tiktok",
  Youtube = "Youtube",
}

export type UserTabModel = {
  id: number;
  type: TabType;
  is_active: boolean;
  count: number;
};

export function getTabName(tab: UserTabModel) {
  switch (tab.type) {
    case TabType.Products:
      return "מוצרים";
    case TabType.Coupons:
      return "קודי קופון";
    case TabType.Contact:
      return "יצירת קשר";
  }
}

export type UserChannelModel = {
  id: string;
  type: ChannelType;
  follower_count: string;
  url: string;
};

export type UserCouponModel = {
  id: string;
  title: string;
  description: string;
  url: string;
  coupon_code: string;
};

export type UserProductModel = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
};
