<template>
  <div class="yellow lighten-3 pa-3">
    <h3>UserEdit.uve</h3>
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>

    <v-col cols="12" sm="60" md="30">
      <v-text-field
        label="Name"
        placeholder="Michael"
        outlined
        v-model="user.name"
      ></v-text-field>
      <v-text-field
        label="Address"
        placeholder="NewYork"
        outlined
        v-model="user.address"
      ></v-text-field>
      <v-text-field
        label="Phone"
        placeholder="010-0000-1111"
        outlined
        v-model="user.phone"
      ></v-text-field>
    </v-col>
    <v-radio-group v-model="user.hasDog">
      <v-radio
        label="has dogs"
        :value="true"
      ></v-radio>
      <v-radio
        label="doesn't have dogs"
        :value="false"
      ></v-radio>
    </v-radio-group>
    <div class="text-center">
      <v-btn class="ma-2" tile color="indigo" dark
        v-on:click="changeUser">
        Edit User
      </v-btn>
    </div>
    
   </div>
</template>

<script>
import { eventBus } from "../main"
export default {
  props: [ 'name', 'address', 'phone', 'hasDog' ],
  data () {
    return {
      user: {}
    }
  },
  created() {
    this.user.name = this.name
    this.user.address = this.address
    this.user.phone = this.phone
    this.user.hasDog = this.hasDog
  },
  methods: {
    changeUser() {
      this.$emit("child", this.user)
      eventBus.$emit("userWasEdited", new Date())
    }
  }
}
</script>
