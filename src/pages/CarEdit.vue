<template>
    <form @submit.prevent="save" v-if="car" class="car-edit">
        <input v-model="car.vendor" type="text">
        <input v-model.number="car.maxSpeed" type="number">
        <button>Save</button>
    </form>
</template>

<script>
import { carService } from '@/services/car.service.js'

export default {
    data() {
        return {
            car: null,
        }
    },
    methods: {
        async save() {
            await carService.save(this.car)
            this.$router.push('/car')
        }
    },
    async created() {
        const carId = this.$route.params.id
        if(carId) {
            this.car = await carService.get(carId)
        } else {
            this.car = carService.getEmptyCar()
        }
    }
}
</script>

<style lang="scss">

</style>