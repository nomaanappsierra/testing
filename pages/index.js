import Link from "next/link";
import styles from "./Index.module.css"

export default function Home({ posts }) {

  const data = posts.data;

  return (<div>
    {
      data?.map((post)=>{
        return (<>
            <Link href={`./${post.id.toString()}`}>
            <div className={styles.itemwrapper}>
              <h2>{post?.attributes?.Title}</h2>
            </div>
            </Link>
            </>
        )
      })
    }

  </div>)
} 

export async function getStaticProps(){
  //get posts from API

  const res = await fetch('http://localhost:1337/api/posts');
  const posts = await res.json();
  
  return {
    props: {
      posts
    },
  }
}
