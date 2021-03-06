var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text:'Build something awsome'},
            {text:'Do this'}
        ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue ({
    el: '#app-6',
    data:{
        message:'Hello Vue!'
    }
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList: [
            { id: 8, text:'Vegetabls'},
            { id:1, text:'Chees'},
            { id:2,text:'Whatever else huans are supposed to eat'}
        ]
    }
})