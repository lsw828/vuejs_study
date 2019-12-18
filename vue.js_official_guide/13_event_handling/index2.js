var app = new Vue({
  el: '#app',
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')

      // event 는 Native DOM event 입니다.
      alert(event)
      alert(event.target)
      alert(event.target.tagName)
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // 이제 네이티브 이벤트에 액세스 가능
      if (event) event.preventDefault()

      alert(message)
    }
  }
});

