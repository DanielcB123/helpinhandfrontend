<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const response = await axios.post('http://localhost:8000/api/api-token-auth/', {
        username: this.username,
        password: this.password
      });
      localStorage.setItem('token', response.data.token);
    }
  }
}
</script>
