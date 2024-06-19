<template>
  <div id="DisclaimerPage">
    <div class="close-button">
        <nuxt-link to="/" class="button-close">
          <img src="~/static/close.svg" alt="">
        </nuxt-link>
    </div>

    <div class="title">
      <h3>ISENÇÃO DE RESPONSABILIDADE</h3>
    </div>

    <div class="disclaimer">
      <div>
        <h4>
          Psyche Survey NÃO É um diagnóstico médico
        </h4>
        <p>Este software apenas utiliza análise de dados e integrações com inteligência artificial para indicar possíveis pacientes com depressão.</p>
      </div>

      <div>
        <h4>
          Psyche Survey NÃO guarda nem compartilha suas informações
        </h4>
        <p>Este software não possui nenhuma forma de armazenar seus dados em bases ou qualquer coisa do tipo, assim que o site for fechado suas informações serão perdidas.</p>
      </div>
    </div>

    <div class="agree-button">
      <span>Eu tenho total ciência do que foi dito e quero prosseguir</span>
      <div class="checkbox-container">
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input" v-model="isChecked">
            <span class="custom-checkbox"></span>
        </label>
      </div>
    </div>

    <div class="proceed-button" :class="{ disabled: !isChecked }">
      <button @click="proceed" :disabled="!isChecked" class="button-proceed">
        <img src="~/static/check.svg" alt="Proceed">
      </button>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    proceed() {
      if (this.isChecked) {
        this.$router.push('/survey/1');
      }
    }
  },
  async fetch() {
    if (!this.$store.state.questions.length) {
      await this.$store.dispatch('fetchQuestions');
    }
  },
  }
</script>

<style lang="scss" scoped>
#DisclaimerPage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  padding: 2rem;
}

.title, .disclaimer {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
}

.disclaimer {
  width: 500px;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
}

.agree-button {
  display: flex;
  margin: 0 auto;
  text-align: center;
  gap: 1rem;
  font-weight: 300;
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
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-radius: 50%;
    position: relative;
}

.checkbox-input:checked + .custom-checkbox {
    background-color: #000000;
}

.checkbox-input:checked + .custom-checkbox::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 50%;
}

.proceed-button {
  max-width: 7rem;
  display: flex;
  background-color: #000000;
  padding: .5rem 2rem;
  border-radius: 2rem;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 auto;

  img {
    width: 2.5rem;
  }
}

.proceed-button:hover {
  background-color: #000000c2;
  cursor: pointer;
}

.disabled {
  background-color: lightgray;
  pointer-events: none;
  border: 1px solid lightgray;
}
</style>
