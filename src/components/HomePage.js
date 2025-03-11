import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>GridS2</h1>
            </header>

            <div className="sections">
                <section className="section architecture-section">
                    <h2>Project Architecture</h2>
                    <div className="image-container">
                        <img src="/grids2.jpg" alt="Flowchart Diagram" className="flowchart-img" />
                    </div>
                </section>

                <section className="section description-section">
                    <h2>🛠 About the Project</h2>
                    <p className="intro-text">
                        This project is a web app that collects a 5×5 matrix from users, stores it in a NoSQL database.
                    </p>

                    <div className="project-details">
                        <div className="detail-box">
                            <h3>🌐 Frontend</h3>
                            <ul>
                                <li>Built with <b>React.js</b></li>
                                <li>Hosted on <b>Azure Static Web Apps</b></li>
                                <li>Allows users to input a 5×5 matrix</li>
                            </ul>
                        </div>

                        <div className="detail-box">
                            <h3>🖥️ Backend</h3>
                            <ul>
                                <li>Developed using <b>Node.js</b> + <b>Express.js</b></li>
                                <li>Hosted on <b>Azure App Services</b></li>
                                <li>Provides 3 API methods:
                                    <ul className="sub-list">
                                        <li>POST: Save a matrix to <b>CosmosDB</b></li>
                                        <li>GET (all matrices): Fetches all stored matrices</li>
                                        <li>GET (by ID): Retrieves a specific matrix</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="detail-box">
                            <h3>💾 Database</h3>
                            <ul>
                                <li>Uses <b>Azure CosmosDB (NoSQL)</b></li>
                                <li>Stores matrices in JSON format with timestamps</li>
                            </ul>
                        </div>

                        <div className="detail-box">
                            <h3>🐍 Python Data Processing</h3>
                            <ul>
                                <li>Locally executed Python script</li>
                                <li>Fetches matrices from <b>CosmosDB</b></li>
                                <li>Generates an <b>Excel</b> file with each matrix in a separate sheet</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className="button-container">
                <Link to="/matrix">
                    <button className="next-btn">Next Page</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
