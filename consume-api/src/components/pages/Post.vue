<template>
    <Suspense >
        <template #default>
           <CardDetail class="post"/>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import CardDetail from '../CardDetail.vue'
export default {
    components: { CardDetail }
    
}
</script>

<style>
    .post {
        margin-bottom: 800px;
    }
</style>