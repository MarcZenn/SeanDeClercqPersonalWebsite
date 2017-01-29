// Import react
import React, {Component} from 'react';

// Components
import Nav from '.././Partials/Nav.jsx';
import Footer from '.././Partials/Footer.jsx';
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Waypoint from 'react-waypoint';


class ProfessionalContributions extends Component {
  constructor(props) {
    // super simply allows us to call methods defined on any parent Components of this Component
    super(props);
    this.state = {
     entered: false
    };
  }

  componentDidMount(e) {
    setTimeout(function() {
      this.setWaypoint(true, 1);
    }.bind(this), 10);
  }

  setWaypoint(bool, int) {
    // Set waypoint state
    if (!bool) {
      this.setState({ entered: false});
    } else {
      this.setState({entered: true});
    }

    // Use updated state for UI waypoints animation.
    if(!this.state.entered) {
      document.getElementById('wp-dot-' + int).className = 'filled';
    } else {
      document.getElementById('wp-dot-' + int).className = 'empty';
    }
  }

  render(){
    return(
      <section>
        <Nav />
        <div className="professional-contributions-content">
          <Row className="work-item professional-contributions-header">
            <Col xs={11} className="text-left">
              <Waypoint
                onEnter={this.setWaypoint.bind(this, true, 1)}
                onLeave={this.setWaypoint.bind(this, false, 1)}
              />
              <h1>This page represents a collective body of work built during my employment as a full-time developer within an organization, startup or agency. Feel free to peruse the projects and contact me if you have any questions, concerns or skeptical inquiries.</h1>
            </Col>
            <Col xs={11}>
              <img src="/public/images/devicons.png"  />
            </Col>
          </Row>

          <Row className="work-item kickfurther">
            <Waypoint
              onEnter={this.setWaypoint.bind(this, true, 2)}
              onLeave={this.setWaypoint.bind(this, false, 2)}
            />
            <Col className="text-left" xs={12} md={6}>
              <h2>So It's Like Kickstarter?</h2>
              <p><a href="http://www.kickfurther.com">Hmm, yes and no...</a></p>
            </Col>
            <Col xs={11} md={6}>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i>
              <a href="http://www.kickfurther.com"><img src="/public/images/kf-example_image.png" /></a>
            </Col>
          </Row>


          <Row className="work-item cpb">
            <Waypoint
              onEnter={this.setWaypoint.bind(this, true, 3)}
              onLeave={this.setWaypoint.bind(this, false, 3)}
            />
            <Col className="text-left" xs={12} md={6}>
              <h2>Interning at Crispin Porter + Bogusky</h2>
              <p><a href="/">You WILL sleep over at the office at least once.</a></p>
            </Col>
            <Col xs={11} md={6}>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"><p>see project</p></i>
              <a href="http://www.foodle-it.com"><img src="/public/images/iphone6plus.png" /></a>
            </Col>
          </Row>




          <div className="scroll-tracker">
            <div className="filled" id="wp-dot-1"></div>
            <div className="empty" id="wp-dot-2"></div>
            <div className="empty" id="wp-dot-3"></div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}




ProfessionalContributions.propTypes = {
  // .....
}



export default ProfessionalContributions
