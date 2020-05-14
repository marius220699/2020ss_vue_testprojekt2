<template>
   <div>
     <h1>test</h1>
     <Dropdown : days="loadedData.data"></Dropdown>
     <List : mahlzeiten="loadedData.data"></List>
   </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue"
import List from "../components/List.vue"
import axios from 'axios'

export default {
  name: 'Plan',
  props: {
    msg: String
  },
  components:{
    Dropdown, List
  },
  
  data: function(){
    return {
      loadedData: 'no data loaded',
    }
  },
  mounted(){
    axios.get("http://localhost:3000/api/getData")
    .then(response => {
      this.loadedData = response.data;
      this.DropdownData = this.loadedData.map((essen)=> essen,days);
      this.DropdownData = this.DropdownData.filter((a, b)=> this.DropdownData.indexof(a)=== b)
    })
    .catch ( err => { 
      console.log(err)
    })
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
