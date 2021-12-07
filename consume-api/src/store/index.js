import { createStore } from "vuex"
import axios from "axios"

export const store = createStore( {
    state() {
        return {
            dataPokemon: [],
            url: ''
        }
    },
    getters: {
        getPokemon( state ) {
            return state.dataPokemon
        },
        getDetailPokemon( state ) {
            return state.url
        }
    },
    mutations: {
        setDataPokemon( state, payload ) {
            return state.dataPokemon = payload
        },
        setUrl( state, payload ) {
            return state.url = payload
        }
    },
    actions: {
        async getDataPokemon( { commit } ) {
            await axios
                .get( 'https://pokeapi.co/api/v2/pokemon' )
                .then( ( response ) => {
                    console.log( response.data )
                    commit( 'setDataPokemon', response.data.results )
                } )
                .catch( function ( error ) {
                    console.log( error )
                } )
        },
        async getDetailPokemon( { commit } ) {
            await axios
                .get( store.state.url )
                .then( ( response ) => {
                    console.log( response.data )
                    commit( 'setUrl', response.data )
                } )
                .catch( function ( error ) {
                    console.log( error )
                } )
        }
    },
} )
