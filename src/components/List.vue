<template>
  <b-row class="cols">
    <b-col v-for="category in getCategories()" :key="category">
      <b-card
        v-for="meal in tableData.filter(m => m.category.startsWith(category))"
        :key="meal.id"
        tag="article"
        class="mb-5"
      >
        <b-card-text>
          <Meal class="mahlzeit" :meal="meal" />
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>

  import Meal from "../components/Meal.vue" 

  export default {
    props: {
      tableData: Array
    },
    components: {
      Meal
    },
    methods: {
    getCategories() {
      const reg = /([a-zA-Z]+)[0-9]*/;
      const allCategories = this.tableData
        .map(essen => essen.category)
        .map(s => s.match(reg)[1])
    console.log(allCategories)
      return allCategories.filter((a, b) => allCategories.indexOf(a) === b);
    }
  },
    name: "List"
  }

</script>



<style>

</style>