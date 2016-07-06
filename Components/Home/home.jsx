import React, {Component} from 'react'


class Homepage extends Component {
  render(){
    return (
      <section className="homepage">
        <div className="overlay"></div>
        <div className="scanline"></div>
        <div className="wrapper">
          <div className="content clearfix">
            <header className="site clearfix">
              <div className="col one">
                <img src="http://www.mackrichardson.com/images/logo-v.jpg" alt="591 Industries" width="740" height="729" id="logo-v" />
              </div>
              <div className="col two">
                <h4>591 Industries (tm) <br /> <b>H</b>euristically <b>E</b>ncrypted <b>R</b>eal-Time   <b>O</b>perating <b>S</b>ystem (HEROS)</h4>
                <p>----------------------------------------</p>
                <p>HEROS v 1.0.0</p>
                <p>(c)2015 591 Industries</p>
                <p>- Server 591 -</p>
              </div>
            </header>

            <nav className="site clear">
              <ul>
                <li><a href="#" title="">Return Home</a></li>
                <li><a href="#" title="">Our Clients</a></li>
                <li><a href="#" title="">Contact Us</a></li>
              </ul>
            </nav>

            <p>System Administrator Integrated Message System (SAIMS)</p>
            <p>System Administrator (SYSADM) - Mack Richardson</p>

            <p>Welcome to the System Administrator Integrated Message System (SAIMS). Fill out the fields below and press the SUBMIT button. The system administrator (SYSADM) will respond to your query after an appropriate amount of quiet contemplation. Thank you for contacting the System Administrator's Office.</p><br />

            <form>
              <label>Name >></label><input type="text" /><br />
              <label>Email >></label><input type="text" /><br />
              <label>Subject >></label><input type="text" /><br />
              <label>Message >></label><textarea id="text" rows="1"></textarea><br /><br /><br />
              <input type="submit" value="Submit" />
              <a class="button" alt="" href="index.html">Cancel</a>
            </form>
          </div>
        </div>
      </section>
    )
    // onReady(){
    //   document.getElementById('title').focus();
    //   document.getElementById('text').autosize();
    // }
  }
}

// Homepage.propTypes = {
//
// }


export default Homepage
