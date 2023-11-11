
import { ref } from 'vue'
const getPosts =()=>{
    let posts = ref([])
    let error = ref("")
     let load = async()=>{
      try {
            await new Promise((resolve,reject)=>{
                setTimeout(resolve,2000)
            })
           let response = await fetch("http://localhost:3000/posts");
           console.log(response);
            if(response.status === 404){
             throw new Error ("Url Not Found");
   
            }
            let datas= await response.json();
            posts.value=datas;
            console.log(datas);
         
      } catch (err) {
             //  console.log(error.message);
             error.value = err.message;
      }
     }
     return { posts,error,load}
}
export default getPosts;