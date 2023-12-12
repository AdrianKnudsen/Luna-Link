import styles from "./CreatePost.module.css"

export function CreatePost(){
    return(
        <>
            <div className={styles.createPostContainer}>
                <div className={styles.user}>
                    <input type="text" placeholder="Your Name:" name="" className={styles.name} />
                    <button className={styles.button}>Create Post</button>
                </div>
                <select className={styles.postOptions} name="" id="" placeholder>
                    <option value="" disabled selected>Category: “General“, “Streaming”, “Games”</option>
                    <option value="">General</option>
                    <option value="">Streaming</option>
                    <option value="">Games</option>
                </select>
                <textarea className={styles.postTextarea} name="" id="" cols="30" rows="10" placeholder="Post:"></textarea>
                

            </div>
        </>
    )
}