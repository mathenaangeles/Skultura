import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';

export default function LandingPage(){

    return(
        <div className = "Landing Page">
            <Carousel>
              <Carousel.Item>
                <div class="img-overlay"></div>
                <img
                  className="d-block w-100"
                  src="https://www.jacobimages.com/home/wp-content/uploads/2011/08/Isabela_1147_5981.jpg"
                  fluid
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
                  src="https://www.savethechildren.org.ph/__resources/userfiles/image/program-stories/watch_language_is_our_only_difference/02.jpg"
                  fluid
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
                  src="https://www.jacobimages.com/home/wp-content/uploads/2011/08/Isabela_7695_14891.jpg"
                  fluid
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
