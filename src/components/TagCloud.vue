            <template>
            <div class="tag-cloud">
                <h3>Tag Cloud</h3>
           <div>
           <div v-for="tag in uniqueTags" :key="tag">
                
              <router-link :to="{name:'Tag',params:{tag:tag} }">{{tag}} </router-link>

            </div>
           </div>

            
            </div>

            </template>
            <script>
import { ref } from 'vue';
                export default{
                   
                    props:['posts'],
                    setup(props){
                         let tagData=ref([])
                        props.posts.forEach((post)=>{
                            
                            post.tags.forEach((tag)=>{
                               
                                tagData.value.push(tag)
                            })
                        });
                       let uniqueTags=  tagData.value.filter((tag,index,array)=>{
                            return  array.indexOf(tag) === index;

                        })
                        return {uniqueTags}
                    }
                }
              
            </script>
            <style scoped >
                .tag-cloud{
                    padding: 10px;
                }
                .tag-cloud h3{
                    border-bottom: 1px solid #eee;
                    padding: 16px 8px;
                    color: #444;

                }
                .tag-cloud div{
                    display: inline-block;
                    padding: 10px;
                }
                .tag-cloud a{
                    color: #ccc;
                    text-decoration: none;

                }
                .tag-cloud a.router-link-active{
                    color: #ff8800;
                    font-weight: bold;
                }
               
            </style>
            