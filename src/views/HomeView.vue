<template>
  <div class="home">
    <div  v-if= "posts.length>0" class="layout"> 
         <div class="">
          <PostList :posts="posts"></PostList>
         </div>
       <div class="">
          <TagCloud :posts="posts"></TagCloud>
       </div>
  </div>
  <div class="" v-else>
    <Spinner></Spinner>
  </div>
 
   <div class="" v-if="error">
    {{error}}

   </div>
  </div>
  
</template>

<script>
import PostList from '@/components/PostList.vue'

import getPosts from '../composable/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'




export default {
  components: {Spinner, PostList ,TagCloud},
setup(){

      let {posts,error,load} =getPosts()
  
 
  load();
  return {posts,error}
   
  
}
  
}
</script>
<style>
.home{
  max-width: 1400px;
  margin:0 auto;
  padding: 10px;
}
.layout{
  display: flex;
  grid-template-columns:3fr 1fr;
  gap: 200px;
}
</style>