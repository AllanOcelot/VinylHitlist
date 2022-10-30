<template>
  <div class="record" ref="RecordParent" :class="[size , display]">
    <div class="cover" :class="cover">
      <v-img
        :aspect-ratio="1"
        :width="coverImageWidth"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover
      ></v-img>      
      <div class="overlay" v-if='display === "cover"'>
        Cover
      </div>
    </div>
    <v-card class="content" v-if='display != "cover"' plain>
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
    name: "Record",
    props: { 
      size: null,
      display: null,
    },
    data: () => ({
      coverImageWidth: 300,
    }),
    mounted () {
      this.sizeConfig()
    },
    methods : {
      sizeConfig(){
        if(this.size){
          if(this.size === 'list'){
            this.coverImageWidth = 80;
          }
          if(this.size === 'small'){
            this.coverImageWidth = 124;
          }
          if(this.size === 'med'){
            this.coverImageWidth = 200;
          }
          if(this.size === 'large'){
            this.coverImageWidth = 300;
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .record {
    display: flex;
    .cover {
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


    // For cover 1/1 aspect ratio display 
    &.cover {
      position: relative;
      overflow: hidden;
      .cover {
        width: 100%;
        .overlay {
          display: flex;
          color: #f1f1f1;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0,0.8);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          opacity: 0;
        }

        &:hover {
          .overlay {
            opacity: 1;
            transition: all 0.3s;
          }
        }
      }
      .v-responsive.v-img {
        width: 100% !important;
      }
    }
  }
</style>