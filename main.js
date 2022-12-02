const app = Vue.createApp({
    data() {
        return {
            isLoggedIn: true,
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
        onIncrementCounter(event, name){
            this.count = this.count + 1;
        },
        checkLogin() {
            this.isLoggedIn = !this.isLoggedIn;
        }
    }    
});

app.mount('#app');