<script setup>
  const props = defineProps({ items: Array, deleteTask: Function });

</script>

<template>
  <div 
    v-for="(task, key) in props.items" 
    :key="key"
    class="flex justify-between items-center bg-[#e6e5e3] p-4 rounded-lg w-full"
  >
    <p class="text-gray-600 font-semibold">{{ task.title }}</p>
    <button
      @click="() => deleteTask(key)"
      class="bg-[#e34034] p-2 text-white text-sm rounded-lg"
    >
      Delete
    </button>
  </div>
</template>