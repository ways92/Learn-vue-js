<template> 
    <div class="detail ">
        <h1>Detail</h1>
        <div class="text-center">
            <h2>{{getDataPokemon['name']}}</h2>
            <h5> Height {{getDataPokemon['height']}}</h5>
            <h5> Weight {{getDataPokemon['weight']}}</h5>
        </div>
    </div>
   
</template>


<script>
// import CardDetail from '../CardDetail.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
 export default {
    //  props: {},
     setup() {
        const store = useStore()
        // const router = useRouter()
        const getDataPokemon = computed(() =>{
            return store.getters.getDetailPokemon
        })
        store.dispatch('getDetailPokemon')
        return {
            getDataPokemon
        }
    }
 }
</script>

<style>
    .detail {
        margin-bottom: 800px;
    }
</style>