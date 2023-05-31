<template>
    <div>
        <div class="input-city">
            <input type="text" placeholder="请输入城市名称" v-model="chooseCity" @input="inputCity">
            <ul v-show="citiesMatched.length">
                <!-- <p v-show="!citiesMatched.length">似乎没有找到你查找的城市</p> -->
                 <li v-show="citiesMatched.length" style="list-style: none;" v-for="city in citiesMatched" :key="city"
                    @click="cityChoice(city)">{{ city
                    }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { queryCityAdcode, fetchCityData } from '@/request/api';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import { mapMutations, mapState } from 'vuex';
export default {
    
    data(){
        return{
            chooseCity:'',
            chooseCityAdcode:'',
        }
    },
    computed:{
        ...mapState(['citiesMatched',]),
    },
    methods:{
        cityChoice(item){
            this.chooseCity = item
            // this.$store.commit('selectCity', item);
            this.$store.dispatch('selectCityAdcode',item);
            // console.log(this.cityAdcodeStorage);
            this.$router.push(`/weatherselected`)
            // console.log(this.$route.path,235);
        },
        // ...mapMutations(['selectCity']),
        inputCity(){
            this.$store.commit('selectMatchedCities', this.chooseCity);
        }
    },
}
</script>

<style scoped>
.input-city {
    padding-top: 1rem;
    margin-bottom: 2rem;
    position: relative;
    color: rgb(255, 255, 255);
}

input {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom-width: 1px;
    background-color: transparent;
    width: 100%;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
}

ul {
    position: absolute;
    width: 100%;
    top: 62px;
    color: rgb(255, 255, 255);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(0, 78, 113, 1);
}
li{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
}
</style>