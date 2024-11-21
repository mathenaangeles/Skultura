import React from 'react';
import { Carousel } from 'react-bootstrap';

import carousel_one from'./assets/carousel_one.jpg';
import carousel_two from'./assets/carousel_two.jpg';
import carousel_three from'./assets/carousel_three.jpg';

export default function LandingPage(){

    return(
        <div className = "Landing Page">
            <Carousel>
              <Carousel.Item>
                <div class="img-overlay"></div>
                <img
                  className="d-block w-100"
                  src={carousel_one}
                  fluid
                  alt="carousel-one"
                />
                <Carousel.Caption>
                  <h1>Social Network</h1>
                  <p>Registered schools are able to <b>connect</b> and <b>engage</b> with one another in the spirit of <b>collaborative learning</b>.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div class="img-overlay"></div>
                <img
                  className="d-block w-100"
                  src={carousel_two}
                  fluid
                  alt="carousel-two"
                />

                <Carousel.Caption>
                  <h1>Channels</h1>
                  <p>Channels are virtual spaces created to facilitate <b>open</b> and <b>cross-cultural public discourse</b> between students.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div class="img-overlay"></div>
                <img
                  className="d-block w-100"
                  src={carousel_three}
                  fluid
                  alt="carousel-three"
                />
                <Carousel.Caption>
                  <h1>Moderators</h1>
                  <p>Instructors <b> monitor </b> chat rooms and <b> manage </b> the contents therein.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
    
}
