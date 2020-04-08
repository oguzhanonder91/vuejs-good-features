<template>
  <select>
    <VueOption value="Foo"></VueOption>
    <VueOption value="Bar"></VueOption>
    <VueOption value="Baz"></VueOption>
  </select>

</template>

<script>
  import VueOption from './Vue-Option';

  export default {
    name: 'Vue-Select',
    components: { VueOption },
  };
</script>

<style scoped>

</style>
