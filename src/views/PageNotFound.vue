<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <div class="notfound">
    <h1><Strong>PAGE NOT FOUND</Strong></h1>
    <router-link to="/ListView">
      <button class="btn btn-danger btn-lg">TAKE ME BACK HOME</button>
    </router-link>
  </div>
</template>
  
<script>
export default {
  name: 'NotFoundPage',
}
</script>

<style scoped>
.notfound {
  background-image: url('./../assets/404.png');
  background-repeat: no-repeat;
  background-position: 15rem;
  width: 98vw;
  height: 80vh;
  margin: 0%;
  padding: 0%;
}

h1 {
  margin-left: 5rem;
  margin-top: 5rem;
  padding: 0%;
}

button {
  margin-top: 1rem;
  margin-left: 5rem;

}
</style>