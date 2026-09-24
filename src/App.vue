<script setup lang="ts">
import { computed, ref } from 'vue';
import FishingMap from './components/FishingMap.vue';
import SpotDetail from './components/SpotDetail.vue';
import SpotFilters from './components/SpotFilters.vue';
import { useGeolocation } from './composables/useGeolocation';
import { fishingShops, fishingSpots, waterBodies } from './data/fishingSpots';
import type { FishingSpot, SpotFilters as SpotFiltersType } from './types/fishing';

const selectedSpot = ref<FishingSpot | null>(null);
const filters = ref<SpotFiltersType>({
  query: '',
  type: 'all',
  access: 'all',
  showShops: true,
});

const { userLocation, geolocationStatus } = useGeolocation();

const filteredSpots = computed(() =>
  fishingSpots.filter((spot) => {
    const normalizedQuery = filters.value.query.trim().toLocaleLowerCase('bg-BG');
    const searchableText = [
      spot.name,
      spot.waterBody.name,
      spot.waterBody.region,
      spot.waterBody.nearestTown,
      ...spot.waterBody.fishSpecies,
      ...spot.waterBody.techniques,
    ]
      .join(' ')
      .toLocaleLowerCase('bg-BG');
    const matchesQuery = normalizedQuery === '' || searchableText.includes(normalizedQuery);
    const matchesType = filters.value.type === 'all' || spot.waterBody.type === filters.value.type;
    const matchesAccess = filters.value.access === 'all' || spot.waterBody.access === filters.value.access;
    return matchesQuery && matchesType && matchesAccess;
  }),
);

const visibleShops = computed(() => (filters.value.showShops ? fishingShops : []));

const locationText = computed(() => {
  if (geolocationStatus.value === 'allowed') return 'Локацията е активна';
  if (geolocationStatus.value === 'loading') return 'Търся текущата позиция';
  if (geolocationStatus.value === 'denied') return 'Локацията не е разрешена';
  if (geolocationStatus.value === 'unavailable') return 'Локацията не е налична';
  return 'Локация';
});

function selectRandomSpot() {
  if (filteredSpots.value.length === 0) {
    selectedSpot.value = null;
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredSpots.value.length);
  selectedSpot.value = filteredSpots.value[randomIndex];
}
</script>

<template>
  <main class="app-layout">
    <section class="sidebar" aria-label="Контролен панел">
      <div class="brand-block">
        <p class="kicker">Bulgaria fishing picker</p>
        <h1>FishSpot BG</h1>
        <p class="intro">
          Карта за бърз избор на риболовно място, когато имаш време за излет, но още нямаш посока.
        </p>
      </div>

      <SpotFilters v-model="filters" @random="selectRandomSpot" />

      <div class="status-strip">
        <span>{{ waterBodies.length }} водоема</span>
        <span>{{ filteredSpots.length }} точки</span>
        <span>{{ visibleShops.length }} магазина</span>
        <span>{{ locationText }}</span>
      </div>

      <SpotDetail :spot="selectedSpot" />
    </section>

    <section class="map-area">
      <FishingMap
        :spots="filteredSpots"
        :shops="visibleShops"
        :selected-spot="selectedSpot"
        :user-location="userLocation"
        @select-spot="selectedSpot = $event"
      />
    </section>
  </main>
</template>
