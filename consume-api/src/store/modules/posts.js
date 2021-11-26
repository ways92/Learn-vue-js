import axios from "axios"

const posts = {
    namespaced: true,
    state: {
        posts: []
    },
    mutations: {
        SET_POSTS(state, data) {
           state.posts = data 
        }
    },
    actions: {
        loadPosts({commit}) {
            axios
                .get( 'https://jsonplaceholder.typicode.com/posts' )
                .then( respose => {
                    commit('SET_POSTS', respose.data)
                })
                .catch(error => console.log(error))
        }
    }
}

export default posts