<template>
  <div class="p-5 flex items-center justify-center custom-sky">
    <div class="bg-white p-10 rounded shadow-3xl w-full">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-7" style="font-family: 'Kaushan Script', cursive;">Register</h2>
      <form @submit.prevent="register">
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
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
          </div>

          <div>
            <button type="button" @click="cancel" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
          </div>
        </div>
      </form>
    </div>
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
      try {
        const response = await axios.post('http://localhost:8000/api/users/', {
          username: this.username,
          password: this.password
        });
        console.log(response.data);

        // After successful registration, log in the user
        const loginResponse = await axios.post('http://localhost:8000/api/api-token-auth/', {
          username: this.username,
          password: this.password
        });

        localStorage.setItem('token', loginResponse.data.token);
        this.$router.push('/protected'); // redirect to a protected page
      } catch (error) {
        console.error(error);
      }
    },
    cancel() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
.custom-sky{
  background: #307c8a;
}
</style>
