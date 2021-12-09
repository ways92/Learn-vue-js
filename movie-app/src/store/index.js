import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"
// import api from '../service/api'

Vue.use( Vuex, axios )

export default new Vuex.Store( {
    state: {
        dataMovie: [],
        Movie: []
    },
    getters: {

    },
    mutations: {
        setDataMovie( state, dataMovie ) {
            state.dataMovie = dataMovie
        },

        setMovie( state, Movie ) {
            state.Movie = Movie
        }
    },
    actions: {

        async getDataMovie( { commit } ) {
            const apiUrl = 'https://api.themoviedb.org/3/'
            const apiKey = '9350682e7550ba5410fc9498023d14b3'
            await axios
                .get( `${apiUrl}movie/popular?api_key=${apiKey}` )
                .then( ( response ) => {
                    console.log( response.data )
                    commit( 'setDataMovie', response.data.results )
                } )
                .catch( function ( error ) {
                    console.log( error )
                } )
        },



    },
} )
