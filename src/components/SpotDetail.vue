<script setup lang="ts">
import type { FishingSpot } from '../types/fishing';

defineProps<{
  spot: FishingSpot | null;
}>();

const typeLabels: Record<FishingSpot['type'], string> = {
  reservoir: 'Язовир',
  lake: 'Езеро',
  river: 'Река',
  paid_lake: 'Платен водоем',
  sea: 'Море',
};
</script>

<template>
  <aside class="detail-panel" aria-live="polite">
    <template v-if="spot">
      <img class="detail-image" :src="spot.photos[0]" :alt="spot.name" />
      <div class="detail-content">
        <p class="eyebrow">{{ typeLabels[spot.type] }} · {{ spot.access === 'free' ? 'Свободен' : 'Платен' }}</p>
        <h2>{{ spot.name }}</h2>
        <p class="description">{{ spot.description }}</p>

        <div v-if="spot.price" class="info-row">
          <span>Цена</span>
          <strong>{{ spot.price }}</strong>
        </div>

        <div class="species-list">
          <span v-for="species in spot.fishSpecies" :key="species">{{ species }}</span>
        </div>
      </div>
    </template>

    <div v-else class="empty-detail">
      <h2>Избери място от картата</h2>
      <p>Или натисни Random Spot, когато не знаеш накъде да тръгнеш.</p>
    </div>
  </aside>
</template>
