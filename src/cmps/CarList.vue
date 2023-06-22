<template>
    <section class="car-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="car in cars" :key="car.id">
                <CarPreview :car="car"/>
                <section class="actions">
                    <RouterLink :to="`/car/${car.id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/car/edit/${car.id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveCar(car.id)">x</button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>
import CarPreview from '@/cmps/CarPreview.vue'
export default {
    props: {
        cars: { type: Array, required: true },
    },
    methods: {
        onRemoveCar(carId) {
            this.$emit('remove', carId)
        }
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss">
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>