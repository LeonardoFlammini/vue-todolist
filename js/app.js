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
  }
}).mount('#app')