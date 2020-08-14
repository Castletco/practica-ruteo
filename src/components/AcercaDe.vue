<template>
  <div class="hello">
    <router-link v-bind:to="{ path: '/' }">About</router-link>
    <router-link v-bind:to="{ path: `/restoran/${local}` }">{{local}}</router-link>
    <router-link v-bind:to="{ path: 'images/'}">Photos</router-link>
    <p>
        Don't worry about making an specific text here
        Lorem Ipsum is fine.

        Lorem Ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do erusmod tempor
        incididunt ut labore et dolore magma alicua. Ut
        enim ad minim veniam, quis nostrud
    </p>
    <router-view />
  </div>
</template>