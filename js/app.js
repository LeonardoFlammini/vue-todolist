const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks: [
        {
          text: "Fare esercizio oggi",
          isDone: false
        },
        {
          text: "Studiare nel weekend",
          isDone: false
        },
        {
          text: "Imparare Vue",
          isDone: false
        }
      ],
      newTask: "",
    }
  },
  
  methods:{
    addTask(){
      const newTaskObj = {
        text: this.newTask.trim(),
        isDone: false
      }
      this.tasks.unshift(newTaskObj);
      this.newTask = "";
    },
    deleteTask(index){
      this.tasks.splice(index, 1);
    }
  }
  
}).mount('#app')