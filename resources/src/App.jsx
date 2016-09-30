// TODO: plan out the rest of the site
// TODO: give credit to original designer somewhere.
// TODO: 'upgrading UI' spinner before client display work page
// TODO: add favicon
// TODO: add form validation
// TODO: incorporate google analytics to track site hits.
// TODO: setup http secure protocol (HTTPS)


// Components
import React, {Component} from 'react';


// Stylesheets
require('../assets/scss/app.scss');

// React Render
class App extends Component {
  render(){
    return (
    <section className="main-body">
      {this.props.children}
    </section>
    )
  }
}

export default App


/* ----------------------------------------------------------------------------
                          WEPBACK SERVE ASSETS LOCALLY

  - Run this command in terminal to hotload assets via react-hot-loader instead of
  just webpack-dev-server.

  npm start

-------------------------------------------------------------------------------- */