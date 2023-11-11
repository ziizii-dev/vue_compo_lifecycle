            <template>
            <h1>Create Page</h1>

            <form @submit.prevent="addPost">
                    <label for="">Title</label>
                <input type="text"  v-model="title">
                <label >Body</label>
                <textarea v-model="body"></textarea> 
                <!-- <div v-for="skill in skills" :key="skill">
           <p> {{skill}}<span class="cross" @click="deleteSkills(skill)">&#x2716;</span>  </p>

         </div> -->
                <div v-for="tag in tags" :key="tag" class="pill">
               
                   <p >{{tag}}<span class="cross" @click="deleteTags(tag)">&#x2716;</span>  </p>
                </div>  
                    <label >Tags</label>
                    <input type="text"  v-model="tag" @keydown.enter.prevent="handleKeydown">    
                <div>     
                    </div>
                    <div class="align">        
                    <button class="create" type="submit" >Add Post</button>
                    </div>
               </form> 

            </template>
            <script>
              import {useRouter} from 'vue-router';
              import { ref } from 'vue'
                export default{

                    setup(){
                        let title=ref("");
                        let body=ref("");
                        let tag= ref("");
                        let tags=ref([]);
                        let router = useRouter();
                        let handleKeydown=()=>{
                           if(!tags.value.includes(tag.value)){
                            tags.value.push(tag.value);
                           }
                        tag.value=""
                        } 
           
                        let deleteTags=(tag)=>{
                          tags.value= tags.value.filter(loopTag=>{
                            return loopTag !== tag;
                          })



                        }
                    let addPost=async()=>{
                      await fetch("http://localhost:3000/posts",{
                        method:"POST",
                        headers:{
                          "Content-type":"application/json"
                        },
                        body:JSON.stringify({
                          title:title.value,
                          body:body.value,
                          tags:tags.value
                        })
                      
                       
                      })
                      router.push('/')
 
                    }
                    
                        return {title,body,tag,tags,handleKeydown,addPost,deleteTags}
                    }
                }
            </script>
            <style>
            </style>
            <style  scoped>

form{
    max-width: 420px;
    margin: 32px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}
label{
    display: inline-block;
    color: #aaa;
    margin: 25px 0 15px ;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}
 textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width:  16px;
   margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
span{
    margin: 1px 2px 1px 2px ;
}
.cross{
  cursor: pointer;
  color: red;
}
.create{
  background-color: royalblue;
  padding: 8px;
  color: white;
  border-radius: 10px;
}
.align{
  text-align: center;
}
.error{
  color: crimson;
}
.pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 4px;
    border-radius: 20px;
    font-size: 14px;
}
</style>