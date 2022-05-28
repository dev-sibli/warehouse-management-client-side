import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mb-5">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/4wyLgdc/monitor-1.jpg" alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    );
};

export default Banner;