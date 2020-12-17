<template>
  <div class="container">
    <header class="header">
     <h1>Dang nhap</h1>
    </header>
    <form @submit.prevent>
      <input class="name" type="text" placeholder="Nhap ten" v-model="email"> <br>
      <input class="name" type="password" placeholder="nhap mat khau" v-model="password"> <br>
      <button @click="submit">Dang nhap</button>
      <button @click="register">Dang ky</button>
    </form>
  </div>
</template>

<script>
// import database from '../database';
import axios from "axios"
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      // if (this.username === database.username && this.password === database.password) {
      //   this.$router.push('/home')
      // } else {
      //   alert('Sai username hoac password')
      // }
       axios
        .post("https://conduit.productionready.io/api/users/login", {
          user: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res);
          alert("Dang nhap thanh cong");
          this.$router.push('/home')
        })
        .catch(function(error) {
          console.log(error);
          alert("dang nhap khong thanh cong");
        });
    },
    register() {
      this.$router.push('/register')
    }
  }
};
</script>

<style scoped>
.container {
  border: 3px solid black;
  width: 50%;
  height: 500px;
  margin: 20px 350px;
}
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
form {
  border-radius: 5px;
  margin: 10px 250px;
}
.name {
  margin: 10px;
}
</style>