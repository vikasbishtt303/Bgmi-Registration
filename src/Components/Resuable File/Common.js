import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="=row d-flex justify-content-around">
                                <div className="co-md-6 pt-5 pt-lg-0 order-2  order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}
                                        <strong className="brand-name"> GAming Zone </strong></h1>
                                    <h2 className="my-3">
                                        We Have the Best Team In BGMI <strong> Country- INDIA </strong>
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-success">{props.btname}</NavLink>
                                    </div>

                                </div>
                                <br />

                                <div className="col-md-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="HOME LOGO" className="img-fluid animated" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>

    );
};

export default Common;
