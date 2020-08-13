<template>
  <b-container>
    <div class="hello">
      <h1>Photos</h1>
      <b-card-group deck>
        <b-card :img-src="require('../assets/images.png')" img-alt="Card image" img-top>
        </b-card>
        <b-card :img-src="require('../assets/images.png')" img-alt="Card image" img-top>
        </b-card>
        <b-card :img-src="require('../assets/images.png')" img-alt="Card image" img-top>
        </b-card>
      </b-card-group>
    </div>
    
  </b-container>

</template>