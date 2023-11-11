<template>
<h1>Detail Page</h1>

 <div class="project" v-if="post">
    <h4> {{post.id}}</h4>
  <h3>   {{post.title}}</h3>
  <p> {{post.body}}</p>
 </div>
 <div class="" v-else>
   <Spinner></Spinner>
 </div>
</template>
<script>
import getPostDetail from '../composable/getPostDetail'
import Spinner from '../components/Spinner.vue'
import {useRoute} from 'vue-router'
export default{
    props:['id'],
    components:{Spinner},
  
    setup(props) {
      let route = useRoute();
      // console.log(route.params.id);
          getPostDetail()
        // let {post,error,load}=getPostDetail(props.id);
           let {post,error,load}=getPostDetail(route.params.id);
        load();
        return{post,error};
    }
}

</script>
<style scoped >
.project{
    padding: 20px;
    background-color: #f2f2f2;
    cursor: pointer;
    margin: 10px;
    border-left: 6px solid crimson;
    border-radius: 8px;
}
</style>