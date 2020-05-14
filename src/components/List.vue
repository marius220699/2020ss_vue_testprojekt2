<template>
  <div>
    <h3>Liste</h3>
    {{mahlzeiten}}
    <div class="mahlzeit" v-for="meal in mahlzeiten" :key="meal"></div>
    <table>
      <tr>category</tr>
      <tr>day</tr>
      <tr>cost</tr>
      <tr>contentInformation</tr>
      <tr>downvotes</tr>
      <tr>id</tr>
      <tr>labels</tr>
      <tr>name</tr>
      <tr>upvotes</tr>
      
    </table>
  </div>
</template>
<script>

 export default {
    props: {
      mahlzeiten: Array
    },
    name: "List"      
  };
  
</script>

<style>

</style>