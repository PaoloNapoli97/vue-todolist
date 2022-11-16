const { createApp} = Vue;

createApp({
        data() {
            return {
                newTodo: '',
                todoList: [
                    {
                        text: 'Fare i compiti',
                        done: false,
                    },
                    {
                        text: 'Fare la spesa',
                        done: false,
                    },
                    {
                        text: 'Andare dalla Nonna',
                        done: false,
                    }
                ]
            }
        },
        methods: {
            addTodo() {
                // this.todoList.push(this.newTodo);
                // this.newTodo = '';
                const objNewTodo = {
                    text: this.newTodo,
                    done: false
                };
                this.todoList.push(objNewTodo);
                this.newTodo = '';
            },
            removeTodo(i) {
                this.todoList.splice(i, 1);
            },
            // myfilter: function() {
            //     this.isActive = !this.isActive;
            // }
            // ES in classe
            onClickTodo(todo) {
                todo.done = todo.done ? false : true;
            }
        }
    
}).mount('#app')