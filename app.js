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
        }
    },
});