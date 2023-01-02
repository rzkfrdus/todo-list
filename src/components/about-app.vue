<template>
  <div class="about">
    <h1>Hello {{ a_name }}, this is an about page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name:'todo-list',
  data() {
    return {
      a_name: this.$route.params.nama
    }
  }
}
</script>