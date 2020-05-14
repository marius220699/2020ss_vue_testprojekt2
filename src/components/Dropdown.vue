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
    props: {
      days: Array,
      title: String,
    },
    name: "Dropdown"      
  };
  
</script>

<style >

</style>
