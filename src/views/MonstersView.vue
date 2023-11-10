<template>
    <div>
        <arrayCards :arrayCards="arrayMonstruos" />
    </div>
</template>

<script>
import arrayCards from '@/components/arrayCards.vue';

export default {
    name: 'MonstersView',
    props: ['arrayMonstruos'],
    components: {
        arrayCards
    },
    data: () => ({
    }),
    watch: {
        arrayMonstruos: {
            handler(newVal) {
                console.log('arrayMonstruos ha cambiado:', newVal);
            },
            deep: true
        },
    },
    mounted() {
        console.log(this.arrayMonstruos);
    }
}
</script>
