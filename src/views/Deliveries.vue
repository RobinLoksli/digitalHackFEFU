<template>
    <div>
        <ul class="delivery-wrap">
            <Delivery
                v-for="delivery in userDeliveries"
                :key="delivery.id"
                :delivery="delivery"
            />
        </ul>
    </div>
</template>

<script>
    import Delivery from "../components/Delivery/delivery.vue";

    export default {
        components: {
            Delivery
        },
        computed: {
            userDeliveries() {
                return this.$store.getters.getDeliveries;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .delivery-wrap {
        display: grid;
        grid-gap: 20px;
    }
</style>