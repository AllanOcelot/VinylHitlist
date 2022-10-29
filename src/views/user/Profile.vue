<template>
  <div
    class="member-banner"
    style="background-image:url('https://picsum.photos/700/320?random')"
  ></div>
  <div class="member-snippet">
    <v-container class="d-flex justify-center align-center pa-0">
      <div>
        
      </div>
      <v-avatar color="info" size="x-large">
        AM
      </v-avatar>
      <span class="item name">VinylPlaya</span>
      <span class="item break"></span>
      <p class="item">Member Since: XX/XX/XXXX</p>
      <v-spacer></v-spacer>
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
    </v-container>
  </div>
</template>
<script>

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
    border-radius: 12px;
    text-align: center;


    .name {
      display: block;
      font-size: 1.4rem;
      font-weight: 600;
      margin-left: 10px;
    }

    .break {
      height: 80px;
      background: #000;
      width: 1px;
      opacity: 1;
      margin: 0 10px;
      padding: 10px 0;
    }

    .item-info {
      display: flex;
      height: 100%;
      border-left: 1px solid rgba(0,0,0,0.5);
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

</style>