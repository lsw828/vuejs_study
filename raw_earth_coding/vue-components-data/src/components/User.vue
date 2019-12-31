<template>
  <div class="blue lighten-3 pa-3">
    <h1>User.vue</h1>
    <p>이름: {{ name }}</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          v-bind:name="name"
          v-bind:address="address"
          v-bind:phone="phone"
          v-bind:hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          v-bind:name="name"
          v-bind:address="address"
          v-bind:phone="phone"
          v-bind:hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data () {
    return {
      name: "LSW",
      address: "Seoul",
      phone: "010-0101-0101",
      hasDog: true,
      createdAt: null
    }
  },
  created() {
    this.createdAt = new Date()
  },
  methods: {
    parents(newuser) {
      //console.log("[parent-User.vue] received!")
      this.name = newuser.name
      this.address = newuser.address
      this.phone = newuser.phone
      this.hasDog = newuser.hasDog
    },
    getDateAndTime(date) {
      if( date != null ) {
        let hour = date.getHours()
        let min  = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
        return `${fullDate} ${hour}:${min}`
      } else {
        return null
      }

    }
  }
}
</script>