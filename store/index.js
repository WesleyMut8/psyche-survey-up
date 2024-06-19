export const state = () => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedOptions: [],
  formAnswers: {} // novo estado para armazenar as respostas do formulário
});

export const mutations = {
  setQuestions(state, questions) {
    state.questions = questions;
  },
  nextQuestion(state) {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      state.currentQuestionIndex++;
      state.selectedOptions = [];
    } else {
      alert("Survey Completed!");
    }
  },
  selectOption(state, { questionId, option }) {
    // Armazenar a resposta selecionada para a pergunta atual
    state.formAnswers[questionId] = option;
  }
};

export const actions = {
  async fetchQuestions({ commit }) {
    const response = await fetch('/survey.json');
    const questions = await response.json();
    commit('setQuestions', questions);
  },
  nextQuestion({ commit }) {
    commit('nextQuestion');
  },
  selectOption({ commit }, { questionId, option }) {
    commit('selectOption', { questionId, option });
  },
  async submitSurvey({ state }) {
    // Aqui você pode enviar ou processar os dados do formulário
    // state.formAnswers contém as respostas no formato desejado
    console.log("Form Answers:", state.formAnswers);
    // Exemplo de como você pode enviar os dados para um servidor
    try {
      const response = await fetch('/submit-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state.formAnswers)
      });
      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  }
};

export const getters = {
  currentQuestion: (state) => {
    return state.questions[state.currentQuestionIndex] || {};
  },
  selectedOptions: (state) => {
    return state.selectedOptions;
  },
  formAnswers: (state) => {
    return state.formAnswers;
  }
};
