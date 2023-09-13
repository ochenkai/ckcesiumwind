import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
declare global {
  interface Window { CESIUM_BASE_URL: any; }
}
// 配置Cesium根目录
window.CESIUM_BASE_URL = '/'
// 导入Cesium默认样式
import 'cesium/Build/Cesium/Widgets/widgets.css'
// 配置defaultAccessToken
import { Ion } from 'cesium'
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1OGY1NjRjOC01MjI2LTRlODctOTkzZi00NzE4ODA3NjgzMjIiLCJpZCI6MTUzMjk5LCJpYXQiOjE2ODkxMzE2NjF9.lyR-uV7WfOyo61THwQq5IA6UXkJqQUPFKkF8XquKx6g'
createApp(App).mount('#app')
