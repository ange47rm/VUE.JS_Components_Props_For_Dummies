<template>

  <div>
    <!-- THE BELOW IS THE EQUIVALENT OF US DISPLAYING THE CONTENTS OF THE full-name COMPONENT, WHOSE ROLE IS TO SIMPLY DISPLAY THE FULL NAME OF THE person OBJECT (DEFINED BELOW) -->
    <full-name v-bind:name="person.name" v-bind:surname="person.surname"></full-name>
    <!-- IN THE ABOVE, WE DEFINE THE RELATIONSHIP OF THE 2 PROPS WE DEFINED IN THE full-name COMPONENT, TO THE person OBJECT FROM WHICH WE'RE EXTRAPOLATING INFORMATION -->
    <br>
    <!-- FROM THE person OBJECT, THE user-name COMPONENT WILL ONLY NEED TO "GIVE US" THE username VALUE, SO WE CREATE ONE PROP, THAT WE CAN NAME username -->
    <user-name v-bind:username="person.username"></user-name>

  
  </div>

</template>





<script>

import FullName from './components/Fullname.vue'
import Username from './components/Username.vue'


export default {
  name: "app",
  data () {
    return {
      person: 
        {name: 'Angelo',surname: 'Di Massimo', age: 29, nationality: 'italian', username: 'ange47'}
    }
  },
  components: {
    "full-name": FullName,
    "user-name": Username
  }

}
</script>












<style>

</style>