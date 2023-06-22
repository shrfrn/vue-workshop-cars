<template>
    <UserMsg />
    <CarFilter @filter="onSetFilterBy"/>
    <RouterLink to="/car/edit"><button>Add</button></RouterLink>
    <CarList @remove="removeCar" v-if="cars" :cars="filteredCars"/>
</template>

<script>
import { carService } from '@/services/car.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import CarList from '@/cmps/CarList.vue'
import CarFilter from '@/cmps/CarFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
    data() {
        return {
            cars: null,
            filterBy: {},
        }
    },
    methods: {
        async removeCar(carId) {
            const msg = {
                txt: `Car ${carId} removed...`,
                type: 'success',
                // timeout: 2500,
            }
            await carService.remove(carId)

            const idx = this.cars.findIndex(car => car.id === carId)
            this.cars.splice(idx, 1)
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredCars() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        }
    },
    async created() {
        this.cars = await carService.query()
    },
    components: {
        CarList,
        CarFilter,
        UserMsg,
    }
}
</script>

<style lang="scss">

</style>