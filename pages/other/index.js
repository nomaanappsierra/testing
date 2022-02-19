import Link from "next/link";

export default function Home(posts){
    const data = posts.posts;

    
    return (
        <div>
            <h1>Hello</h1>

            {data.map(post=>{
                return <div key={post.id}>
                    <Link href={`./other/${post.attributes.Slug}`}>
                        <h1>{post.attributes.Title}</h1>
                    </Link>
                </div>
            })}

        </div>
    )
}


export async function getServerSideProps(){

    const res = await fetch(`http://localhost:1337/api/others`);
    const data = await res.json();

    const posts = data.data;
    return{
        props:{
            posts
        }
    }

}