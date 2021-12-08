<template>
  <div class="container">
    <!-- <h5>{{ getDataPokemon }}</h5> -->
    <h1>POKEMON</h1>

    <div class="mt-5">
      <div class="card m-2" v-for="(item, index) in getDataPokemon" :key="index">
        <div class="card-body">
          <h5>{{ item['name'] }}</h5>
          <router-link type="button" :to="{name:'name', params:{name: item['name']}}" @click="detail(item.url)" :dataPokemon="datapokemon" class="btn btn-info">Go Detail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()
    

    store.dispatch('getDataPokemon')

    const state = reactive({
      getDataPokemon: computed(() => {return store.getters.getPokemon}),
      dataPokemon: {}
    })

    const detail = (val) => {
        store.commit('setUrl', val)
       
    }

    return {
      ...toRefs(state),
      detail
    }
  },
}

</script>

<style>
</style>
