<script setup lang="ts">
import L from 'leaflet';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { FishingShop, FishingSpot } from '../types/fishing';
import type { UserLocation } from '../composables/useGeolocation';

const props = defineProps<{
  spots: FishingSpot[];
  shops: FishingShop[];
  selectedSpot: FishingSpot | null;
  userLocation: UserLocation | null;
}>();

const emit = defineEmits<{
  selectSpot: [spot: FishingSpot];
}>();

const mapEl = ref<HTMLDivElement | null>(null);
let map: L.Map | null = null;
let spotLayer: L.LayerGroup | null = null;
let shopLayer: L.LayerGroup | null = null;
let userMarker: L.CircleMarker | null = null;

const spotIcon = L.divIcon({
  className: 'map-marker map-marker-spot',
  html: '<span></span>',
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

const shopIcon = L.divIcon({
  className: 'map-marker map-marker-shop',
  html: '<span></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

function renderSpots() {
  if (!map || !spotLayer) return;

  spotLayer.clearLayers();
  props.spots.forEach((spot) => {
    L.marker([spot.latitude, spot.longitude], { icon: spotIcon })
      .bindTooltip(`${spot.waterBody.name} · ${spot.name}`)
      .on('click', () => emit('selectSpot', spot))
      .addTo(spotLayer as L.LayerGroup);
  });
}

function renderShops() {
  if (!map || !shopLayer) return;

  shopLayer.clearLayers();
  props.shops.forEach((shop) => {
    L.marker([shop.latitude, shop.longitude], { icon: shopIcon })
      .bindTooltip(`${shop.name}, ${shop.city}`)
      .bindPopup(`<strong>${shop.name}</strong><br>${shop.description}`)
      .addTo(shopLayer as L.LayerGroup);
  });
}

function renderUserLocation() {
  if (!map || !props.userLocation) return;

  const coordinates: L.LatLngExpression = [props.userLocation.latitude, props.userLocation.longitude];
  if (userMarker) {
    userMarker.setLatLng(coordinates);
    return;
  }

  userMarker = L.circleMarker(coordinates, {
    radius: 8,
    color: '#14532d',
    weight: 2,
    fillColor: '#22c55e',
    fillOpacity: 0.8,
  })
    .bindTooltip('Текуща позиция')
    .addTo(map);
}

onMounted(() => {
  if (!mapEl.value) return;

  map = L.map(mapEl.value, {
    zoomControl: false,
  }).setView([42.7339, 25.4858], 7);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  spotLayer = L.layerGroup().addTo(map);
  shopLayer = L.layerGroup().addTo(map);

  renderSpots();
  renderShops();
  renderUserLocation();
});

watch(() => props.spots, renderSpots, { deep: true });
watch(() => props.shops, renderShops, { deep: true });
watch(() => props.userLocation, renderUserLocation, { deep: true });

watch(
  () => props.selectedSpot,
  (spot) => {
    if (!map || !spot) return;
    map.flyTo([spot.latitude, spot.longitude], 11, {
      duration: 0.8,
    });
  },
);

onBeforeUnmount(() => {
  map?.remove();
});
</script>

<template>
  <div ref="mapEl" class="map-shell" aria-label="Карта с риболовни места в България" />
</template>
