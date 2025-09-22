import React from "react";

function About(){
    return(
        <>
            <div className="container w-100">
                <div>
                    <h5 className="h2 text-center mt-3">About Us - FlowerShoopy</h5>

                    <div className="mt-5">
                        <h5 className="h5">Who We Are</h5>
                        <p className="lead">At FlowerShoopy, we bring the beauty of fresh flowers right to your doorstep. From vibrant bouquets to elegant arrangements, we help you express emotions and celebrate every special moment with the perfect blooms.</p>
                    </div>

                    <div>
                        <h5 className="h5">Our Mission</h5>
                        <p className="lead">
                            Our mission is to make gifting and decorating with flowers effortless and joyful. We combine quality, freshness, and creativity to deliver smiles with every delivery.
                        </p>
                    </div>

                    <div>
                        <h5 className="h5">Why Choose FlowerShoopy</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Fresh & Quality Flowers </b>: Hand-picked and carefully arranged.</li>
                            <li className="list-group-item"><b>Wide Selection </b>: Bouquets, plants, and floral gifts for all occasions. </li>
                            <li className="list-group-item"><b>Fast Delivery </b>: Timely delivery to make your moments special.</li>
                            <li className="list-group-item"><b>Personalized Touch </b>: Customize bouquets to add a personal message.</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="h5 mt-4">Our Vision</h5>
                        <p className="lead">We aim to spread happiness through flowers, making every celebration, surprise, or gesture unforgettable.</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default About;