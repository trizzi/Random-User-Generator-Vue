const app = Vue.createApp({
  data() {
    return {
      firstName: 'Ric',
      lastName: 'Jeff',
      email: 'ric@gmail.com',
      gender: 'Male',
      picture:
        'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  methods: {
    getUser() {
      console.log(this.firstName);
    },
  },
});

app.mount('#app');
