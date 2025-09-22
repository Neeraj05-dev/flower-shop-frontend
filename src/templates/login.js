import React from "react";

function Login(){
    return(
        <>
            <div className="container w-25 border border-light-subtle p-5 rounded" style={{marginTop: "200px"}}>
                <h5 className="h4 text-center mb-4">Sign-In To FlowerShoopy</h5>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i class="bi bi-person-fill"></i></span>
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-danger w-100">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;