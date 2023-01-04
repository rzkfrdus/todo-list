<template>
  <div class="hello">
    <div class="container">
      <input type="text" placeholder="insert your List..." v-model="list" />
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="insert your date" v-model="mydate" />
      </form>
      <br>
      <ul>
        <transition-group
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
        >
          <li v-for="(data, index) in Items" :key="index">
            <i class="fa fa-check-circle" v-on:click="check(index)"></i>
            <h3>{{ data.list }}</h3>
            <a> date: {{ data.mydate }}</a>
          </li>
        </transition-group>
      </ul>

      <p>These are list for you to do</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "todo-list",
  data() {
    return {
      list: "",
      mydate: "",
      Items: [
        {
          list: "go to gym",
          mydate: "10/06/2023",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.Items.push({ list: this.list, mydate: this.mydate });
      this.list = "";
      this.mydate = "";
    },
    check(id) {
      this.Items.splice(id, 1);
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import "animate.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background-color: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  padding: 20px;
  font-size: 12px;
  margin-bottom: 2px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h3 {
  padding: 20px;
  font-size: 16px;
  margin-bottom: 2px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: deeppink;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: white;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: antiquewhite;
  color: lightblue;
}

i {
  float: right;
  cursor: pointer;
}

br {
  background-color: #fff;
}
</style>
  