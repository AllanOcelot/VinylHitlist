<template>
  <div
    class="member-banner"
    style="background-image:url('https://picsum.photos/700/320?random')"
  ></div>
  <div class="member-snippet">
    <v-container fluid class="d-flex justify-center align-center pt-0 pb-0">
      <v-row>
        <v-col col="4" class="user-info-cont">
          <v-avatar color="info" size="x-large">
            AM
          </v-avatar>
          <span class="item name">VinylPlaya</span>
          <span class="item break"></span>
          <p class="item">Member Since: XX/XX/XXXX</p>
        </v-col>
        <v-spacer></v-spacer>

        <v-col col="6" class="item-info-cont">
          <div class="item-info">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'gun']" />
            </span>
            <span>Hitlist Items</span>
          </div>
          <div class="item-info">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'check']" />
            </span>
            <span>Hits Listed</span>
          </div>
          <div class="item-info">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'bullseye']" />
            </span>
            <span>Hits Completed</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!--- User about section -->
  <!--
  <v-container>
    <v-row>
      <v-col col="12">
        <p>My name is X, and I really love Artists like X,Y,Z.</p>
        <p>I started collecting records two years ago, and have a few I'm looking for!</p>
      </v-col>
    </v-row>
  </v-container>
-->

  <!-- 'Top Ten' wanted items -->
  <v-container fluid class="d-fluid">
    <v-row>
      <v-col cols="12">
        <h2>Top Ten WantList:</h2>
        <router-link to="/profile/allan/wantlist">View All</router-link>
      </v-col>
      <v-col cols="12" class="record-list wantlist">
        <span v-for="(item,index) in TopTen" :key="index" cols="2">
          <Record display="cover"/>
        </span>
      </v-col>
    </v-row>
  </v-container>

  <!-- List all wanted items in a custom table -->


</template>
<script>
  import Record from '@/components/Record.vue'

  export default {
    name: "Profile",
    components: { Record },
    data: () => ({
      TopTen: [0,1,2,3,4,5,6,7,8,9],
    }),
  }


</script>
<style lang="scss" scoped>
  .member-banner {
    background-size: cover;
    background-position: center center;
    height: 220px;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left:0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.35);
    }
  }

  .member-snippet {
    display: flex;
    background: #fff;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    .user-info-cont,
    .item-info-cont {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .item-info-cont {
      justify-content: flex-end;
    }


    .name {
      display: block;
      font-size: 1.4rem;
      font-weight: 600;
      margin-left: 10px;
    }

    .break {
      height: 80px;
      background: rgba(0,0,0,0.1);
      width: 1px;
      opacity: 1;
      margin: 0 10px;
      padding: 10px 0;
    }

    .item-info {
      display: flex;
      height: 100%;
      border-left: 1px solid rgba(0,0,0,0.1);
      align-items: center;
      flex-direction: column;
      padding: 0 5px;
      span {
        margin-top: 0;
        margin-bottom: auto;
      }
      .icon {
        margin: auto;
        height: 20px;
      }
    }
  }

  .record-list {
    span {
      display: inline-block;
      width: calc(100% / 10);
      padding-right: 10px;
    }
  }

</style>