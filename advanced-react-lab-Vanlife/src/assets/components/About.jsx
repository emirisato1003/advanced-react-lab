
export default function About() {
    return (
        <main>
            <div className="image-container">
                <img src="src/assets/header-img-about.png" alt="header image in about page" />
            </div>
            <div className="content-container">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <div className="content-text-first">
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)</p>
                </div>
                <div className="content-text-second">
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="cta-section">
                    <div className="cta-title">
                        <h2>Your destination is waiting. <br /> Your van is ready.</h2>
                    </div>
                    <div className="cta-btn">
                        <button>Explore our vans</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

// src\assets\header-img-about.png