
export interface Adventure {
  id: string;
  title: string;
  slug: string;
  mapImage: string;
  youtubeId: string;
  stats: {
    distance: string;
    days: string;
    avgSpeed: string;
    extraLabel: string;
    extraValue: string;
    views: string;
  };
  sponsors: string[];
}

export interface SocialStats {
  instagram: number;
  tiktok: number;
  youtube: number;
  total: number;
}
