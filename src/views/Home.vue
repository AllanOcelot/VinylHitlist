<template>
    <v-container>
      <v-col cols=12>
        <h2 class="align-centre" centre>Latest Hitlist Items:</h2>
      </v-col>
      <v-col cols="12" v-for="(item, index) in records" :key="index">
        <Record />
      </v-col>
    </v-container>


</template>

<script>
import Record from '@/components/Record.vue';

export default {
  name: 'Home',
  data() {
  return {
      records: [
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"},
        { name: "example"}
      ],
    }
  },
  components: {
    Record,
  },
}
</script>
