<template>
    <div class="row w-100">
        <div v-for="movie in movies" :key="movie.imdbID" class="col-sm animate__animated animate__backInUp">
            <MovieCard
                :movie="movie"
            />
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from 'vue';
import MovieCard from "./MovieCard.vue"

export default {
    setup() {
        const store = useStore()
        const movies = computed(() => {
            return store.getters.getMovies         
        })
        
        onMounted(async () => {
            await store.dispatch('fetchMovies')
        })
        

        return { movies }
    },
    components: {
        MovieCard
    }
}
</script>

<style>
</style>