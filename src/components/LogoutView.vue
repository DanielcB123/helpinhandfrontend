<script>
import axios from 'axios';

export default {
  methods: {
    async logout() {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/api/logout/', {}, {
        headers: {
          'Authorization': 'Token ' + token
        }
      });
      localStorage.removeItem('token');
    }
  }
}
</script>
