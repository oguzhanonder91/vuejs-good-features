<template>
  <div class="hello">
    <input type="text" v-model.trim="message"/>
    <button @click="log">Log to console</button>
    <button @click="setValue">Set value</button>
    <select v-model="selectedVal">
      <option value="">Select</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </select>

    <input type="checkbox" v-model="isCheck"/>

    <!-- Bazı durumlarda data çekmeden ekranda bi şey görünmesin isteyebiliriz. .-->
    <!--  Data gelmeden ekranda {{user.name }}  yazar..-->
    <!-- Bunu engellemek için vcloak kullanabiliriz..-->


    <div id="vcloak" v-cloak>
      <ul>
        <li v-bind:key="user.id" v-for="user in users">{{user.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        message: 'Hello World',
        selectedVal: '',
        isCheck: false,
        users: [{ id: 1, name: 'Oğuzhan', surname: 'Önder' }, { id: 2, name: 'Metehan', surname: 'Önder' }],
      };
    },
    methods: {
      log() {
        console.log(this.message);
      },
      setValue() {
        this.message = 'Worl World';
        this.selectedVal = 'baz';
        this.isCheck = true;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style>[v-cloak] {
  display: none;
}
</style>
