<template>
  <div class="">
    <h2 class="">Loginsss</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <button type="button" @click="cancel">Cancel</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
async login() {
  try {
    this.$emit('close');
    await new Promise(resolve => setTimeout(resolve, 500)); // wait for .5 seconds

    const response = await axios.post('http://localhost:8000/api/api-token-auth/', {
      username: this.username,
      password: this.password
    });
    
    localStorage.setItem('token', response.data.token);
    this.error = ''; // clear any previous errors
    this.$router.push('/protected'); // redirect to a protected page
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      this.error = 'Error: ' + error.response.data.detail;
    } else if (error.request) {
      // The request was made but no response was received
      this.error = 'Error: No response from server';
    } else {
      // Something happened in setting up the request that triggered an Error
      this.error = 'Error: ' + error.message;
    }
  }
},

    cancel() {
      this.$emit('close');
    }
  }
}
</script>

