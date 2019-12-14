import Vue from 'vue';
import BlueButton from './BlueButton'

Vue.component('bluebutton', BlueButton);

new Vue({
    el: '#app',
    data: {
        message: 'Using Single File Components'
    }
});

