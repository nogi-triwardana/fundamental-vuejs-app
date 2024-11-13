<script setup>
  import { ref, watch } from 'vue';
  import TodoItem from '../components/todoapp/todoitem.vue';

  const tasks = ref([]);
  const keyword = ref('');

  const addNewTask = () => {
    tasks.value.push({
      id: tasks.value.length,
      title: keyword.value,
      isEdit: false,
      isDone: false,
    });
    keyword.value = '';
  };


  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((item, i) => item.id !== id);
  };

  const handleChangeWording = (index) => {
    tasks.value = tasks.value.map((item, i) => {
      if(i === index) {
        return {
          ...item,
          isEdit: !item.isEdit,
        }
      } else return item;
    })
  };


  const resetTask = () => {
    tasks.value = [];
  };

</script>

<template>
  <main class="flex flex-col gap-10 items-center justify-center">
    <div class="flex flex-col justify-center items-center w-full">
      <div class="flex gap-2">
        <input 
          v-model="keyword"
          class="border border-gray-700 w-[240px]" 
          @keyup.enter="addNewTask"
        />
        <button 
          class="bg-[#2241e0] p-2 text-white rounded-lg"
          @click="addNewTask"
        >
          Submit
        </button>
        <button 
          class="bg-[#f5b133] p-2 text-white rounded-lg"
          @click="resetTask"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2 w-[400px]">
      <TodoItem 
        :items="tasks" 
        :handleChangeWording="handleChangeWording" 
        :deleteTask="deleteTask" 
      />
    </div>
  </main>
</template>
