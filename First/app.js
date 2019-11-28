Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
})

new Vue({
    el: '#app',
    data: {
        msgText: 'Welcome to Vue',
        person: 'Coder'
    },
    methods: {
        greetings(){
            return `Wassup ${this.person} !!`;
        }
    }
});

