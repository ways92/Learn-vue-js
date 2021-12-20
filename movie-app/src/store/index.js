import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"
// import api from '../service/api'

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
        async getMovie( { commit }, id ) {
            const apiUrl = 'https://api.themoviedb.org/3/'
            const apiKey = '9350682e7550ba5410fc9498023d14b3'
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
