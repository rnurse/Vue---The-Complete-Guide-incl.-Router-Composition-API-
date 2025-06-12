const app = Vue.createApp({

            data() {
                return {
                    taskList: [],
                    addedTaskText: '',
                    isTaskListVisible: true,
                    toggleButtonFace: "Hide"
                
                }
            },

            methods: {
                addTask() {
                    if (this.addedTaskText.length > 0) {
                        this.taskList.push(this.addedTaskText);
                        this.addedTaskText = '';
                    }
                },

                toggleTaskListVisibility() {
                    this.isTaskListVisible = !this.isTaskListVisible;
                    if (this.isTaskListVisible) {
                        this.toggleButtonFace = "Hide";
                    }
                    else {
                        this.toggleButtonFace = "Show";

                    }
                }
            }

    }
);

app.mount("#assignment");