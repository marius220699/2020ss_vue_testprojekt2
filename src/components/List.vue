<template>
  <div>
    <h3>Liste</h3>
    {{mahlzeiten}}
    <table id= "table">
      <tr>
      <th>category</th>
      <th>day</th>
      <th>cost</th>
      <th>contentInformation</th>
      <th>downvotes</th>
      <th>id</th>
      <th>labels</th>
      <th>name</th>
      <th>upvotes</th>
      </tr>

      <meal v-for="meal in tableData" :meal="meal" :key="meal.id" />
    </table>
  </div>
</template>
<script>
import Meal from "../components/Meal.vue";
export default {
  name: "List",
  components: {
    Meal,
  },
  props: {
    tableData: Array
  }
};
</script>

<style>

</style>