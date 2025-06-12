const app = Vue.createApp({

    data() {
        return {
            userClass: '',
            paragraphVisibility: true,
            inputBackgroundColor: ''
        }
    },

    methods: {
        getUserClass(event) {
            this.userClass = event.target.value;
        },

        toggleParagraphVisibility() {
            this.paragraphVisibility = !this.paragraphVisibility;
        },

        setInputBackgroundColor(event) {
            this.inputBackgroundColor = event.target.value;
        }

    },

    computed: {
        paraClasses()   {
            return {
                user1: this.userClass === 'user1',
                user2: this.userClass === 'user2',
                visible: this.paragraphVisibility === true,
                hidden: this.paragraphVisibility === false
            }

        },

        setStyle()  {
            return { backgroundColor: this.inputBackgroundColor }
        }



    }

});

app.mount('#assignment');