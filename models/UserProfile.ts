export type UserProfileModel = {
  id: string;
  username: string;
  title: string;
  bio: string;
  available_tabs: string[]; // 'contact', 'products', 'coupons', etc
  cover_photo1_url?: string;
  cover_photo2_url?: string;
  cover_photo3_url?: string;
  channels: UserChannelModel[];
  coupons: UserCouponModel[];
  products: UserProductModel[];
};

export type UserChannelModel = {
  id: string;
  name: string; // 'instagram' | 'tiktok' | etc
  follower_count: string;
  url: string;
};

export type UserCouponModel = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export type UserProductModel = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
};
