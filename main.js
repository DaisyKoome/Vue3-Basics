const app = Vue.createApp({
    data() {
        return {
            isLoggedIn: true,
            country:'',
            name:'Daisy',
            person: {
                name: 'Dee',
                country: 'USA'
            },
            posts: [
                { 
                    id: 1, 
                    title: 'My Journey with Vue' 
                },
                {
                    id: 2,
                    title: 'Blogging with Vue is fun'
                },
                {
                    id: 3,
                    title: 'Sample description 3'
                },
                {
                    id: 4,
                    title: 'Sample description 4'
                },
            ]
        }
    },
    methods: {
        fullName(){
            console.log('Running again...');
            return  'Hello ' + this.name;
        },
        onNameChange(event) {
            console.log(event.target.value);
            this.name = event.target.value;
        },
        onIncrementCounter(event, name){
            this.count = this.count + 1;
        },
        checkLogin() {
            this.isLoggedIn = !this.isLoggedIn;
        }
    }    
});

app.mount('#app');