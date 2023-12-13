import styles from "./CreatePost.module.css"
import importedPostsArray from '../PostArray/PostsArray';
import { useState } from "react"
export function CreatePost(){

  const [postsArray, setPostsArray] = useState(importedPostsArray);
  console.log(postsArray)

  const [postData, setPostData] = useState({
    key:postsArray.length + 1,
    userName: '',
    category: '',
    post: '',
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreatePost = () => {
    if (postData.userName && postData.category && postData.post) {
      const newPost = { ...postData };
      setPostsArray((prevPosts) => [...prevPosts, newPost]); 
      setPostData({
        key: '',
        userName: '',
        category: '',
        post: '',
      });
    } else {
      console.error('Please fill in all fields');
    }
  };

    return(
        <>
            <div className={styles.createPostContainer}>
                <div className={styles.user}>

                    <input 
                        type="text" 
                        value={postData.userName} 
                        placeholder="Your Name:" 
                        name="userName" 
                        className={styles.name} 
                        onChange={handleInputChange}/>


                    <button 
                        type="button" 
                        className={styles.button}
                        onClick={handleCreatePost}>Create Post
                    </button>

                </div>

                <select 
                    className={styles.postOptions}
                    value={postData.category} 
                    name="category" 
                    id=""
                    onChange={handleInputChange}>
                        <option value="" disabled >Category: “General“, “Streaming”, “Games”</option>
                        <option value="General">General</option>
                        <option value="Streaming">Streaming</option>
                        <option value="Games">Games</option>
                </select>

                <textarea 
                    className={styles.postTextarea} 
                    value={postData.post} 
                    name="post" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder="Post:"
                    onChange={handleInputChange}>
                </textarea>
            </div>
        </>
    )
}