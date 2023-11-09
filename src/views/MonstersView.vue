<template>
    <div>
        <arrayCards :array-monstruos="arrayMonstruos"/>
    </div>
</template>

<script>
import arrayCards from '@/components/arrayCards.vue';

export default {
    name: 'MonstersView',
    components: {
        arrayCards
    }
}
</script>
