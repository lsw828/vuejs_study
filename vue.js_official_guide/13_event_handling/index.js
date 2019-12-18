var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    name: 'Vue.js'
  },
  methods: {
    addCounter: function () {
      this.counter += 1;
    },
  }
});

