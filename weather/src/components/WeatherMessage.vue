<template>
    <div class="weather-box">
        <div class="weather-info">
            <div class="info-box" v-for="item in curCityWeatherFore" :key="item.date">
                <span>{{ item.weekday }}</span>
                <!-- <span>{{ `${item.date.split("-")[1]}-${item.date.split("-")[2]}` }}</span> -->
                <span>{{ item.date.split("-")[1] }}-{{ item.date.split("-")[2] }}</span> <!-- 这两种写法都可以，但是下面这种写法逻辑更清晰 -->
                <span>白：{{ item.dayweather }}/夜：{{ item.nightweather }}</span>
                <span>风力：{{ item.daypower }}</span>
            </div>
        </div>
        <div style="height: 16rem; width: 800px;margin: 0 auto;margin-top: 2.5rem;">
            <v-chart :option="curCityOption"></v-chart>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {

    computed: {
        ...mapState(['curCityWeatherFore', 'curCityOption']),
    }

}
</script>

<style>
.weather-box {
    padding-top: 2.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: rgb(0, 78, 113);
    border-radius: 0.25rem;
    margin-top: 0.5rem;
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
}

</style>