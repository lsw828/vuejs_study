var app = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {

      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },

      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }

    }
  }
});

