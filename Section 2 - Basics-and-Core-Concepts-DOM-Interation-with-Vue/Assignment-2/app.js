const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: '',
      confirmedOutput2: ''
    };
  },
  methods: {
    showAlert() {
        Swal.fire({
            title: 'Alert!!!',
            text: 'The alert button was pressed! Danger Will Robinson!!! Danger!!!',
            icon: 'error',
            confirmButtonText: 'Abort!!!'
        })
    },

    writeToOutput1(event) {
        this.output1 = event.target.value;
    },

    writeOutput2(event) {
        this.output2 = event.target.value;
    },

    writeConfirmedOutput( ) {
        this.confirmedOutput2 = this.output2;
    }

  }
});

app.mount('#assignment');
