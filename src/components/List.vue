<template>
  <li>
    <h5>{{data.category}}</h5>
    <hr/>
    <h3>{{data.name}}</h3>
    {{data.cost.students}} €<br/>
    <Meal class= "mahlzeiten" v-for= "meal in mahlzeiten" :key="meal" :data="meal"/>
  </li>
</template>
<script>

  import Meal from "../components/Meal.vue" 

  export default {
    props: {
      mahlzeiten: Array
    },
    components: {
      Meal
    },
    name: "List"
  }

</script>



<style>

</style>