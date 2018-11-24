<template>
  
</template>

<script>
import Axios from 'axios'
import Authentication from '@/components/pages/Authentication'

const BudgetManagerAPI = `http://${window.location.hostname}:3001`

export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getAllUsers()
  },
  methods: {
    getAllUsers (context) {
      Axios.get(`${BudgetManagerAPI}/api/v1/users`, {
        headers: {
          'Authorization': Authentication.getAuthenticationHeader(this)
        }
      }).then(({data}) => (this.users = data))
    }
  }
}
</script>
