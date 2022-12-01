const app = Vue.createApp({
    data() {
        return {
            isLoggedIn: false
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