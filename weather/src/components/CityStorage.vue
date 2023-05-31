<template>
    <div>
        <h2 class="info" v-if="!citydata">暂时没有保存过城市天气信息，请查询后点击右上角"+"号保存。</h2>
        <div class="city-box">
            <div class="city-outer" v-for="city,index in citydata">
                <div class="city-inner">
                    <h3>{{ city.name }}</h3>
                    <span>{{ city.temp }}</span>
                </div>
                <div class="operation">
                    <button @click="returncity(city.name)">查看</button>
                    <button @click="remove(index)">删除</button>
                </div>
            </div>
        </div>
        <!-- <h2>{{citydata}}</h2> -->
        <h2 class="weather-title">近期天气</h2>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            citydata: [],
        }
    },
    mounted() {
        this.citydata = JSON.parse(localStorage.getItem('savedata'))
    },
    computed: {
        // temp(){
        //     const citydata = localStorage.getItem('savedata')
        //     return citydata
        // },
        ...mapState(['cityNameStorage', 'queryStorage'])
    },
    methods: {
        returncity(name) {
            this.$store.dispatch('selectCityAdcode',name)
            this.$router.push(`/weatherselected`)
        },
        remove(index) {
            // this.$store.commit('removeCity',index)

            const storecities = JSON.parse(localStorage.getItem('savedata'))
            storecities.splice(index,1)
            this.citydata = storecities
            localStorage.setItem('savedata',JSON.stringify(storecities))
            // this.citydata.splice(index,1)
            // localStorage.setItem('savedata',JSON.stringify(this.citydata))
        }
    }

}
</script>

<style scoped>
.info {
    transition-duration: 0.2s;
    text-align: center;
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    color: rgb(255, 255, 255);
}

.weather-title {
    margin-top: 1.5rem;
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    color: rgb(255, 255, 255);
}

.city-box {
    max-height: 300px;
    margin-top: 2.5rem;
    color: rgb(255, 255, 255);
}

.city-outer {
    display: flex;
    justify-content: space-between;
}

.city-inner {
    margin-bottom: 1rem;
    display: flex;
    width: 82%;
    cursor: pointer;
    justify-content: space-between;
    background-color: rgb(0, 78, 113);
    padding: 0.5rem 1rem;
    transition-duration: 0.3s;
}

h3 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    cursor: pointer;
    color: rgb(255, 255, 255);
}

.operation {
    display: flex;
    margin-bottom: 1rem;
    gap: 0.5rem;
}

button {
    text-align: center;
    --tw-bg-opacity: 1;
    background-color: rgb(234 179 8 / var(--tw-bg-opacity));
    width: 80px;
    cursor: pointer;
    background-image: none;
    text-transform: none;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}
</style>