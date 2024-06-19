<template>
  <div id="NavBar">
    <h1>
      Psyche Survey
    </h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
#NavBar {
  display: flex;
  background-color: #000000;
  justify-content: start;
  width: 100%;
  height: var(--appbar-height);
  align-items: center;
}

h1 {
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 1rem;
}
</style>
