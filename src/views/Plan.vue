<template>
   <div id="body">
    <div id="container">
      <div id="heading">
        <div id="title">
          HfG
          <span id="lead">Mensakarte</span>
        </div>
      </div>
      <div class="datepicker">
        <label for="example-datepicker"></label>
        <b-form-datepicker value-as-date id="example-datepicker" v-model="selectedDay" class="mb-2"></b-form-datepicker>
      </div>
    </div>
    <list
      :tableData="loadedData.filter(essen => this.selectedDay && (this.day(essen.day) === this.selectedDay.getDay()))"
    />
   </div>
</template>

<script>
//import Dropdown from "../components/Dropdown.vue"
import List from "../components/List.vue"
import axios from 'axios'

export default {
  name: 'Plan',
  props: {
    msg: String
  },
  components:{
     List,
  },
  
  data: function(){
    return {
      loadedData: [],
      days: [],
      selectedDay: undefined
    };
  },

  methods: {
    selectDay: function(day) {
      this.selectedDay = day;
    },
  },

  mounted(){
    axios.get("http://localhost:3000/api/getData")
    .then(response => {
      this.loadedData = response.data;
      this.days = this.loadedData.map((essen)=> essen.day);
      this.days = this.days.filter((a, b) => this.days.indexOf(a) === b);
      this.selectedDay = this.days[0];
    })
    .catch ( err => { 
      console.log(err)
    });
  },
};


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
