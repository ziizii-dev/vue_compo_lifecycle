<template>
  <div class="home">
    <input type="text" v-model="search">
    <p>{{search}} </p>
   <div class="" v-for="name in filterNames" :key="name">
    {{name}}
   </div>
   <hr>
   
  </div>
  <div class="" v-if="showPost">
     <PostList :posts="posts"></PostList>
  </div>
  <button @click="showPost =! showPost"> shoe/hide component </button>
  <button @click="posts.pop()">delete</button>
</template>

<script>
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'



export default {
  components: { PostList },
setup(){
  let search=ref("")
  let names=ref(["aung aung",'mg mg','kyaw kyaw','tun tun']);
  let showPost=ref(true)
 let posts = ref([
    {title:"title one",body:"body one ",id:"1"},
     {title:"title two",body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga iusto alias illo nostrum iste quos ea dolor, veritatis, voluptate perferendis quasi! Obcaecati ipsam a veritatis excepturi deleniti ab atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga iusto alias illo nostrum iste quos ea dolor, veritatis, voluptate perferendis quasi! Obcaecati ipsam a veritatis excepturi deleniti ab atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, fuga iusto alias illo nostrum iste quos ea dolor, veritatis, voluptate perferendis quasi! Obcaecati ipsam a veritatis excepturi deleniti ab atque?",id:"2"},
      {title:"title three",body:"body three",id:"3"},
   ])
  let filterNames=computed(()=>{
    return names.value.filter((name)=>{
      return name.includes(search.value)
    })
  });
  return {names,search,filterNames,posts,showPost}
   
  
}
  
}
</script>
