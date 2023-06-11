<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Register</button>
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
    async register() {
      const response = await axios.post('http://localhost:8000/api/users/', {
        username: this.username,
        password: this.password
      });
      console.log(response.data);
    }
  }
}
</script>
