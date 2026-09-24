export type SpotType = 'reservoir' | 'lake' | 'river' | 'paid_lake' | 'sea';

export type AccessType = 'free' | 'paid';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type DataConfidence = 'sample' | 'needs_verification' | 'verified';

export interface FishingSpot {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: SpotType;
  access: AccessType;
  price?: string;
  region: string;
  nearestTown: string;
  fishSpecies: string[];
  techniques: string[];
  facilities: string[];
  bestSeasons: string[];
  accessNotes: string;
  permitNotes: string;
  shoreAccess: string;
  nightFishing: boolean;
  boatAllowed: boolean;
  difficulty: DifficultyLevel;
  dataConfidence: DataConfidence;
  lastUpdated: string;
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
