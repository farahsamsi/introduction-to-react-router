import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';


const Post = ({ post }) => {
    const { id, title } = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h2>Post {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={() => handleShowDetails()}>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;