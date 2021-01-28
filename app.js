let app = new Vue({
    el:'#app',
    data:{
        title:'Todo list',
        
        textPlaceholder:'Add todo',
        textInput:'',

        todos:['item 1', 'item 2'],
        todosEliminati:[]
    },
    methods: {
        addTodo:function(){
            this.todos.push(this.textInput)
            this.textInput = '';
            console.log()
        },

        deleteTodo:function(index){
            this.todosEliminati.push(this.todos[index])
            this.todos = this.todos.splice(index, 1);
        }
    },
});