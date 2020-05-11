<template>
  <div>
    <span>Wochentag</span>
    <select name= "Wochentag" id="selectBox">
      <option>Montag</option>
      <option>Dienstag</option>
      <option>Mittwoch</option>
      <option>Donnerstag</option>
      <option>Freitag</option>
    </select>
  </div>
 
</template>
<script>

export default {
  
    name: "Dropdown",
    props: {data: String}
  }
</script>

<style >

</style>
