let app = new Vue({
    el:'#app',
    data:{
        title:'Todo list',
        
        textPlaceholder:'Add todo',
        textInput:'',

        todos:['item 1', 'item 2', 'item 3', 'item 4'],
        todosEliminati:[]
    },
    methods: {
        addTodo:function(){
            this.todos.push(this.textInput)
            this.textInput = '';
            console.log()
        },

        deleteTodo:function(index){
            console.log(index)
            this.todosEliminati.push(this.todos[index])
            this.todos.splice(index, 1);
        },

        deleteAllTodo:function(){
            this.todos.forEach(todo => {
                this.todosEliminati.push(todo);
            });

            this.todos= [];
        },

        restoreTodo:function(index){
            this.todos.push(this.todosEliminati[index])
            this.todosEliminati.splice(index, 1);
        },

        permanentlyRemoveTodo:function(index){
            this.todosEliminati.splice(index, 1);
        }
    },
});