<template>
    <div class="header text-center ">
        <h1 class="animate__animated animate__heartBeat">
            Mo<span><img src="../assets/logo.png" alt="V of Vue">ies</span>
        </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    padding: 1rem;
    background-color: black;
}

img {
    height: 80px;
}

h1 {
    font-size: 4rem;
    color: whitesmoke;
}

.animate__animated.animate__heartBeat{
    --animate-duration: 4s;
}
</style>