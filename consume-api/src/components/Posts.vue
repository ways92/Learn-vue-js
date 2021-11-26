<template>
    <Suspense>
        <template #default>
           <Card/>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import Card from './Card.vue'


export default {
    components:{
        Card
    }
}
</script>