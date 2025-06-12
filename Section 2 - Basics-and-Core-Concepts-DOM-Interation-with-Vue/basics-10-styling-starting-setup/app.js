const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed: {
        boxAClasses() {
            console.log("boxAClasses() called ...");
            return {active: this.boxASelected}
        },

        boxBClasses() {
            console.log("boxBClasses() called ...");
            return {active: this.boxBSelected}
        },
        
        boxCClasses() {
            console.log("boxCClasses() called ...");
            return {active: this.boxCSelected}
        }        
    },

    methods:    {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected =  !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected =  !this.boxCSelected;
            }
        }
    }

});

app.mount('#styling');