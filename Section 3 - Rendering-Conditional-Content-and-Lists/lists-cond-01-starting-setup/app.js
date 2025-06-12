const app = Vue.createApp({
  data() {
    return { 
              goals: [],
              enteredGoalValue: ''
     };
  },

  methods: {

    addGoal() {
      if (this.enteredGoalValue.length > 0) {
        this.goals.push(this.enteredGoalValue);
      }
      this.enteredGoalValue = '';
    },

    removeGoal(index) {
      Swal.fire({
        title: "Are you sure you want to delete this goal?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {

          this.goals.splice(index, 1);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },

  }
});

app.mount('#user-goals');
