<template>
  <div class="info-windows">
    <google-map id="map" ref="Map">
      <google-map-marker
          :key="index"
          v-for="(infoWindow, index) in infoWindowsList"
          :position="infoWindow.position"
          @click="toggleInfoWindow(infoWindow)"
      />
      <google-map-infowindow
          :position="infoWindowContext.position"
          :show.sync="showInfo"
          :options="{maxWidth: 300}"
          @info-window-clicked="infoClicked"
      >
        <h4>{{infoWindowContext.title}}</h4>
        <p>{{infoWindowContext.description}}</p>
      </google-map-infowindow>
    </google-map>
  </div>
</template>

<script>
import cities from '@/assets/cities.json'

export default {
  data() {
    return {
      showInfo: false,
      infoWindowContext: {
        position: {
          lat: 44.2899,
          lng: 11.8774
        }
      },
      infoWindowsList: cities
    }
  },
  methods: {
    toggleInfoWindow(context) {
      this.infoWIndowContext = context
      this.showInfo = true
    },
    infoClicked(context) {
      console.log(context)
    }
  }
}
</script>