<template>
  <div class="hello">
    <h1>Welcome To Dojo Reviews</h1>
    <img alt="Goku Eating" src="../assets/gokuEating.png">
    <ul>
      <li @mouseover="redClass()">Thai</li>
      <li @mouseover="redClass()">American</li>
      <li @mouseover="redClass()">vegetarian</li>
      <li @mouseover="redClass()">burguers</li>
      <li @mouseover="redClass()">food</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuPrincipal',
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