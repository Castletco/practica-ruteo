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
      <li @mouseover="redClass()">tasty</li>
      <li @mouseover="redClass()">drinks</li>
    </ul>
    <ul>
      <li @mouseover="redClass()">Cocktails</li>
      <li @mouseover="redClass()">Ethiopian</li>
      <li @mouseover="redClass()">Indian</li>
      <li @mouseover="redClass()">salad</li>
      <li @mouseover="redClass()">Mexican</li>
      <li @mouseover="redClass()">italian</li>
      <li @mouseover="redClass()">milkshakes</li>
    </ul>
    <ul>
      <li @mouseover="redClass()">barbecue</li>
      <li @mouseover="redClass()">Chinese</li>
      <li @mouseover="redClass()">French</li>
      <li @mouseover="redClass()">sushi</li>
      <li @mouseover="redClass()">poutine</li>
      <li @mouseover="redClass()">fresh</li>
      <li @mouseover="redClass()">vegan</li>
      <li @mouseover="redClass()">kosher</li>
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