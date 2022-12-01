const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onIncrementCounter(){
            this.count = this.count + 1;
        }
    }    
});

app.mount('#app');