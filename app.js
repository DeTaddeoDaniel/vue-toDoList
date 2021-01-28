let app = new Vue({
    el:'#app',
    data:{
        title:'Todo list',
        
        textPlaceholder:'Add todo',
        textInput:'',

        todos:[
            {
                testo: 'aaaaaaaaaaaaaaaaa',
                stato: true,
            },
            {
                testo: 'bbbbbbbbbbbbbbbbb',
                stato: false,
            },
            {
                testo: 'cccccccccccccccccc',
                stato: false,
            },{
                testo: 'dddddddddddddddddd',
                stato: true,
            },
        ],
        todosEliminati:[],

        editMode:false,
        textEditMode: '',
        indexEdit: 0
    },

    methods: {
        addTodo:function(){
            var todo = {
                testo: this.textInput,
                stato: false
            };
            this.todos.push(todo)
            this.textInput = '';
            console.log()
        },

        deleteTodo:function(index){
            this.todosEliminati.push(this.todos[index])
            this.todos.splice(index, 1);
        },

        deleteAllTodo:function(){
            this.todos.forEach(todo => {
                this.todosEliminati.push(todo);
            });

            this.todos= [];
        },

        editTodo:function(index){
            this.editMode = !this.editMode;
            this.indexEdit = index;
            this.textPlaceholder = 'Edit todo'
            this.textEditMode = this.todos[index].testo;
            document.getElementById('editPopup').style.display = 'flex'
        },

        changeStato:function(index){
            this.todos[index].stato =! this.todos[index].stato;
        },

        SaveEditTodo:function(){
            this.todos[this.indexEdit].testo = this.textEditMode;
            this.textEditMode = '';
            this.closeEditTodo();
        },

        closeEditTodo:function(){
            document.getElementById('editPopup').style.display = 'none'
            this.editMode = !this.editMode;
            this.textPlaceholder = 'Add todo';
            this.indexEdit = 0;
        },

        restoreTodo:function(index){
            this.todos.push(this.todosEliminati[index])
            this.todosEliminati.splice(index, 1);
        },

        permanentlyRemoveTodo:function(index){
            this.todosEliminati.splice(index, 1);
        }
    },

    computed:{

    }
});