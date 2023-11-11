<template>
    <h1>Post Lists</h1>
   <div class="" v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
   </div>
</template>
<script>
import SinglePost from './SinglePost.vue';
export default{
  components: { SinglePost },
    props:['posts'],
    setup(props){
       

    }
}
</script> 
<style scoped>

</style>