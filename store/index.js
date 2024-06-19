// store/index.js

export const state = () => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedOptions: []
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
  selectOption(state, option) {
    const index = state.selectedOptions.indexOf(option);
    if (index > -1) {
      state.selectedOptions.splice(index, 1);
    } else {
      state.selectedOptions.push(option);
    }
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
  selectOption({ commit }, option) {
    commit('selectOption', option);
  }
};

export const getters = {
  currentQuestion: (state) => {
    return state.questions[state.currentQuestionIndex] || {};
  },
  selectedOptions: (state) => {
    return state.selectedOptions;
  }
};
