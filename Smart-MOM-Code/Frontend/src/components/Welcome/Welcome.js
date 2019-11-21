import React, { Component } from 'react';
import './Welcome.css';
import { Redirect } from 'react-router';

import './lib/bootstrap/css/bootstrap.min.css';
import './lib/font-awesome/css/font-awesome.min.css';
import './css/style.css';
import CountUp from 'react-countup';

class Welcome extends Component {


    reDirect = ''
    constructor() {

        super();

        this.state = {
            searchBox: "",
            reDirect: ""
        }

    }



    valueChangedHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    scriptLoaded() {
        window.A.sort();
      }

    componentDidMount = ()=> {
        // let script = document.createElement("script");

        // script.src = require('./lib/jquery/jquery.min.js');
        // script.async = true;
    
        // document.body.appendChild(script);

        //  script.src = require('./lib/jquery/jquery-migrate.min.js');
        // script.async = true;
    
        // document.body.appendChild(script);
        // let script = document.createElement("script");
        // script.src = require('./lib/lockfixed/lockfixed.min.js');
        // script.async = true;
    
        // document.body.appendChild(script);
        // let script = document.createElement("script");
        // script.src = './lib/counterup/counterup.min.js';
        // script.async = true;
        // document.body.appendChild(script);
        // let script = document.createElement("script");
    
       
        //  script = document.createElement("script");
    
        // script.src = './lib/jquery/jquery-migrate.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        //  script = document.createElement("script");
    
        // script.src = './lib/superfish/hoverIntent.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        //  script = document.createElement("script");
    
        // script.src = './lib/superfish/superfish.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        //  script = document.createElement("script");
    
        // script.src = './lib/tether/js/tether.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        //  script = document.createElement("script");
    
        // script.src = './lib/stellar/stellar.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        // script.src = './lib/bootstrap/js/bootstrap.bundle.min.js';
        // script.async = true;
    
       
    
        // document.body.appendChild(script);
        // script.src = './lib/waypoints/waypoints.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        // script.src = './lib/easing/easing.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        // script.src = './lib/stickyjs/sticky.js';
        // script.async = true;
    
        // document.body.appendChild(script);
       
        // script.src = './lib/parallax/parallax.js';
        // script.async = true;
    
        // document.body.appendChild(script);
        // script.src = './lib/lockfixed/lockfixed.min.js';
        // script.async = true;
    
        // document.body.appendChild(script);
    }

    search = () => {
        let reDirect = <Redirect to={{
            pathname: '/customer/search',
            state: {
                searchBox: this.state.searchBox
            }
        }}
        />

        this.setState({
            reDirect: reDirect
        })


    }



    render() {

        return (<div>

 {/* Headers */}
 <header id="header" class="fixed-top ">
    <div class="container">

      <div id="logo" class="pull-left">
        <a href="index.html"><img src="img/logo-nav.png" alt="" title="" /></a>
      
        {/* <h1><a href="#hero">SMART MOM</a></h1> */}
      </div>

      <nav id="nav-menu-container " class="fixed-top ">
        <ul class="nav-menu navbar-fixed-top">
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="/login"><i class="fa fa-sign-in"></i></a></li>
        </ul>
      </nav>
     
      <nav class="nav social-nav pull-right d-none d-lg-inline">
        <a href="/login"><i class="fa fa-sign-in"></i></a>
      </nav>
    </div>
  </header>


     <section class="hero">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <a class="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src={require('./img/logo.png')}/></a>
        </div>
      </div>

      <div class="col-md-12">
        <h1>
            Smart MOM
          </h1>

        <p class="tagline">
          This is a powerful tool that can summarize all your meetings and auto assign tasks to the participants.
        </p>
        <a class="btn btn-full" href="#about">Get Started Now</a>
      </div>
    </div>

  </section>
 
{/* About Section */}
  <section class="about" id="about">
    <div class="container text-center">
      <h2>
          About Smart MOM
        </h2>

      <p>
      This model will record the meetings either through a recorder or as an Alexa Skill and convert the audio to text. 
      The meeting conversation will be classified into a proper conversation. 
      This conversation will be passed through various NLP algorithms to create a summary and generate minutes of meeting automatically. 
      These minutes of meeting will be send over to all stakeholders especially the ones who couldn't attend the meeting.
      </p>

      <div class="row stats-row">
        <div class="stats-col text-center col-md-3 col-sm-6">
          <div class="circle">
            <span class="stats-no" data-toggle="counter-up"><CountUp end={210}/></span> Customers
          </div>
        </div>

        <div class="stats-col text-center col-md-3 col-sm-6">
          <div class="circle">
            <span class="stats-no" data-toggle="counter-up"><CountUp end={430}/></span> Released Projects
          </div>
        </div>

        <div class="stats-col text-center col-md-3 col-sm-6">
          <div class="circle">
            <span class="stats-no" data-toggle="counter-up"><CountUp end={50}/></span> Minutes of Meeting Recorded          </div>
        </div>

        <div class="stats-col text-center col-md-3 col-sm-6">
          <div class="circle">
            <span class="stats-no" data-toggle="counter-up"><CountUp end={169}/></span> Hard Workers
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Features */}

<section class="features" id="features">
    <div class="container">
      <h2 class="text-center">
          Features
        </h2>

      <div class="row">
        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-rocket"></span>
              </div>
            </div>

            <div>
              <h3>
                  Custom Design
                </h3>

              <p>
               Content to be added
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-envelope"></span>
              </div>
            </div>

            <div>
              <h3>
                  Responsive Layout
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-bell"></span>
              </div>
            </div>

            <div>
              <h3>
                  Innovative Ideas
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-database"></span>
              </div>
            </div>

            <div>
              <h3>
                  Good Documentation
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-cutlery"></span>
              </div>
            </div>

            <div>
              <h3>
                  Excellent Features
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>

        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-dashboard"></span>
              </div>
            </div>

            <div>
              <h3>
                  Retina Ready
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Buy this Product */}
<section class="cta">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-sm-12 text-lg-left text-center">
          <h2>
             Buy
            </h2>

          <p>
            Loved this product!. Buy Now:)
          </p>
        </div>

        <div class="col-lg-3 col-sm-12 text-lg-right text-center">
          <a class="btn btn-ghost" href="#">Buy This Product</a>
        </div>
      </div>
    </div>
  </section>
{/* Team  */}
<section class="team" id="team">
    <div class="container">
      <h2 class="text-center">
          Meet our team
        </h2>

      <div class="row">
        <div class="col-sm-3 col-xs-6">
          <div class="card card-block">
            <a href="#"><img alt="" class="team-img" src={require('./img/team-1.jpg')}/>
              <div class="card-title-wrap">
                <span class="card-title">Sergio Fez</span> <span class="card-text">Art Director</span>
              </div>

              <div class="team-over">
                <h4 class="hidden-md-down">
                  Connect with me
                </h4>

                <nav class="social-nav">
                  <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
            </nav>

            <p>
              Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
            </p>
          </div>
          </a>
        </div>
      </div>

      <div class="col-sm-3 col-xs-6">
        <div class="card card-block">
          <a href="#"><img alt="" class="team-img" src={require('./img/team-2.jpg')}/>
              <div class="card-title-wrap">
                <span class="card-title">Sergio Fez</span> <span class="card-text">Art Director</span>
              </div>

              <div class="team-over">
                <h4 class="hidden-md-down">
                  Connect with me
                </h4>

                <nav class="social-nav">
                  <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
          </nav>

          <p>
            Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
          </p>
        </div>
        </a>
      </div>
    </div>

    <div class="col-sm-3 col-xs-6">
      <div class="card card-block">
        <a href="#"><img alt="" class="team-img" src={require('./img/team-3.jpg')}/>
              <div class="card-title-wrap">
                <span class="card-title">Sergio Fez</span> <span class="card-text">Art Director</span>
              </div>

              <div class="team-over">
                <h4 class="hidden-md-down">
                  Connect with me
                </h4>

                <nav class="social-nav">
                  <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
        </nav>

        <p>
          Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
        </p>
      </div>
      </a>
    </div>
    </div>

    <div class="col-sm-3 col-xs-6">
      <div class="card card-block">
        <a href="#"><img alt="" class="team-img" src={require('./img/team-4.jpg')}/>
              <div class="card-title-wrap">
                <span class="card-title">Sergio Fez</span> <span class="card-text">Art Director</span>
              </div>

              <div class="team-over">
                <h4 class="hidden-md-down">
                  Connect with me
                </h4>

                <nav class="social-nav">
                  <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
        </nav>

        <p>
          Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
        </p>
      </div>
      </a>
    </div>
    </div>
    </div>
    </div>
  </section>
        </div>)


    }




}

export default Welcome;

