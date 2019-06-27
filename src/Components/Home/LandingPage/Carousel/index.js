import React, { Component } from 'react';
import Slider from 'react-slick';


// import slide_two from '../../../../Resources/images/front1.jpg';
// import slide_three from '../../../../Resources/images/front2.jpg';
import slide_one from "../../../../Resources/mockup.jpg";

class Carousel extends Component {
    render(){
        console.log('settu', settings)
        return (
            <div
                className="carrousel_wrapper"
                style={{
                    //height: `calc(${window.innerHeight}px + 150px)`,
                    height: 'calc(75vh)',
                    overflow: 'hidden'
                }}
            >
                <Slider
                    {...settings}
                >
                    <div>
                        <div className="carrousel_image"
                            style={{
                                background: `url(${slide_one})`,
                                height: `calc(75vh)`,
                                backgroundPosition: 'left center',
                                paddingTop: '50px',
                            }}
                        >
                        </div>
                    </div>
                    {/* <div>
                        <div className="carrousel_image"
                            style={{
                                background: `url(${slide_three})`,
                                height: `calc(75vh)`,
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                    </div>

                    <div>
                        <div
                            className="carrousel_image"
                            style={{
                                background: `url(${slide_two})`,
                                height: `calc(75vh)`,
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>
                    </div> */}
                </Slider>
            </div>
        )
    }
}

const settings = {
    dots: false,
    infinite:false,
    autoplay:true,
    speed:500
}

export default Carousel;