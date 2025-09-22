import react from "react";
import './home.css';
import { Button } from "bootstrap";

function Home(){
    return(
        <>
            <div className="container w-100 mt-5">
                <div className="container">
                    <div className="mb-3 input-group">
                        <input type="search" className="form-control" placeholder="Search a flower..."/>
                        <button className="btn btn-danger">Search</button> 
                    </div>
                </div>
                <h5 className="h2 text-center mb-3">All Flowers</h5>
                <div className="container d-flex flex-wrap justify-content-between">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/one.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/two.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/three.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/four.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/five.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/six.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/seven.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/eight.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/nine.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/ten.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <p className="card-text">Price = $120</p>
                            <button className="btn btn-danger">Add To Cart</button>
                            <button className="btn btn-danger" style={{marginLeft: "6px"}}>Buy</button>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Home;