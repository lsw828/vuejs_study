<template>
  <div class="red lighten-3 pa-3">
    <h3>UserDetail.vue</h3>
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p> </p>

    <v-card class="mx-auto" max-width="500" tile>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Name</v-list-item-title>
          <v-list-item-subtitle>{{name}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Address</v-list-item-title>
          <v-list-item-subtitle>{{address}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Phone</v-list-item-title>
          <v-list-item-subtitle>{{phone}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>has dogs</v-list-item-title>
          <v-list-item-subtitle>{{hasDogKr}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>edited date</v-list-item-title>
          <v-list-item-subtitle>{{editedDate}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

  </div>
</template>

<script>
import { eventBus } from "../main"
export default {
  data () {
    return {
      editedDate: null 
    }
  },
  props: [ 'name', 'address', 'phone', 'hasDog' ],
  computed: {
    hasDogKr () {
      return this.hasDog === true ? "있음" : "없음 "
    }
  },
  created() {
    eventBus.$on("userWasEdited", date => {
      this.editedDate = date
    })
  }
}
</script>