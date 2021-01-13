<template>

<!-- THIS IS GOING TO BE THE VISUAL OUTPUT PROVIDED BY THIS COMPONENT IN THE APP -->
    <div id="fullname">
        <h2>Output from component: <span class='component'>Fullname.vue</span></h2>
        <h3>Full Name: {{ name }} {{ surname }}</h3>
    </div>
</template>

<script>

// THIS COMPONENT TAKES INFORMATION FROM THE person OBJECT IN App.vue.
// ITS PURPOSE IS TO DISPLAY THE FULL NAME, SO IT WILL NEED TO DISPLAY 2 VALUES OF THE OBJECT, NAME AND SURNAME...
// ... FOR THIS REASON, WE CREATE 2 PROPS (name AND surname) THAT'LL ACT AS 'CONTAINER' FOR EACH VALUE.
// THEN, DISPLAY SUCH VALUES, WE SIMPLY PUT THEM IN THE <template> AS IF THEY WERE VARIABLES.
// BASICALLY WE ARE TAKING INFORMATION FROM App.vue AND ARRANGING IT AS WE WANT, IN THIS CASE, AS PER <h1>.

export default {
    name: 'full-name',                 // NAME OF THE COMPONENT
    props: ['name', 'surname']
}
</script>

<style>

.component {
    color: green;
}

#fullname {
    border: 10px solid brown;
    padding: 10px;
}

</style>