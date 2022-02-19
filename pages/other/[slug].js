export default function Other({post}) {

    return (
        <div>
            <h1>
                {post.attributes.Title}
            </h1>
            <p>
                {post.attributes.Content}
            </p>
        </div>
    )
}


export async function getServerSideProps({params}){
    
    const res = await fetch(`http://localhost:1337/api/others?filters[Slug][$eq]=${params.slug}`);
    const data = await res.json();

    const post = data.data[0];

    return{
       props: {post}
    }
}

