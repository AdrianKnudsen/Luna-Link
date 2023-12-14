
import { CreatePost } from "../Components/Post/CreatePost"
import {Posts} from "../Components/Post/Posts"

export function LandingPage(){
    return(
        <>
            <main>
                <CreatePost/>
                <Posts/>
                <h1>Main</h1>
            </main>
        </>
    )
}