<template>
 <div class="tag">
   <h2>Tag Page {{tag}}</h2>
  <div class="" v-if="error">{{error}} </div>
  <div class="layout" v-if="posts.length" >
    <div>
          <PostList :posts="filterPosts"></PostList>

    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
    <div class="" v-else>
        loading....
    </div>
 </div>
</template>
<script>
import { computed } from 'vue';
import getPost from '../composable/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default{
  props:['tag'],
  components:{PostList,TagCloud},
  setup(props) {
    // console.log(props.tag),
  let { posts,error,load}=getPost();
  load();
  let filterPosts = computed(()=>{
    return posts.value.filter((post)=>{
        return post.tags.includes(props.tag)
    })
  })
  return {posts,error,filterPosts}
}
}

</script>

<style scoped>
.tag{
  max-width: 1200px;
  margin: 0 auto;
}
</style>