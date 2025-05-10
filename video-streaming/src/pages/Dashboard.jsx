import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Dashboard.css";
import logo from "../assets/logoo.png"; // Import the logo image

function Dashboard() {
    const navigate = useNavigate(); // Hook for navigation
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const [playingMovie, setPlayingMovie] = useState(null); // Track playing movie

    const romanticMovies = [
        { id: 1, title: "Warm and Cozy", img: "warm-and-cozy.jpg", desc: "A sweet romantic K-Drama." },
        { id: 2, title: "Miss Night and Day", img: "miss-night-and-day.jpg", desc: "A fantasy time-switch drama." },
        { id: 3, title: "My Demon", img: "my-demon.jpg", desc: "A supernatural love story." },
        { id: 4, title: "Crash Landing on You", img: "crash-landing.jpg", desc: "A cross-border love story." },
        { id: 5, title: "Business Proposal", img: "business-proposal.jpg", desc: "A hilarious office romance." },
        { id: 6, title: "Hometown Cha-Cha-Cha", img: "hometown-cha.jpg", desc: "A heartwarming village romance." }
    ];

    const actionMovies = [
        { id: 7, title: "Salaar", img: "salaar.jpg", desc: "A high-octane action thriller.", videoId: "4GPvYMKtrtI" },
        { id: 8, title: "Pushpa2 The Rule", img: "pushpa2.jpg", desc: "A gripping sequel of a smuggler’s tale." },
        { id: 9, title: "KALKI 2898AD", img: "kalki.jpg", desc: "A futuristic mythological action epic." },
        { id: 10, title: "RRR", img: "rrr.jpg", desc: "An intense historical drama about revolutionaries." ,videoId: "sGjvj5eYXuA"},
        { id: 11, title: "HANUMAN", img: "hanuman.jpg", desc: "A superhero action story inspired by mythology.",videoId: "sGjvj5eYXuA" },
        { id: 12, title: "VIJETHA", img: "rugal.jpg", desc: "A cyber-enhanced cop takes on a criminal syndicate.",videoId: "opgOlu5AiTg" }
    ];

    const sciFiMovies = [
        { id: 14, title: "Interstellar", img: "interstellar.jpg", desc: "A journey beyond the stars." },
        { id: 15, title: "Inception", img: "inception.jpg", desc: "A mind-bending dream heist." },
        { id: 16, title: "The Matrix", img: "matrix.jpg", desc: "A hacker discovers the truth of reality." },
        { id: 17, title: "Blade Runner 2049", img: "blade-runner.jpg", desc: "A neo-noir sci-fi masterpiece." },
        { id: 18, title: "Tenet", img: "tenet.jpg", desc: "A time-inverting espionage thriller." },
        { id: 19, title: "Dune", img: "dune.jpg", desc: "A battle for control of a desert planet." }
    ];

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <img src={logo} alt="Logo" className="logo-img" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">TV Series</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a onClick={() => navigate("/Urvideos")}>ur videos</a></li> {/* Navigate on click */}
                    </ul>
                </nav>
                <div className="user-icon">😊</div>
            </header>

            {/* Main Content */}
            <div className="categories">
                {/* Romantic K-Dramas */}
                <section>
                    <h2>DRAMA BETRAYAL ADVENTURE</h2>
                    <div className="carousel">
                        {romanticMovies.map((movie) => (
                            <div 
                                key={movie.id} 
                                className="movie-card"
                                onMouseEnter={() => setHoveredMovie(movie.id)}
                                onMouseLeave={() => setHoveredMovie(null)}
                            >
                                <img src={movie.img} alt={movie.title} />
                                {hoveredMovie === movie.id && (
                                    <div className="movie-popup">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.desc}</p>
                                        <button>▶ Play</button>
                                        <button>+ Add to List</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Action Drama */}
                <section>
                    <h2>Action Drama</h2>
                    <div className="carousel">
                        {actionMovies.map((movie) => (
                            <div 
                                key={movie.id} 
                                className="movie-card"
                                onMouseEnter={() => setHoveredMovie(movie.id)}
                                onMouseLeave={() => setHoveredMovie(null)}
                            >
                                <img src={movie.img} alt={movie.title} />
                                {hoveredMovie === movie.id && (
                                    <div className="movie-popup">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.desc}</p>

                                        {/* Open Full-Screen YouTube Video on Play */}
                                        <button onClick={() => setPlayingMovie(movie.videoId)}>
                                            ▶ Play
                                        </button>

                                        <button>+ Add to List</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sci-Fi & Thriller */}
                <section>
                    <h2>Sci-Fi & Thriller</h2>
                    <div className="carousel">
                        {sciFiMovies.map((movie) => (
                            <div 
                                key={movie.id} 
                                className="movie-card"
                                onMouseEnter={() => setHoveredMovie(movie.id)}
                                onMouseLeave={() => setHoveredMovie(null)}
                            >
                                <img src={movie.img} alt={movie.title} />
                                {hoveredMovie === movie.id && (
                                    <div className="movie-popup">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.desc}</p>
                                        <button>▶ Play</button>
                                        <button>+ Add to List</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Full-Screen Video Modal */}
            {playingMovie && (
                <div className="fullscreen-video">
                    <div className="close-btn" onClick={() => setPlayingMovie(null)}>✖</div>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${playingMovie}?autoplay=1&fs=1`}
                        title="Full-Screen Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
