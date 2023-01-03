<template>
  <div class="hello">
    <div class="container">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter your List..." v-model="item" />
      </form>
      <ul>
        <transition-group
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
        >
          <li v-for="(data, index) in Items" :key="index">
            {{ data.item }}
            <i class="fa fa-check-circle" v-on:click="check(index)"></i>
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
      item: "",
      Items: [],
    };
  },
  methods: {
    addTodo() {
      this.Items.push({ item: this.item });
      this.item = "";
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
  background-color: #323333;
  color: lightblue;
}

i {
  float: right;
  cursor: pointer;
}
</style>
  