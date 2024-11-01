import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h3>Post details of : {details.id}</h3>
            <p>Title : {details.title}</p>
            <p>{details.body}</p>
        </div>
    );
};

export default PostDetails;