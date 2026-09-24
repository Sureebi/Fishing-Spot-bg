export type SpotType = 'reservoir' | 'lake' | 'river' | 'paid_lake' | 'sea';

export type AccessType = 'free' | 'paid';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type DataConfidence = 'sample' | 'needs_verification' | 'verified';

export interface WaterBody {
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
  bestSeasons: string[];
  permitNotes: string;
  description: string;
  photos: string[];
}

export interface FishingAccessPoint {
  id: string;
  waterBodyId: string;
  name: string;
  latitude: number;
  longitude: number;
  facilities: string[];
  accessNotes: string;
  shoreAccess: string;
  nightFishing: boolean;
  boatAllowed: boolean;
  difficulty: DifficultyLevel;
  dataConfidence: DataConfidence;
  lastUpdated: string;
}

export interface FishingSpot extends FishingAccessPoint {
  waterBody: WaterBody;
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
  query: string;
  type: SpotType | 'all';
  access: AccessType | 'all';
  showShops: boolean;
}
