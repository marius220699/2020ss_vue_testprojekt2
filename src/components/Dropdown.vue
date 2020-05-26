<template>
  <div>
    <h3>{{title}}</h3>
    <span>Wochentag</span>
    <select name= "Wochentag" id="selectBox">
      <option v-for="day in days" :key="day">{{days}}</option>
    </select>
  </div>
 
</template>
<script>

export default {
  name: "Dropdown",
  data() {
    return {
      dayNames: {
        Mo: "Montag",
        Di: "Dienstag",
        Mi: "Mittwoch",
        Do: "Donnerstag",
        Fr: "Freitag"
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

<style >

</style>
