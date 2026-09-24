import type { FishingShop, FishingSpot } from '../types/fishing';

export const fishingSpots: FishingSpot[] = [
  {
    id: 'koprinka',
    name: 'Язовир Копринка',
    latitude: 42.6167,
    longitude: 25.3333,
    type: 'reservoir',
    access: 'free',
    fishSpecies: ['шаран', 'каракуда', 'бяла риба', 'костур'],
    description:
      'Голям и популярен водоем край Казанлък с много удобни брегове. Подходящ е за целодневен излет, спининг и класически риболов от брега.',
    photos: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'dospat',
    name: 'Язовир Доспат',
    latitude: 41.6287,
    longitude: 24.1589,
    type: 'reservoir',
    access: 'free',
    fishSpecies: ['пъстърва', 'костур', 'шаран'],
    description:
      'Планински водоем с прохладен климат и силна атмосфера. Често се избира за уикенд риболов, къмпинг и търсене на пъстърва.',
    photos: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'iskar',
    name: 'Язовир Искър',
    latitude: 42.4684,
    longitude: 23.5684,
    type: 'reservoir',
    access: 'free',
    fishSpecies: ['уклей', 'костур', 'бяла риба', 'шаран'],
    description:
      'Най-големият язовир в България и близък избор за хора от София. Има много различни точки за достъп и условията се променят според сезона.',
    photos: [
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'maritsa-plovdiv',
    name: 'Река Марица край Пловдив',
    latitude: 42.1512,
    longitude: 24.7453,
    type: 'river',
    access: 'free',
    fishSpecies: ['клен', 'мряна', 'скобар', 'каракуда'],
    description:
      'Градски и крайградски речен риболов с бърз достъп. Подходящо за кратки сесии, но нивото и течението трябва да се проверяват внимателно.',
    photos: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'paid-lake-negovan',
    name: 'Платен водоем Негован',
    latitude: 42.7626,
    longitude: 23.4099,
    type: 'paid_lake',
    access: 'paid',
    price: 'Ориентировъчно: дневна такса според правилата на водоема',
    fishSpecies: ['шаран', 'амур', 'толстолоб', 'сом'],
    description:
      'Примерен платен водоем близо до София. Подходящ за организиран излет, когато искаш по-предвидима обстановка и ясни правила.',
    photos: [
      'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'varna-sea',
    name: 'Морски риболов край Варна',
    latitude: 43.2047,
    longitude: 27.9222,
    type: 'sea',
    access: 'free',
    fishSpecies: ['попче', 'сафрид', 'зарган', 'кефал'],
    description:
      'Крайбрежен риболов с лесен достъп от града. Добра отправна точка за бъдещи отделни морски спотове по кейове, буни и плажни ивици.',
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

export const fishingShops: FishingShop[] = [
  {
    id: 'shop-sofia',
    name: 'Риболовен магазин София Център',
    latitude: 42.6977,
    longitude: 23.3219,
    city: 'София',
    description: 'Примерен marker за магазин. По-късно тук може да има работно време, телефон и наличности.',
  },
  {
    id: 'shop-plovdiv',
    name: 'Такъми Пловдив',
    latitude: 42.1354,
    longitude: 24.7453,
    city: 'Пловдив',
    description: 'Локален пример за магазин близо до река Марица.',
  },
  {
    id: 'shop-burgas',
    name: 'Морски такъми Бургас',
    latitude: 42.5048,
    longitude: 27.4626,
    city: 'Бургас',
    description: 'Примерен магазин за морски и сладководен риболов.',
  },
];
