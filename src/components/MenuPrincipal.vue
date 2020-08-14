<template>
  <div class="hello">
    <h1>Welcome To Dojo Reviews</h1>
    <img alt="Goku Eating" src="../assets/gokuEating.png">
    <ul>
      <li v-for="(item, index) in store.properties.restaurant" :key="index">
        <router-link v-bind:to="{ path: '/restaurant/' + item }">{{item}}</router-link>
      </li>
    </ul>    
  </div>
</template>

<script>
import store from '@/store.js';
export default {
  name: 'MenuPrincipal',
  data() {
    return {store};
  },
  methods: {
    redClass() {
      console.log('entró');
    }
  }
}
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.red {
  color: red;
}
</style>