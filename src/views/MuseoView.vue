<template>
    <div>
        <arrayCards :arrayCards="arrayMuseo"/>
    </div>
</template>

<script>
import arrayCards from '@/components/arrayCards.vue';

export default {
    name: 'MuseoView',
    props: ['arrayMuseo'],
    components: {
        arrayCards
    },
    data: () => ({
    })
}
</script>