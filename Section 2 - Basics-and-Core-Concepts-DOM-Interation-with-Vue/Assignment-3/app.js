const theApplication = Vue.createApp({
                                        data()  {
                                            return(
                                                {
                                                    result: 0,
                                                }

                                            )
                                        },

                                        watch: {
                                            resultString() { // Whenever the result from resultString() changes, this watcher is called
                                                const that = this; 
                                                setTimeout( function() {
                                                                // The "this" reference within the setTimeout method isn't the same as that of the createApp
                                                                that.result = 0
                                                            }, 5000);
                                            }
                                        },

                                        computed: {
                                            resultString() {
                                                rString = '';
                                                if (this.result < 37) {
                                                    rString = "Not there yet";
                                                }
                                                else if (this.result > 37) {
                                                    rString = "Too much!!!";
                                                }
                                                else {
                                                    rString = '' + this.result;
                                                }
                                                return rString;
                                            }
                                        },

                                        methods: {
                                            calculateResult(value) {
                                                this.result += value;
                                            }
                                        }

    }
);

// Which section of HTML should be controled by Vue. This will also control child elements
theApplication.mount('#assignment') // Pass the CSS selector that is to be controlled by Vue