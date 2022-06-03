<template>
  <div class="home">
    <header>
      <Header />
    </header>
    <main>
      <Search />
      <MovieList />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Search from "../components/Search.vue"
import MovieList from "../components/MovieList.vue"

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Search,
    MovieList
  }
}
</script>
