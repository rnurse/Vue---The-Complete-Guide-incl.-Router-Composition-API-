const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.theMessage.value;
    },
  },

  beforeCreate() {
    console.log('beforeCreate() called ...');
  },

  created() {
    console.log('created() called ...');
  },

  beforeMount() {
    console.log("beforeMount() called ...");
  },

  mounted() {
    console.log("mounted() called ...");
  },

  beforeUpdate() {
    console.log("berforeUpdate() called ...");
  }
  ,

  updated() {
    console.log("updated() called ...");
  },

  beforeUnmount() {
    console.log("beforeUnmount() called ...");
  },

  unmounted() {
    console.log("unmounted() called ...");
  }



});

app.mount('#app');

setTimeout(function() {
  app.unmount();
}, 5000);


const app2 = Vue.createApp(
  {
    template: "<p>\"{{theMessage}}\" using the template attribute method </p>",

    data() {
      return {
        theMessage: "Hello World!!!"
      }
    }
  }
);

app2.mount("#app2");
