import Vue from 'vue';

Vue.filter('withTax', price => `${price * 1.18.toFixed(2)} tl`);
