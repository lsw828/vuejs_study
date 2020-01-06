<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalTvCount">I can't buy any...</p>
    <button 
        :disabled="!totalTvCount"
        @click="buyTv">
        Buy TV
    </button>
    <button
        :disabled="totalTvCount < 2"
        @click="buyTwoTvs">
        Buy Two TVs
    </button>
  </div>
</template>

<script>
// object spread operators
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Customer",
  computed: {
    // simple version
    //totalTvCount() { return this.$store.state.totalTvCount },
    //happyStaff() { return this.$store.getters.happyStaff }
    ...mapState(['totalTvCount']),
    ...mapGetters(['happyStaff'])
  },
  methods: {
    ...mapActions(['removeTv']),
    buyTv() { 
      // simple version
      //this.$store.dispatch('removeTv', 1)
      this.removeTv(1)
    },
    buyTwoTvs() { 
      // simple version
      //this.$store.dispatch('removeTv', 2)
      this.removeTv(2)
    }
  }
}
</script>

<style scoped>
</style>