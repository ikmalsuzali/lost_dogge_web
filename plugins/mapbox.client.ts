import VueMapboxTs from "vue-mapbox-ts";
import Mapbox from "mapbox-gl";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMapboxTs, { mapboxgl: Mapbox });
});