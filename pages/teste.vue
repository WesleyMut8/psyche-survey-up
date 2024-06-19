<template>
  <div id="QuestionTemplate">
    <div class="question-number">
      <h1>1.</h1>
    </div>

    <span class="question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet quasi minus ipsa ut nostrum blanditiis? Impedit eligendi enim velit a laboriosam, ipsa earum ex, eius tempore nobis, perspiciatis libero.</span>

<!-- v-if="currentQuestion.type === number" -->
    <div >
      <v-text-field
      v-model="firstname"
      :rules="numberRules"
      outlined
      label="First name"
      hide-details
      required></v-text-field>
    </div>

    <div class="question-options">
      <div v-for="(option, index) in options" :key="index" class="question-option">
        <div class="checkbox-container">
          <label class="checkbox-label">
              <input type="checkbox" class="checkbox-input" v-model="isChecked">
              <span class="custom-checkbox"></span>
          </label>
        </div>
        <label :for="option">{{ option }}</label>
      </div>
    </div>


    <div class="next-button">
      <button class="button-next">
        <img src="~/static/arrow-right.svg" alt="next" style="width: 3rem;">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      options: ["Vermelho", "Azul", "Verde", "Amarelo"],
  })
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
