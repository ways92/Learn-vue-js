import axios from 'axios'

export const LoadPost = ({ commit }) => {
    axios
        .get( 'https://jsonplaceholder.typicode.com/posts' )
        .then(response => {
            commit('SET_POSTS', response.data)
        })
        .catch(error => console.log(error))
}