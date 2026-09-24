import { onMounted, ref } from 'vue';

export interface UserLocation {
  latitude: number;
  longitude: number;
}

export function useGeolocation() {
  const userLocation = ref<UserLocation | null>(null);
  const geolocationStatus = ref<'idle' | 'loading' | 'allowed' | 'denied' | 'unavailable'>('idle');

  onMounted(() => {
    if (!('geolocation' in navigator)) {
      geolocationStatus.value = 'unavailable';
      return;
    }

    geolocationStatus.value = 'loading';

    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation.value = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        geolocationStatus.value = 'allowed';
      },
      () => {
        geolocationStatus.value = 'denied';
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 300000,
      },
    );
  });

  return {
    userLocation,
    geolocationStatus,
  };
}
