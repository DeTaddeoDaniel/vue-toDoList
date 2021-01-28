let header = new Vue({
    el:'#header',
    data:{
        title:'Todo list',
    }
});


let nav = new Vue({
    el:'#nav',
    data:{
        placeholderText:'Add todo',
        textInput:''
    },
    methods: {
        addTodo:function(){

        }
    },
});
