<template>
  <header>
    <router-link to="/">
      <div class="navbar" >
        <img class="img-logo" src="../assets/cubos-logo.png">
        <span>Movies</span>
      </div>
    </router-link>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {

}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px 0 15px 0;
  border-bottom: solid rgb(230, 230, 230) 1px;
}

header {
  background-color: rgba(0, 0, 0, 0.726);
}

.img-logo {
  width: 190px;
  margin: 10px;
}

span {
  font-weight: bold;
  font-size: 30px;
  margin-left: 5px;
  color: white;
}

a {
  text-decoration: none;
}
</style>