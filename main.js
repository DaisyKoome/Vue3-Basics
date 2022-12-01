const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onIncrementCounter(event, name){
            this.count = this.count + 1;
        }
    }    
});

app.mount('#app');