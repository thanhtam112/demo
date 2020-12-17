<template>
  <div>
    <div class="header">
      <h1>Viec can lam</h1>

  </div>
    <!-- <router-view></router-view> -->
    <add-todo @create-task="onCreateTask"></add-todo>

   

    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :task="todo"
      @task-completed="markComplete"
      @del-task="delTodo"></todo-item>
  </div>
</template>

<script>
import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'
export default {
  components: {
    AddTodo,
    TodoItem
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Viec 1',
          completed: false
        },
        {
          id: 2,
          title: 'Viec 2',
          completed: false
        },
        {
          id: 3,
          title: 'Viec 3',
          completed: false
        },
      ],
      // divArray: ['a', 'b', 'c', 'd']
    }
  },
  methods: {
    onCreateTask(task) {
      this.todos.push(task)
    },
    markComplete(id) {
      let currentTask = this.todos.find(element => element.id == id)
      currentTask.completed = !currentTask.completed
    },
    delTodo(id) {
      // let currentTask = this.todos.find(element => element.id == id)
      let index = this.todos.findIndex(element => element.id == id) // lấy ra thứ tự của thằng task trong mảng todos
      this.todos.splice(index, 1) // cắt bỏ từ phần tử thứ index đi 1 phần tử
    }
  }
}
</script>

<style scoped> 
.header {
  margin-top: 0;
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;

}
</style>