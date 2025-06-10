const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
//      fullname: ''
    };
  },

  watch: {
    // name(newVal, oldVal) {
    //   console.log("Old Value: " + oldVal);
    //   console.log("New Value: " + newVal);
    //   if (newVal === '') {
    //     this.fullname = '';
    //   }
    //   else {
    //     this.fullname = newVal + ' ' + "Nurse";
    //   }
    // }

  },

  computed: {
    fullname() {
      console.log("fullname() called ...");
      retval = '';
      if (this.name === '') {
        retval = '';
      }
      else {
        retval = this.name + ' ' + 'Nurse';
      }
      
      return retval;
    }

  },





  methods: {
    outputFullName() {
      retval = '';
      if (this.name === '') {
        retval = '';
      }
      else {
        retval = this.name + ' ' + 'Nurse';
      }
      
      return retval;
    },

    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },

    resetInput(){
      this.name='';
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }

  }
});

app.mount('#events');
