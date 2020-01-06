<template>
  <div id="app">
    <customer></customer>
  </div>
</template>

<script>
import customer from "@/components/Customer"

export default {
  name: 'app',
  components: {
    customer    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
