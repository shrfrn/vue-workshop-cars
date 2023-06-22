<template>
    <article class="car-preview">
        <h2>{{car.vendor}}</h2>
        <h3>{{car.maxSpeed}}</h3>
    </article>
</template>

<script>
export default {
    props: {
        car: { type: Object, required: true },
    }
}
</script>

<style lang="scss">

</style>