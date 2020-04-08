<template>
  <div id="nextTick">
    {{message}}
    <button @click="writeConsole">Write Console</button>
  </div>
</template>

<script>
  export default {
    name: 'NextTick',
    data() {
      return {
        message: 'Hello',
      };
    },
    methods: {
      writeConsole() {
        this.message = 'Hello World';
        console.log(document.querySelector('#nextTick').innerText);

        // Dom da işlem bittiğinde;
        this.$nextTick(() => {
          console.log(console.log(document.querySelector('#nextTick').innerText));
        });
      },
    },
  };
</script>

<style scoped>

</style>
