<template>
    <div class="home">
        <h1>Home</h1>
        <h4>Total Like Content : {{ likes }} </h4>
    </div>

   
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
    setup() {
        const store = useStore()
        
        const likes = computed(() => {
            return store.state.totalLikes
        })
        return { likes }
    },
}
</script>

<style>
    .home {
        margin-bottom: 800px;
    }
</style>