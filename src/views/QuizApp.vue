<!-- Using setup() hook for composition API usage in components -->
<script>
  import { ref } from 'vue';
  import QuizData from '../constants/quiz';
  
  export default {
    setup() {
      const activeQuiz = ref(0);
      const selectedAnswer = ref('');

      return { selectedAnswer, activeQuiz, QuizData };
    }
  }

</script>

<template>
  <main class="flex flex-col gap-10 items-center justify-center py-8">
    <div class="flex flex-col gap-2 w-1/2">
      <p>{{ QuizData[activeQuiz].questions }}</p>
      <div class="grid grid-cols-2">
        <div v-for="item in Object.values(QuizData[activeQuiz].options)">
          <div class="flex gap-2">
            <input 
              v-model="selectedAnswer" 
              type="radio" 
              :id="item" 
              :value="item" 
            />
            <label 
              :for="item"
            >
              {{ item }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>