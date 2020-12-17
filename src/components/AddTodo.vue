<template>
  <form @submit.prevent>
    <input type="text" placeholder="Them viec..." v-model="title"  />
    <input type="submit" @click="addTask" value="Them" class="add-btn">
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      const newTask = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }
      this.$emit('create-task', newTask)
      this.title = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 50px;
}
input[type="submit"] {
  flex: 2;
}
</style>>

