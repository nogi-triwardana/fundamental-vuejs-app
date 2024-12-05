<script setup>
  const props = defineProps({ 
    items: Array, 
    deleteTask: Function, 
    handleChangeWording: Function,
    handleChangeCompleted: Function, 
  });

</script>

<template>
  <div 
    v-for="(task, key) in props.items" 
    v-bind:key="key"
    class="flex justify-between items-center bg-[#e6e5e3] p-4 rounded-lg w-full"
  >
    <input 
      v-if="task.isEdit"
      v-model="task.title"
      v-on:keyup.enter="() => handleChangeWording(key)"
    />
    <p 
      v-else
      v-bind:class="['text-gray-600 font-semibold', task.isDone ? 'line-through' : '']"
      v-on:click="() => handleChangeWording(key)"
    >
      {{ task.title }}
    </p>
    <div class="flex gap-2">
      <button
        v-on:click="() => handleChangeCompleted(key)"
        class="bg-[#2241e0] p-2 text-white text-sm rounded-lg"
      >
        {{ task.isDone ? 'Not Completed' : 'Completed' }}
      </button>
      <button
        v-on:click="() => deleteTask(key)"
        class="bg-[#e34034] p-2 text-white text-sm rounded-lg"
      >
        Delete
      </button>
    </div>
  </div>
</template>