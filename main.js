const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onIncrementCounter(event, name){
            event.preventDefault();
            console.log(name);
            console.log(event);
            this.count = this.count + 1;
        }
    }    
});

app.mount('#app');