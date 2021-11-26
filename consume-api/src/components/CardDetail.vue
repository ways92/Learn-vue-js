<template>
    <div>
        <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ body }}</p>
                <button @click="addLike" class="btn btn-outline-info">Like</button>
            </div>
        </div>
    </div>
</template>


<script>
import { useStore } from 'vuex'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'CardDetail',
    async setup() {
        const data = reactive({
           title: '',
           body: ''
        });

        const route = useRoute()
        const store = useStore()

        const id = route.params.id

        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const { title, body } = await result.json();

        data.title = title
        data.body = body

        const addLike = () => {
            store.commit('increment')
        }

        return { ...toRefs(data), addLike }
    }
}
</script>