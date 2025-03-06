import { Link } from "react-router-dom";

function HomePage () {
    return (
        <div className="container">
            <h1>Title</h1>
            <Link to="/matrix">
                <button>Next Page</button>
            </Link>
        </div>
    );
};

export default HomePage;
