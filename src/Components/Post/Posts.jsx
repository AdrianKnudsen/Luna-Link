
import { PostCard } from "./PostCard"
import importedPostsArray from "../PostArray/PostsArray"




export function Posts(){
    const postData = importedPostsArray.map( item => <PostCard
    key = {item.key}
    userName = {item.userName}
    category = {item.category}
    post = {item.post}
    />)

    return(
        <div>
            {postData} 
        </div>          
    )
}