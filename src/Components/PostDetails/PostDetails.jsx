import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const details = useLoaderData();

    const { postId } = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post details of : {details.id}</h3>
            <p>Title : {details.title}</p>
            <p>{details.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;