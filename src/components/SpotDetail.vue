<script setup lang="ts">
import type { FishingSpot } from '../types/fishing';

defineProps<{
  spot: FishingSpot | null;
}>();

const typeLabels: Record<FishingSpot['waterBody']['type'], string> = {
  reservoir: 'Язовир',
  lake: 'Езеро',
  river: 'Река',
  paid_lake: 'Платен водоем',
  sea: 'Море',
};

const difficultyLabels: Record<FishingSpot['difficulty'], string> = {
  easy: 'Лесен',
  medium: 'Среден',
  hard: 'Труден',
};

const confidenceLabels: Record<FishingSpot['dataConfidence'], string> = {
  sample: 'Примерни данни',
  needs_verification: 'За проверка',
  verified: 'Потвърдено',
};
</script>

<template>
  <aside class="detail-panel" aria-live="polite">
    <template v-if="spot">
      <img class="detail-image" :src="spot.waterBody.photos[0]" :alt="spot.waterBody.name" />
      <div class="detail-content">
        <p class="eyebrow">
          {{ typeLabels[spot.waterBody.type] }} · {{ spot.waterBody.access === 'free' ? 'Свободен' : 'Платен' }}
        </p>
        <h2>{{ spot.waterBody.name }}</h2>
        <p class="access-point-name">{{ spot.name }}</p>
        <p class="location-line">{{ spot.waterBody.region }} · близо до {{ spot.waterBody.nearestTown }}</p>
        <p class="description">{{ spot.waterBody.description }}</p>

        <div class="quick-facts">
          <div class="fact">
            <span>Достъп</span>
            <strong>{{ spot.waterBody.access === 'free' ? 'Свободен' : 'Платен' }}</strong>
          </div>
          <div class="fact">
            <span>Трудност</span>
            <strong>{{ difficultyLabels[spot.difficulty] }}</strong>
          </div>
          <div class="fact">
            <span>Лодка</span>
            <strong>{{ spot.boatAllowed ? 'Да' : 'Не' }}</strong>
          </div>
          <div class="fact">
            <span>Нощен</span>
            <strong>{{ spot.nightFishing ? 'Да' : 'Не' }}</strong>
          </div>
        </div>

        <div class="detail-section">
          <h3>Риби</h3>
          <div class="tag-list">
            <span v-for="species in spot.waterBody.fishSpecies" :key="species">{{ species }}</span>
          </div>
        </div>

        <div class="detail-section">
          <h3>Подходящо за</h3>
          <div class="tag-list">
            <span v-for="technique in spot.waterBody.techniques" :key="technique">{{ technique }}</span>
          </div>
        </div>

        <div class="detail-section">
          <h3>Практична информация</h3>
          <dl class="info-list">
            <div v-if="spot.waterBody.price">
              <dt>Цена</dt>
              <dd>{{ spot.waterBody.price }}</dd>
            </div>
            <div>
              <dt>Достъп</dt>
              <dd>{{ spot.accessNotes }}</dd>
            </div>
            <div>
              <dt>Брегове</dt>
              <dd>{{ spot.shoreAccess }}</dd>
            </div>
            <div>
              <dt>Правила</dt>
              <dd>{{ spot.waterBody.permitNotes }}</dd>
            </div>
          </dl>
        </div>

        <div class="detail-section">
          <h3>Удобства</h3>
          <div class="tag-list neutral">
            <span v-for="facility in spot.facilities" :key="facility">{{ facility }}</span>
          </div>
        </div>

        <div class="detail-section">
          <h3>Сезон</h3>
          <div class="tag-list neutral">
            <span v-for="season in spot.waterBody.bestSeasons" :key="season">{{ season }}</span>
          </div>
        </div>

        <div class="data-note">
          <span>{{ confidenceLabels[spot.dataConfidence] }}</span>
          <span>Обновено: {{ spot.lastUpdated }}</span>
        </div>
      </div>
    </template>

    <div v-else class="empty-detail">
      <h2>Избери място от картата</h2>
      <p>Или натисни Random Spot, когато не знаеш накъде да тръгнеш.</p>
    </div>
  </aside>
</template>
