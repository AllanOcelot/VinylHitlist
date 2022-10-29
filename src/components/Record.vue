<template>
  <div class="record">
    <div class="cover">
      <v-img
        :aspect-ratio="1"
        :width="width"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
      ></v-img>
    </div>
    <v-card class="content" plain>
      <v-card-title>
        Elliott Smith: Roman Candle
      </v-card-title>
      <v-card-subtitle>
        <v-chip class="mr-2">First Pressing</v-chip>
        <v-chip class="mr-2">Sentimental</v-chip>
        <v-chip class="mr-2"
          color="green"
          text-color="white"
        >High Offer</v-chip>
        <v-chip class="mr-2">Top Ten Wantlist</v-chip>
      </v-card-subtitle>
      <v-card-text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab, odio consequatur enim magnam maxime praesentium nostrum nesciun
        </p>
      </v-card-text>
    </v-card>
    <!--
    <div class="content">
      <p class="title">Record Title</p>
      <p class="sub-title">Record Description</p>
      <p>USER, is offering &pound;AMOUNT, for this record!</p>
      <p>Updated TIME ago!</p>
    </div>
  -->
  </div>
</template>
<script>
  export default {
      name: "Record"
  }
</script>
<style lang="scss" scoped>
  .record {
    display: flex;
    .cover {
      width: 200px;
      height: 200px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    .content {
      flex: 1 auto;
      padding-left: 0px;
      box-shadow: none;
      border-radius: 0;
      border-top: 2px solid rgba(0,0,0,0.05);
      border-right: 2px solid rgba(0,0,0,0.05);
      border-bottom: 2px solid rgba(0,0,0,0.05);
      .title {
        font-size: 2rem;
      }
    }
  }
</style>