<template>
  <div id="HomePage">
    <div class="banner">
      <img src="~/static/brain.svg" alt="">
    </div>

    <div class="home-content">
      <span>Olá! Seja bem vindo(a) ao <span style="font-weight: 700;">Psyche Survey</span>!</span>
      <p>Psyche Survey é um software integrado com IA que pode te ajudar a tirar algumas dúvidas sobre saúde mental.</p>
    </div>

    <div class="home-button">
        <nuxt-link to="/DisclaimerPage" class="button-start">
          <span>IR PARA PESQUISA</span>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
#HomePage {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 3rem;
}

.banner {
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    width: 250px;
  }
}

.home-content {
  display: flex;
  width: 400px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  span, p {
    text-align: center;
  }
}

.home-button {
  margin: 0 auto;

  .button-start {
    background-color: #000000;
    color: #ffffff;
    padding: .75rem 3rem;
    border: none;
    border-radius: 1.5rem;
    font-weight: 500;
    font-size: 1.2rem;
    text-decoration: none;
  }

  .button-start:hover {
    background-color: transparent;
    border: 1px solid #000000;
    color: #000000;
  }
}
</style>
