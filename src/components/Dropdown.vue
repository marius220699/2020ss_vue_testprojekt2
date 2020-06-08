<template>
<div>
  <select v-on:change="$emit('select', $event.target.value)" name="wochentag" id="select">
    <option v-for="day in days" :value="day" :selected="selectedDay === day" :key="day">{{dayNames[day]}}</option>
  </select>
</div>
</template>

<script>
export default {
  name: 'Dropdown',
    data() {
    return {
      dayNames: {
        Mo: "Montag",
        Di: "Dienstag",
        Mi: "Mittwoch",
        Do: "Donnerstag",
        Fr: "Freitag",
      }
   };
 },
props: {
    selectedDay: {
      type: String
    },
    days: {
      type: Array
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>