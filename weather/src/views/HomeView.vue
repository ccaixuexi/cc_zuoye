<template>
    <div>
        <InputCity></InputCity>
        <CityStorage></CityStorage>
        <WeatherMessage></WeatherMessage>
    </div>
</template>

<script>
import CityStorage from '@/components/CityStorage.vue';
import InputCity from '@/components/InputCity.vue';
import WeatherMessage from '@/components/WeatherMessage.vue';

    export default {
    components: { InputCity, CityStorage, WeatherMessage }
}
</script>

<style scoped>

</style>