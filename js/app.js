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
      message: "",
    }
  },
  
  methods:{
    addTask(){
      if(this.newTask.trim().length > 5){
        const newTaskObj = {
          text: this.newTask.trim(),
          isDone: false
        }
        this.tasks.unshift(newTaskObj);
        this.newTask = "";
        this.message = "";
      }else{
        this.message = "Inserisci almeno 5 caratteri";
      }
    },
    deleteTask(index){
      this.tasks.splice(index, 1);
      console.log(this.tasks.length);
    },
    setDone(index){
      if (this.tasks[index].isDone === true){
        this.tasks[index].isDone = false;
      }else{
        this.tasks[index].isDone = true;
      };
    }
  }
  
}).mount('#app')