<template>
    <form class="form text-center m-3">
        <input type="text" class="form-control inputdefault mx-auto" v-model="movieTitle"
            placeholder="¿Qué película quieres buscar?" >
        <input @click.prevent="searchMovie" type="submit" value="Buscar" class="btn btn-dark mt-2" />
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    setup() {
        const movieTitle = ref('')
        const store = useStore()

        const searchMovie = () => {
            store.dispatch('searchMovies', movieTitle.value)
        }

        const movies = computed(() => {
            return store.getters.getMovies         
        })

        return { searchMovie, movies, movieTitle }
    }
}
</script>

<style>
input::placeholder {
    text-align: center;
}
</style>

