<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna ali...
  </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Hello this is an about page"
      };
    }
  };
</script>



<style scoped>
  .about {
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .about h1 {
    font-size: 2rem;
    color: #333;
  }

  .about p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  .about {
    transition: all 0.3s ease;
  }

  .about:hover {
    background-color: #e0e0e0;
  }

</style>