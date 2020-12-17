<template>
  <div class="container">
    <header class="header">
     <h1>Dang ky</h1>
    </header>
    <form @submit.prevent>
      <input class="name" type="text" placeholder="Nhap ten" v-model="username"> <br>
      <input class="name" type="text" placeholder="nhap mat khau" v-model="email"> <br>
      <input class="name" type="password" placeholder="nhap lai mat khau" v-model="password"> <br>
      <button @click="submit" >Dang ky</button>
    </form>
  </div>
</template>

<script>

import axios from "axios"
export default {
  data() {
    return {
      // form : [  ]
         username: '',
        password: '',
     
     
      
      // passwordnhlai: ''
      email:''
      
    }
  },
  methods: {
    submit() {
    //    if (this.form.username!== '' && this.form.password === this.passwordnhlai) {
    //      alert('Dang ky thanh cong')
    //      this.user.push(this.form)
    //      console.log(this.user)
    //     this.$router.push('/')
    //   } else {
    //     alert('Nhap lai password')
    //   }
      axios
        .post(" https://conduit.productionready.io/api/users", {
          user: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res);
          alert("Dang ki thanh cong");
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error);
          alert("dang ky khong thanh cong");
        });
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