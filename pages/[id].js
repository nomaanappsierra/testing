export default function Post(props) {
    
    const post = props.post.data[0];

    return (
        <div>
            <h1>{post.attributes.Title}</h1>
            <p>{post.attributes.Content}</p>
        </div>
    )
}

export async function getStaticProps({params}){

    const res = await fetch(`http://localhost:1337/api/posts?filters[id][$eq]=${params.id}`);
    const post = await res.json();
    
    return {
        props: {post},
    }
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/api/posts');
    const posts = await res.json();
    
    const paths = posts?.data.map(post=>({
        params: {id: post.id.toString()},
    }))
        
    return{
        paths,
        fallback: false,
    }

}