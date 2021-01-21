import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <div className="vn_icon" style={{
                                        background:`url(${icon_calendar})`
                                    }}></div>
                                    <div className="vn_title">
                                        Date & Time
                                    </div>
                                    <div className="vn_desc">
<<<<<<< HEAD
                                        Mon - Fri: 1500 - 2100
=======
                                        29 January 2021 @21.00 pm
>>>>>>> f362346b1dc9a2fcdb29aea87160ba9f44b2f64e
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <div className="vn_icon" style={{
                                        background:`url(${icon_location})`
                                    }}></div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
<<<<<<< HEAD
                                        Your place!
=======
                                        524 W 59th St, New York, NY 10019
>>>>>>> f362346b1dc9a2fcdb29aea87160ba9f44b2f64e
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VunueNfo;