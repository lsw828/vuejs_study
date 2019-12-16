var app = new Vue({
  el: '#shopping-list',
  data: {
    header: "shopping list app",
    items : [
      {
        label: '10 party hats',
        purchased: false,
        highPriority: false,
      },
      {
        label: '20 board games',
        purchased: true,
        highPriority: false,
      },
      {
        label: '20 cups',
        purchased: false,
        highPriority: true,
      },
    ]
  },
});

