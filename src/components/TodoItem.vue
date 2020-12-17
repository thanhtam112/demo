<template>
  <div >
     <p :class="['todo-item', task.completed ? 'is-completed' : '']">
         <input type="checkbox" 
         :checked ="task.completed"
          @change="markTaskCompleted" 
          />
         {{ task.title }}
         <button class="del" @click="delTask">Delete</button>
     </p>
  </div>
</template>

<script>
// import { ref } from 'vue'
export default {
  name: 'TodoItem',
  props: ['task'],
  methods: {
    markTaskCompleted() {
    
      this.$emit('task-completed', this.task.id)

      
      // this.task.completed = !this.task.completed
    },
    delTask() {
      this.$emit('del-task', this.task.id)
    },
  }
}
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}
</style>