<template>
  <div>
    <a href="/bar" @click.prevent="log">Go Bar</a>
    <button @click.once="log">Button</button>
    <input type="text" @keyup.alt.enter="log"/>
    <input type="text" @keyup.a="log"/>
    <div id="filters">
      <p>{{name | upperCase}}</p>
      <p>{{price| withTax | upperCase}}</p>
    </div>
  </div>
</template>

<script>
  import filter from '@/components/filters';

  export default {
    name: 'EventModifiers',
    data() {
      return {
        name: 'logitech camera',
        price: 25,
      };
    },
    methods: {
      log() {
        console.log('Foooooo');
        // preventdefault = click.prevent. prevent yerine stop da yazabiliriz. stopPropagation için
        // keyup.enter , keyup.alt.enter
      },
    },
    filters: {
      upperCase(text) {
        return text.toUpperCase();
      },
    },
  };
</script>

<style scoped>

</style>
