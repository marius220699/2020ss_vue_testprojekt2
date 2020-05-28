<template>
  <div>
    <h5>{{meal.category}}</h5>
    <hr/>
    <h3>{{meal.name}}</h3>
    {{data.cost.students}} €<br/>
    <td>
      <p v-for="content in meal.contentInformation" :key="content">{{content}}</p>
    </td>
    <td>{{meal.labels.split(',').join(', ')}}</td>
    <td>
      <p v-for="k in Object.keys(meal.cost)" :key="k">{{costCategories[k] }}: {{ meal.cost[k]}}</p>
    </td>
  </div>
</template>
<script>
export default {
  name: "Meal",
  data() {
    return {
      costCategories: {
        employees: "Angestellte",
        guests: "Gäste",
        students: "Studenten"
      }
    };
  },
  props: {
    meal: Object
  }
};
</script>