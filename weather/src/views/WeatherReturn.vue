<template>
    <div id="cityselected">
      <div class="prompt-info">
        <span>你正在预览{{returnCityName}}的天气，可以通过右上角的"+"号按钮保存起来</span>
      </div>
      <div class="prompt-weather">
        <h1>当日气温是：{{ returnCityWeatherCur.daytemp }}</h1>
        <h1>当日天气是：{{ returnCityWeatherCur.dayweather }}</h1>
        <h1>当日风向是：{{ returnCityWeatherCur.daywind }}风</h1>
        <h1>当日风力是：{{ returnCityWeatherCur.daypower }}级</h1>
      </div>
      <div class="weather-box">
        <div class="weather-info">
          <div class="info-box" v-for="item in returnCityWeatherFore" :key="item.date">
            <span>今天</span>
            <!-- <span>{{ `${item.date.split("-")[1]}-${item.date.split("-")[2]}` }}</span> -->
            <span>{{ item.date.split("-")[1] }}-{{ item.date.split("-")[2] }}</span> <!-- 这两种写法都可以，但是下面这种写法逻辑更清晰 -->
            <span>白：{{ item.dayweather }}/夜：{{ item.nightweather }}</span>
            <span>风力：{{ item.daypower }}</span>
          </div>
        </div>
        <div style="height: 16rem; width: 800px;margin: 0 auto;">
              <v-chart :option="returnCityOption"></v-chart>
          </div>
      </div>
    </div>
  </template>
    
  <script>
  
  import { mapState } from 'vuex';
  
  export default {
    
    computed: {
      ...mapState(['returnCityWeatherFore','returnCityOption','returnCityName','returnCityWeatherCur'])
    }
  }
  </script>
    
  <style scoped>
  #cityselected {
    display: flex;
    flex-direction: column;
    color: rgb(255, 255, 255);
  }
  
  .prompt-info {
    text-align: center;
    padding: 0.5rem;
    background-color: rgb(0, 78, 113);
  }
  
  .prompt-weather {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10rem;
    padding-right: 10rem;
    max-width: 1280px;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  h1 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  .weather-box {
      padding-top: 2.5rem;
      padding-left: 3rem;
      padding-right: 3rem;
      background-color: rgb(0, 78, 113);
      border-radius: 0.25rem;
      margin-top: 2rem;
      color: rgb(255, 255, 255);
  }
  .weather-info {
    display: flex;
    gap: 1.5rem;
  }
  
  .info-box {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }</style>