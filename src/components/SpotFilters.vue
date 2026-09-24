<script setup lang="ts">
import type { SpotFilters } from '../types/fishing';

const filters = defineModel<SpotFilters>({ required: true });

defineEmits<{
  random: [];
}>();
</script>

<template>
  <section class="controls" aria-label="Филтри и случаен избор">
    <div class="control-group">
      <label for="spot-type">Тип</label>
      <select id="spot-type" v-model="filters.type">
        <option value="all">Всички места</option>
        <option value="reservoir">Язовири</option>
        <option value="lake">Езера</option>
        <option value="river">Реки</option>
        <option value="paid_lake">Платени водоеми</option>
        <option value="sea">Море</option>
      </select>
    </div>

    <div class="control-group">
      <label for="spot-access">Достъп</label>
      <select id="spot-access" v-model="filters.access">
        <option value="all">Всички</option>
        <option value="free">Свободен</option>
        <option value="paid">Платен</option>
      </select>
    </div>

    <label class="toggle">
      <input v-model="filters.showShops" type="checkbox" />
      <span>Магазини</span>
    </label>

    <button class="random-button" type="button" @click="$emit('random')">Random Spot</button>
  </section>
</template>
