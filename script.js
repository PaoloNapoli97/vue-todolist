const { createApp} = Vue;

createApp({
        data() {
            return {
                newTodo: '',
                todoList: [
                    'Fare i compiti',
                    'Fare la spesa',
                    'Andare dalla Nonna'
                ]
            }
        },
        methods: {
            addTodo() {
                this.todoList.push(this.newTodo);
                this.newTodo = '';
            },
            removeTodo(i) {
                this.todoList.splice(i, 1);
            }
        }
    
}).mount('#app')