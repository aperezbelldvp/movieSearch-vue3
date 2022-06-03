<template>
    <div class="card text-dark bg-light m-3 text-center movement">
        <div class="card-header h6">
            <h4 class="text-success">{{ movie.Title }}</h4>
        </div>
        <div class="card-body thumbnail">
            <img height="300" width="200" :alt="`Cartel-${movie.Title}`" :src="movie.Poster" class="rounded " />
        </div>
        <div class="card-footer">
            <p>Año: <span>{{ movie.Year }}</span> | {{ movie.Type }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["movie"]
}
</script>

<style scoped>
.card-header {
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
}

span {
    font-weight: bold;
    color: green;
}

.movement:hover {
    transform: scale(1.1);
    border: 1px solid green;
    box-shadow: 0px 0px 50px #666;
}
</style>