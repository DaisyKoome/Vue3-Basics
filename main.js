const app = Vue.createApp({
    data() {
        return {
            message: 'Howdy!',
            link: 'https://vuejs.org/',
            htmlContent: '<h1>Heey</h1>',
        };
    }
});

app.mount('#app');