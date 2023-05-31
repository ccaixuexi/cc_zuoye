<template>
  <div>

    <div id="app">
      <div class="app-body">
        <div class="header">
          <nav>
            <RouterLink to="/">
              <div class="projectname">
                <font-awesome-icon icon="fa-solid fa-sun"
                  style="font-size: 1.5rem; line-height: 2rem; font-weight: 900;" />
                <span style="font-size: 1.5rem; line-height: 2rem;">新中地天气</span>
              </div>
            </RouterLink>
            <div class="cityweather">
              <span style="font-size: 1.125rem; line-height: 1.75rem;">{{ curCityName }}</span>
              <span style="font-size: 0.875rem; line-height: 1.25rem;">实时天气：{{ curCityWeatherNow.weather }}{{
                curCityWeatherNow.temperature }}℃</span>
              <span style="font-size: 0.875rem; line-height: 1.25rem;">{{ curCityWeatherNow.winddirection }}风{{
                curCityWeatherNow.windpower }}级</span>
            </div>
            <div class="operation">
              <font-awesome-icon icon="fa-solid fa-circle-info" @click="infoabout" class="icon-i"/>
              <font-awesome-icon icon="fa-solid fa-plus" v-if="this.$route.path == '/weatherselected'"
                @click="storeweather" class="icon-plus" />
            </div>
          </nav>
        </div>

        <div class="content">
          <RouterView />
        </div>
      </div>
    </div>

    <div class="info-about" v-if="infoisShow">
      <div class="info-box">
        <h2>关于：</h2>
        <p>这个应用可以用来追踪你选择城市的当前天气</p>
        <h2>如何使用：</h2>
        <p>
          1.点击搜索框输入你希望追踪的城市
          <br>
          2.在搜索结果中选中一个城市，你将获取当地最新的天气
          <br>
          3.点击右侧的＋号可以将追踪城市的天气情况保存在首页
        </p>
        <h2>移除城市：</h2>
        <p>如果你不想在首页关注某个城市,可以通过底部的按钮删
          除它</p>
        <button @click="close">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>

import { RouterLink, RouterView } from 'vue-router';

import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      curCity: {},
      citylist: [],
      // iShow: true,
      // infoisShow: false,
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  mounted(){
    // this.iShow = this.citylist.every(item=>item.name!==this.cityNameStorage)
    // this.citylist.forEach(item=>{
    //   if(item.name == this.cityNameStorage){
    //     this.iShow = false
    //   }else{
    //     this.iShow = true
    //   }
    // })
  },
  async mounted() {
    //请求数据
    this.$store.dispatch('localCity')
  },
  computed: {
    ...mapState(['curCityName', 'curCityWeatherNow', 'cityNameStorage', 'selectCityWeatherTemp', 'selectCityAdc']),
  },
  methods: {
    infoabout(){
      this.infoisShow = true
    },
    close(){
      this.infoisShow = false
    },
    storeweather() {
      // this.iShow = false
      let obj = {}
      obj.name = this.cityNameStorage
      obj.temp = this.selectCityWeatherTemp
      obj.adcode = this.selectCityAdc

      // console.log(JSON.parse(localStorage.getItem("savedata")));
      if (!localStorage.getItem("savedata")) {
        this.citylist.push(obj)
      } else {
        this.citylist = JSON.parse(localStorage.getItem("savedata"));
        this.citylist.push(obj)
      }
      localStorage.setItem('savedata', JSON.stringify(this.citylist))
    }
    // ...mapMutations(['storeweather'])
  }
}
</script>

<style scoped>
.app-body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: rgb(0, 102, 138, 1);

}

.header {
  width: 100%;
  top: 0px;
  position: sticky;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
  background-color: rgb(0, 102, 138, 1);
  z-index: 10;
}

nav {
  margin: 0 auto;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  max-width: 1536px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(255, 255, 255);
  gap: 1rem;
}

a {
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
}

.projectname {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.cityweather {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.operation {
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
  gap: 0.75rem;
}

.content {
  max-width: 1536px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10rem;
  padding-left: 10rem;
}

.info-about {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 20;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  --tw-bg-opacity: .3;
  padding-left: 2rem;
  padding-right: 2rem;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.info-box {
  margin-top: 8rem;
  max-width: 768px;
  align-self: flex-start;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 1rem;
}

h2 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}

p {
  margin: 0;
  margin-bottom: 1rem;
  font-size: .75rem;
  line-height: 1rem;
}

button {
  margin: 0;
  text-transform: none;
  background-image: none;
  cursor: pointer;
  margin-top: 2rem;
  --tw-bg-opacity: 1;
  background-color: rgb(0 102 138 / var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: .75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.icon-i:hover{
  background-color: rgb(0, 78, 113, 1);
}
.icon-plus{
  background-color: rgb(0, 78, 113, 1);
  cursor: pointer;
}
</style>