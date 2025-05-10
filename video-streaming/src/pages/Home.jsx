import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import logo from "../assets/logoo.png";
import introVideo from "../assets/intro.mp4";

function Home({ language }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showIntro, setShowIntro] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        age: "",
    });

    // Language Content Map
    const content = {
        English: {
            title: "Unlimited movies, TV shows and more",
            subtitle: "Starts at ₹149. Cancel at any time.",
            description: "Ready to watch? Enter your email to create or restart your membership.",
            button: "Get Started",
        },
        Telugu: {
            title: "అపరిమిత సినిమాలు, టీవీ షోలు మరియు మరిన్ని",
            subtitle: "₹149 నుంచి ప్రారంభం. ఎప్పుడైనా రద్దు చేసుకోవచ్చు.",
            description: "తయారేనా? మీ సభ్యత్వాన్ని ప్రారంభించడానికి లేదా తిరిగి ప్రారంభించడానికి మీ ఇమెయిల్ ఇవ్వండి.",
            button: "ప్రారంభించండి",
        },
        Hindi: {
            title: "अनलिमिटेड मूवीज, टीवी शो और बहुत कुछ",
            subtitle: "₹149 से शुरू। किसी भी समय रद्द करें।",
            description: "देखने के लिए तैयार हैं? अपना ईमेल दर्ज करें और सदस्यता शुरू करें।",
            button: "शुरू करें",
        },
    };

    useEffect(() => {
        axios.get("http://localhost:8080/api/videos/all")
            .then(res => setVideos(res.data))
            .catch(err => console.log(err));

        setTimeout(() => {
            setLoading(false);
            setShowIntro(true);
        }, 3000);
    }, []);

    useEffect(() => {
        if (showIntro) {
            const video = document.querySelector(".intro-video");
            if (video) {
                video.load();
                video.play().catch(err => console.log("Autoplay blocked:", err));
            }
        }
    }, [showIntro]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Details:", formData);
        setShowPopup(false);
    };

    return (
        <>
            {loading ? (
                <div className="preloader">
                    <div className="loader-container">
                        <img src={logo} alt="Loading Logo" className="loading-logo" />
                        <div className="rotating-border"></div>
                    </div>
                </div>
            ) : showIntro ? (
                <div className="video-container">
                    <video 
                        autoPlay 
                        muted 
                        playsInline 
                        className="intro-video"
                        onEnded={() => setShowIntro(false)}
                    >
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={() => document.querySelector(".intro-video")?.play()}>
                    
                    </button>
                </div>
            ) : (
                <div className="home">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="hero-section">
                        <h1>{content[language].title}</h1>
                        <p>{content[language].subtitle}</p>
                        <p>{content[language].description}</p>

                        <div className="email-form">
                            <input type="email" placeholder="Email address" />
                            <button onClick={() => setShowPopup(true)}>{content[language].button}</button>
                        </div>
                    </div>
                </div>
            )}

            {showPopup && (
                <div className="popup" onClick={() => setShowPopup(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
