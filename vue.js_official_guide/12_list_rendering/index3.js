var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { id: 1, title: 'Do the dishes',      isComplete:true   },
      { id: 2, title: 'Take out the trash', isComplete:false  },
      { id: 3, title: 'Mow the lawn',       isComplete:false  },
    ],
  },
});

