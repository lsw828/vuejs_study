<template>
    <button>{{title}}</button>
</template>

<script>
    module.exports = {
        data: function() {
         return {
             title: "BlueButton"
         }
        }
    }
</script>

<style scoped>
    button {
        background: blue;
        color: white;
        padding: 1rem;
    }
</style>
