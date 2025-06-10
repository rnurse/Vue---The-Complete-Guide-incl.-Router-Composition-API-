const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(value) {
      this.counter += Math.round(Math.random() * value + 1);
    },

    reduce(value) {
      this.counter -= Math.round(Math.random() * value + 1);
    },
    
    resetInput(){
      this.name = '';
      this.confirmName();
    },

    setName(event) {
      this.name = event.target.value;
    },

    confirmName( ) {
      this.confirmedName = this.name;
    },

    submitForm() {
      alert("Submitted!!!");
    }

  }
});

app.mount('#events');
