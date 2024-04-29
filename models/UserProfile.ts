export type UserProfileModel = {
  id: string;
  username: string;
  title: string;
  description: string;
  active_tabs: Tab[]; //
  cover_photo1_url?: string;
  cover_photo2_url?: string;
  cover_photo3_url?: string;
  channels: UserChannelModel[];
  coupons: UserCouponModel[];
  products: UserProductModel[];
};

export enum Tab {
  Products = "products",
  Coupons = "coupons",
  Contact = "contact",
}

export enum ChannelType {
  Instagram = "instagram",
  Tiktok = "tiktok",
  Youtube = "youtube",
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
  title: string;
  description: string;
  url: string;
  image_url?: string;
};
