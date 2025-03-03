<template>
  <div class="hello">
    <div class="container">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter your List..." v-model="list" />
      </form>
      <ul>
        <transition-group
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
        >
        <li v-for="data in Items" :key="data.id">
          {{ data.list }}
        <i class="fa fa-check-circle" v-on:click="check(data.id)"></i>
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
      Items: [],
      List:"",
    };
  },
  // created() {
  //   this.Items = [
  //     {
  //       index: 1,
  //       list: 'Playing Guitar',
  //       reminder: true
  //     }
  //   ]
  // },
  methods: {
    addTodo() {
      if (this.list.trim()) {
        const newItem = {
          id: Date.now(),  // ID unik berdasarkan timestamp
          list: this.list,
          reminder: false,
        };
        this.Items.push(newItem);
        this.list = ""; // Reset input setelah ditambahkan
      }
    },
    check(id) {
      const index = this.Items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.Items.splice(index, 1);
      }
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import "animate.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: aliceblue;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: black;
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
  