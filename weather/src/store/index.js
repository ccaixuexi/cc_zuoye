import Vue from 'vue'
import Vuex from 'vuex'
import { fetchCityData, queryCurCity, queryCityAdcode, queryCityWeatherAll, queryCityWeatherBase } from '@/request/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citiesNameAll: [],
    citiesMatched: [],
    cityNameStorage: '',
    curCityName: [],
    curCityWeatherFore: [],
    curCityWeatherNow: [],
    curCityOption: {},
    selectCityWeatherFore: [],
    selectCityWeatherCur: {},
    selectCityWeatherTemp: '',
    selectCityAdc: "",
    selectCityOption: {},
    saveCityList: [],

    queryStorage: '',

    returnCityName: '',
    returnCityWeatherFore: [],
    returnCityOption: {},
    returnCityWeatherCur: {}
  },
  getters: {
  },
  mutations: {
    getCitiesName(state, districts) {
      for (const province of districts) {
        for (const city of province.districts) {
          state.citiesNameAll.push(city.name);
        }
      }
    },
    selectMatchedCities(state, chooseCity) {
      if (chooseCity.length === 0) {
        state.citiesMatched = []
        return;
      }
      state.citiesMatched = state.citiesNameAll.filter(city => city.includes(chooseCity));
    },
    // selectCity(state,item) {
    //   state.citiesMatched = []; // 清空匹配的城市列表
    //   state.cityNameStorage = item
    //   // console.log(item);
    // },
    getSelectCityName(state, item) {
      state.citiesMatched = []
      state.cityNameStorage = item
    },
    getCurCityName(state, res) {
      state.curCityName = res.city
    },
    getCurCityWeatherNow(state, _res) {
      state.curCityWeatherNow = _res.lives[0]
    },
    getCurCityWeatherFore(state, res2) {
      res2[0].weekday = '今天'
      res2[1].weekday = '明天'
      var today = new Date()
      today.setDate(today.getDate() + 2)
      let aftertomorrow = today.getDay()

      if (aftertomorrow == 0) {
        res2[2].weekday = '周日'
        res2[3].weekday = '周一'
      } else if (aftertomorrow == 1) {
        res2[2].weekday = '周一'
        res2[3].weekday = '周二'
      } else if (aftertomorrow == 2) {
        res2[2].weekday = '周二'
        res2[3].weekday = '周三'
      } else if (aftertomorrow == 3) {
        res2[2].weekday = '周三'
        res2[3].weekday = '周四'
      } else if (aftertomorrow == 4) {
        res2[2].weekday = '周四'
        res2[3].weekday = '周五'
      } else if (aftertomorrow == 5) {
        res2[2].weekday = '周五'
        res2[3].weekday = '周六'
      } else if (aftertomorrow == 6) {
        res2[2].weekday = '周六'
        res2[3].weekday = '周日'
      }

      state.curCityWeatherFore = res2
      state.curCityOption = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [
              res2[0].daytemp_float,
              res2[1].daytemp_float,
              res2[2].daytemp_float,
              res2[3].daytemp_float,
            ],
            label: {
              show: true,
              formatter: '白 {c}℃', // 显示折点数值
            },
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [
              res2[0].nighttemp_float,
              res2[1].nighttemp_float,
              res2[2].nighttemp_float,
              res2[3].nighttemp_float,
            ],
            label: {
              show: true,
              formatter: '晚 {c}℃', // 显示折点数值
            },
          }
        ]
      }
    },
    getSelectCityWeatherFore(state, res2) {
      res2[0].weekday = '今天'
      res2[1].weekday = '明天'
      var today = new Date()
      today.setDate(today.getDate() + 2)
      let aftertomorrow = today.getDay()

      if (aftertomorrow == 0) {
        res2[2].weekday = '周日'
        res2[3].weekday = '周一'
      } else if (aftertomorrow == 1) {
        res2[2].weekday = '周一'
        res2[3].weekday = '周二'
      } else if (aftertomorrow == 2) {
        res2[2].weekday = '周二'
        res2[3].weekday = '周三'
      } else if (aftertomorrow == 3) {
        res2[2].weekday = '周三'
        res2[3].weekday = '周四'
      } else if (aftertomorrow == 4) {
        res2[2].weekday = '周四'
        res2[3].weekday = '周五'
      } else if (aftertomorrow == 5) {
        res2[2].weekday = '周五'
        res2[3].weekday = '周六'
      } else if (aftertomorrow == 6) {
        res2[2].weekday = '周六'
        res2[3].weekday = '周日'
      }
      state.selectCityWeatherFore = res2
      state.selectCityWeatherCur = res2[0]
      state.selectCityWeatherTemp = res2[0].daytemp
      // console.log(state.selectCityWeatherTemp);
      // console.log(state.selectCityWeatherFore,123456);
      state.selectCityOption = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [
              res2[0].daytemp_float,
              res2[1].daytemp_float,
              res2[2].daytemp_float,
              res2[3].daytemp_float,
            ],
            label: {
              show: true,
              formatter: '白 {c}℃', // 显示折点数值
            },
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [
              res2[0].nighttemp_float,
              res2[1].nighttemp_float,
              res2[2].nighttemp_float,
              res2[3].nighttemp_float,
            ],
            label: {
              show: true,
              formatter: '晚 {c}℃', // 显示折点数值
            },
          }
        ]
      }
    },
    getSelectCityAdcode(state, adc) {
      state.selectCityAdc = adc
    },
    // storeweather(state){
    //     let obj = {}
    //     obj.name = state.cityNameStorage
    //     obj.temp = state.selectCityWeatherTemp
    //     obj.adcode = state.selectCityAdc
    //     state.saveCityList.push(obj)
    //     localStorage.setItem('savedata',JSON.stringify(state.saveCityList))
    //     //  state.queryStorage = localStorage.getItem('savedata')
    //     // localStorage.setItem('savedata',JSON.stringify(state.saveCityList))
    // },
    // removeCity(state,city){
    //   let index = state.saveCityList.indexOf(city)
    //   console.log(state.saveCityList,123);
    //   console.log(index);
    //   state.saveCityList=state.saveCityList.splice(index,1)
    //   localStorage.setItem('savedata',JSON.stringify(state.saveCityList))
    // },
    // removeItem(state,list){
    //   state.saveCityList = list
    //   localStorage.setItem('savedata',JSON.stringify(state.saveCityList))
    // },

    returncity(state, city) {
      state.returnCityName = city.name
    },

    returnCityWeatherFore(state, res2) {
      state.returnCityWeatherFore = res2
      state.returnCityWeatherCur = res2[0]
      // console.log(state.selectCityWeatherTemp);
      // console.log(state.selectCityWeatherFore,123456);
      state.returnCityOption = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [
              res2[0].daytemp_float,
              res2[1].daytemp_float,
              res2[2].daytemp_float,
              res2[3].daytemp_float,
            ],
            label: {
              show: true,
              formatter: '白 {c}℃', // 显示折点数值
            },
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [
              res2[0].nighttemp_float,
              res2[1].nighttemp_float,
              res2[2].nighttemp_float,
              res2[3].nighttemp_float,
            ],
            label: {
              show: true,
              formatter: '晚 {c}℃', // 显示折点数值
            },
          }
        ]
      }
    }
  },
  actions: {
    async localCity(ctx) {
      const res = await queryCurCity()
      ctx.commit('getCurCityName', res)
      const _res = await queryCityWeatherBase(res.adcode)
      ctx.commit('getCurCityWeatherNow', _res)
      const res1 = await queryCityWeatherAll(res.adcode)
      const res2 = res1.forecasts[0].casts
      ctx.commit('getCurCityWeatherFore', res2)
      const data = await fetchCityData();
      const districts = data.districts[0].districts;
      ctx.commit('getCitiesName', districts)

      // const adc = await queryCityAdcode(state.cityNameStorage)
      // ctx.commit("getCityAdcode",adc)
    },
    async selectCityAdcode(ctx, item) {
      ctx.commit('getSelectCityName', item)
      const res = await queryCityAdcode(item)
      const adc = res.geocodes[0].adcode
      ctx.commit('getSelectCityAdcode', adc)
      const res1 = await queryCityWeatherAll(adc)
      const res2 = res1.forecasts[0].casts
      ctx.commit('getSelectCityWeatherFore', res2)
    },
    // async searchCityAdcode(ctx,city){
    //   ctx.commit('returnCity',city)
    //   const res1 = await queryCityWeatherAll(city.adcode)
    //   const res2 = res1.forecasts[0].casts
    //   ctx.commit('returnCityWeatherFore', res2)
    // },
    // async removeindex(ctx,list){
    //   ctx.commit('removecity',list)
    // }
  },
  modules: {
  }
})
