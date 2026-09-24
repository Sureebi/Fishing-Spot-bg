export type SpotType = 'reservoir' | 'lake' | 'river' | 'paid_lake' | 'sea';

export type AccessType = 'free' | 'paid';

export interface FishingSpot {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: SpotType;
  access: AccessType;
  price?: string;
  fishSpecies: string[];
  description: string;
  photos: string[];
}

export interface FishingShop {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  city: string;
  description: string;
}

export interface SpotFilters {
  type: SpotType | 'all';
  access: AccessType | 'all';
  showShops: boolean;
}
