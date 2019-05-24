new Vue({
  el: "#app",
  data: {
    firstName: "Alan",
    lastName: "Fidelino",
    jobs: [{
      id: 1,
      title: 'Communications Specialist'
    }, {
      id: 2,
      title: 'Front-End Developer'
    }],
    married: true
  },

  methods: {
    changeStatus: function () {
      this.data.married = false;
    }
  }
})