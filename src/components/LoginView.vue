<template>
  <div class="p-5 flex items-center justify-center login-modal">
    <div class="bg-white p-10 rounded shadow-3xl w-full">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-7" style="font-family: 'Kaushan Script', cursive;">Login</h2>
      <form @submit.prevent="login">
        <div class="space-y-6">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" type="text" v-model="username" required class="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Username">
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" type="password" v-model="password" required class="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Password">
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </div>

          <div>
            <button type="button" @click="cancel" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
          </div>
        </div>
      </form>

      <div v-if="error" class="text-center text-red-500 font-semibold mt-6">{{ error }}</div>
    </div>
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

<style scope>
.login-modal{
  background: #2F74AF;
}
</style>