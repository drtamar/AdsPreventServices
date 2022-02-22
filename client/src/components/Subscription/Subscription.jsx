import React from 'react'

const Subscription = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-4 mt-3">
                        <div className="secondsubs">
                            <div className="text-center">
                                <h2>7 days Free</h2>
                                <p>Protect 1 Platform</p>
                                <p>Goolge Ads or Facebook Ads</p>
                                <span>$</span><span id='amount'>0.0</span> <span>first 7 day</span>
                                <br /> <button className='btn_subscription'>Switch</button>
                                <hr />
                                <p>Up to 5000 clicks</p>
                            </div>

                            <div className='firstsubs-data'>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> ClickCease AI detection algorithm</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Account overview</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">

                        <div className="firstsubs text-center">
                            <div className="text-center">
                                <h2>Standard</h2>
                                <p>Protect 1 Platform</p>
                                <p>Goolge Ads or Facebook Ads</p>
                                <span>$</span><span id='amount'>49</span> <span>/m</span>
                                <br /> <button className='btn_subscription'>Switch</button>
                                <hr />
                                <p>Up to 5,000 clicks</p>
                            </div>
                            <div className='firstsubs-data'>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> ClickCease AI detection algorithm</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Account overview</p>
                                <p className='text-dest'><i class="fa fa-times" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="secondsubs">
                            <div className="text-center">
                                <h2>Pro</h2>
                                <p>Protect 2 Platform</p>
                                <p>Goolge Ads or Facebook Ads</p>
                                <span>$</span><span id='amount'>59</span> <span>/m</span>
                                <br /> <button className='btn_subscription'>Switch</button>
                                <hr />
                                <p>Up to 10,000 clicks</p>
                            </div>

                            <div className='firstsubs-data'>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Protection for multiple domains</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> ClickCease AI detection algorithm</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Cross-domain blocking</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Session recordings and analysis</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Adspy - competitor ad intel</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Account overview</p>
                                <p><i class="fa fa-check" aria-hidden="true"></i> Dedicated account manager</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Subscription;