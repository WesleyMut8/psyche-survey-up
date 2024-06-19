<template>
  <div id="QuestionTemplate">
    <div class="question-number">
      {{ currentQuestion.id }}
    </div>

    <span class="question-text">{{ currentQuestion.question }}</span>

    <div v-if="currentQuestion.type === 'number'">
      <v-text-field
      v-model="firstname"
      :rules="numberRules"
      outlined
      label=""
      hide-details
      required></v-text-field>
    </div>

    <div v-if="currentQuestion.type === 'boolean'">
      <div v-for="(option, index) in currentQuestion.options" :key="index" class="question-option">
        <div class="radio-container">
          <label class="radio-label">
            <input
              type="radio"
              :id="option"
              :value="option"
              @change="selectOption(option)"
            />
            <span class="custom-radio"></span>
            {{ option }}
          </label>
        </div>
      </div>
    </div>


    <div class="next-button">
      <button @click="nextQuestion" class="button-next">
        <img src="~/static/arrow-right.svg" alt="next" style="width: 2.5rem;">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberInput: '',
      numberRules: [
        value => {
          if (value && /^\d+$/.test(value)) return true;
          return 'Por favor insira um número inteiro!';
        }
      ],
      selectedOption: null, // Vincula-se apenas à opção selecionada
    };
  },
  async beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch('fetchQuestions'); // Dispara ação para buscar perguntas
    });
  },
  async fetch({ store }) {
    if (!store.state.questions.length) {
      await store.dispatch('fetchQuestions');
    }
  },
  computed: {
    currentQuestion() {
      return this.$store.getters.currentQuestion;
    }
  },
  methods: {
    selectOption(option) {
      this.$store.commit('selectOption', { questionId: this.currentQuestion.id, option });
    },
    nextQuestion() {
      this.$store.dispatch('nextQuestion');
    }
  },
};
</script>

<style scoped>
#QuestionTemplate {
  display: flex;
  flex-direction: column;
  padding: 7rem;
  /* justify-content: space-between; */
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
}

.question-number {
  display: flex;
  margin: 0 auto;
  max-width: 50px;
  text-align: center;
  font-weight: 600;

  margin-bottom: 2rem;
}

.question-text {
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 4rem;
}

.question-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-option {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  display: none;
}

.custom-checkbox {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #000000;
  border-radius: 50%;
  position: relative;
}

.checkbox-input:checked + .custom-checkbox {
  background-color: #000000;
}

.checkbox-input:checked + .custom-checkbox::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 50%;
}

.next-button {
  max-width: 7rem;
  display: flex;
  background-color: #000000;
  padding: .5rem 2rem;
  border-radius: 2rem;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 auto;
  margin-top: 2rem;
}

.next-button:hover {
  background-color: #000000c2;
  cursor: pointer;
}
</style>
