export type TStyledProps = {
  $isActive?: boolean;
};

export type TCustomLinkProps = {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

export type TPost= {
    id: string;
    userId: string;
    username: string;
    avatar: string;
    shopName: string;
    shopId: string;
    images: string[];
    comments: number;
    date: string;
    text: string;
    likes: number;
    didLike: boolean;
    premium: boolean;
};

export type TGetPostsReport = {
  hasMore: boolean;
  data: TPost[];
};