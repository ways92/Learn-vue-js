import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"

Vue.use( Vuex, axios )

export default new Vuex.Store( {
    state: {
        dataMovie: [],
        movie: [],
        posterPath: 'https://image.tmdb.org/t/p/w500',
    },
    getters: {
    },
    mutations: {
        setDataMovie( state, dataMovie ) {
            state.dataMovie = dataMovie
        },
        setMovie( state, movie ) {
            state.movie = movie
        },
    },
    actions: {
        async getDataMovie( { commit } ) {
            const apiUrl = process.env.VUE_APP_ROOT_URL
            const apiKey = process.env.VUE_APP_API_KEY
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
        async getMovie( { commit }, id ) {
            const apiUrl = process.env.VUE_APP_ROOT_URL
            const apiKey = process.env.VUE_APP_API_KEY
            await axios
                .get( `${apiUrl}movie/${id}?api_key=${apiKey}` )
                .then( ( response ) => {
                    console.log( response.data )
                    commit( 'setMovie', response.data )
                } )
                .catch( function ( error ) {
                    console.log( error )
                } )
        },



    },
} )
