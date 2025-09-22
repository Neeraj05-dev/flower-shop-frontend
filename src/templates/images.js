import React from "react";

function Images(){
    return(
        <>
            <div className="container w-100 mt-5">
                <h5 className="h2 text-center mb-3">All Flowers</h5>
                <div className="container d-flex flex-wrap justify-content-between">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/one.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/one.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/two.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/two.avif" download={true}>Download</a>
                        </div>
                    </div>

                   <div className="card" style={{width: "18rem"}}>
                        <img src="/img/three.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/three.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/four.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/four.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/five.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/five.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/six.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/six.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/seven.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/seven.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/eight.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/eight.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/nine.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/nine.avif" download={true}>Download</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img src="/img/ten.avif" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Flower</h5>
                            <a className="btn btn-danger mt-3 w-100" href="/img/ten.avif" download={true}>Download</a>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Images;