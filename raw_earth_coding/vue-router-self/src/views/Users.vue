<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin: 0 auto;"
  >
    <v-flex xs12>
      <div class="text-center">
        <h1>Users</h1>
        <p>search a user</p>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="userId"
        label="Input User ID"
      ></v-text-field>
      <div class="text-center">
        <v-btn 
          rounded color="primary" dark
          @click="$router.push({name: 'users-detail', params: {id: userId}})"
        >Search</v-btn>
      </div>
    </v-flex>
    <v-flex xs12>
      <div class="text-center">
        <router-view></router-view>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      userId: null 
    }
  },
  created() {
    console.log("User")
  }
}
</script>