<template>
  <div>
    <h2>Logout</h2>
    <button @click="logout">Logout Protected</button>
  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/'); // redirect to the login page
    }
  }
}
</script>
