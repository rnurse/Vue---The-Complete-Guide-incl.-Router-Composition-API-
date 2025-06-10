const app = Vue.createApp({
    data()   {       // This function returns only an object with name: value pairs
                return  {
                    courseGoalA: "Finish the course and learn Vue!",
                    courseGoalB: "Master Vue and build amazing apps!",
                    vueLink: 'https://vuejs.org',
                    // myObj: {    
                    //             name: "Robert Nurse", 
                    //             addr: "10107 Cudby Court",
                    //             city: "Lanham",
                    //             state: "MD", 
                    //             zip: "20706"
                    //         },
                    // myArray: [1,2,3,4,5,6,7,8,9],
                    // target: '_blank'
                };
    },

    methods:    {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }
            else    {
                return this.courseGoalB;
            }
        }
    }

});

// Which section of HTML should be controled by Vue. This will also control child elements
app.mount('#user-goal') // Pass the CSS selector that is to be controlled by Vue
