
import { PostCard } from "./PostCard"
import postsArray from "../PostArray/PostsArray"

export function Posts(){

    const postData = postsArray.map( item => <PostCard
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