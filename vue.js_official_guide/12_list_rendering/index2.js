var app = new Vue({
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5],
    items: [
      { msg: 'Foo' },
      { msg: 'Bar' }
    ]
  },
  computed: {
    oddNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 !== 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
});

