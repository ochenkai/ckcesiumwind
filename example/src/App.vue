<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as Cesium from 'cesium';
import WindLayer from 'chenkai-cesiumwind';
import winddata from './assets/wind.js'
const viewer = ref(null)
const buttonTitle = ref('隐藏地球')
onMounted(() => {
  initViewer()
  createOceanLayer()
})
const initViewer = () => {
  viewer.value = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    animation: false,
    baseLayerPicker: false,
    vrButton: false,
    geocoder: false,
    homeButton: true,
    timeline: false,
    sceneModePicker: false,
    infoBox: false,
    navigationHelpButton: false,
    skyAtmosphere: false
  });
}
const createOceanLayer = () => {
  const windOptions = {
    colorScale: [
      'rgb(33,33, 120)',
      'rgb(36,104, 180)',
      'rgb(60,157, 194)',
      'rgb(128,205,193 )',
      'rgb(151,218,168 )',
      'rgb(198,231,181)',
      'rgb(238,247,217)',
      'rgb(36,104, 180)',
      'rgb(60,157, 194)',
      'rgb(128,205,193 )',
      'rgb(151,218,168 )',
      'rgb(198,231,181)',
      'rgb(238,247,217)',
      'rgb(36,104, 180)',
      'rgb(60,157, 194)',
    ],
    frameRate: 16,
    maxAge: 60,
    globalAlpha: 0.9,
    velocityScale: 1 / 30,
    paths: 2000
  };
  const windLayer = new WindLayer(winddata, {windOptions});
  windLayer.addTo(viewer.value);
}
const switchBall = () => {
  console.log(viewer.value)
  if (buttonTitle.value === '显示地球') {
    buttonTitle.value = '隐藏地球'
    viewer.value.scene.globe.show = true
  } else {
    buttonTitle.value = '显示地球'
    viewer.value.scene.globe.show = false
  }
}
</script>

<template>
  <div id="app">
    <div id="cesiumContainer"></div>
    <button @click="switchBall">{{buttonTitle}}</button>
  </div>
</template>
<style scoped>
#app {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
}
button {
  position: absolute;
  top: 55px;
  right: 20px;
}
</style>
<style>
#app #cesiumContainer .cesium-viewer-bottom {
  display: none;
}
</style>
