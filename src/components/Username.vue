<template>

<!-- THIS IS GOING TO BE THE VISUAL OUTPUT PROVIDED BY THIS COMPONENT IN THE APP -->
  <div id='username'>
      <h2>Output from component: <span class='component'>Username.vue</span></h2>
      <h3> Username: {{ username }}</h3>
  </div>


</template>

<script>
export default {
    name: 'user-name',                 // NAME OF THE COMPONENT
    props: ['username']
}
</script>

<style>

.component {
    color: green;
}

#username {
    border: 10px solid brown;
    padding: 10px;
}

</style>