<template>
    <div>
        <div class="row g-4">
            <div class="col-sm-6 col-lg-4" v-for="(item, index) in list" :key="index">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> {{ item.title }}</h5>
                    <router-link :to="`/posts/${item.id}`" class="btn btn-primary">Go to link</router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { reactive, toRefs } from 'vue'

export default {
    name: 'Card',
    async setup() {
        const data = reactive({
            list:[]
        });

        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        data.list = await result.json();

        return { ...toRefs(data) }
    }

   
}
</script>

<style >
    p.hoverr:hover {
        color: darkgoldenrod;
        font-weight: 800;
    }
</style>