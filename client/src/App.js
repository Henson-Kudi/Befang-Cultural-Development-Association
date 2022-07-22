import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./becuda-logo.png";
import {FaAlignJustify, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProjects from "./components/AllProjects";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Footer from "./components/footer";
import SingleProject from "./components/SingleProject";
import Icon from "./components/Icon";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import BefangYouthsInitiative from "./components/BefangYouthsInitiative";
import CommingSoon from "./components/CommingSoon";
import ContributePage from "./components/ContributePage";
import ContributeDetails from "./components/ContributeDetails";
import BeyoinMember from "./components/BeyoinMember";
import ListOfSupporters from "./components/ListOfWebSupporters";
import ListOfContributors from "./components/ListOfContributors";
 

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.clearHeight = this.clearHeight.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      height: 0,
      overFlow: "hidden",
       
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
   
   clearHeight (NavHeight){
    return (NavHeight === "auto" ? this.setState({height:"0", overFlow: "hidden"}) : this.setState({height:"0", overFlow: "hidden"}));
      }
   handleClickMenu(NavHeight) {
        const newHeight = NavHeight === '0'? this.setState({height:"auto", overFlow:""}) : this.setState({height:"0", overflow:"hidden"})
        return newHeight;
      }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, height, overFlow } = this.state;

    return (
      <>
 {/*top nav*/}
 <div className="top-nav">
             
               <div style={{width: "250px"}}>
                <img src= {logo} alt="logo" className="logo" style={{maxWidth: "100%"}} />
              </div> 
              <div className="top-nav-support">
                  You can support this website at: +237 676308067<br />
                  <Link to="/web-supporters" style={{color: "Var(--heroWhite)"}}>
                       See List Of Supporters
                  </Link>
              </div>
          
            <a href="/" style={{color: "var(--mainOrange)"}}><FaMapMarkerAlt style={{marginRight: "1rem"}} /><span>Cameroon, North West Region, Menchum Division.</span></a>
          
           
        </div>
          {/*end top nav*/}
         <nav id="nav">
          <div className="nav-center">
            <div className="nav-header">
              <div className='mobile-logo-container'>
                 <div style={{width: "100px", height: "100%"}} className="logo-div">
                  <img src={logo} alt="logo" className="logo" style={{maxWidth: "100%"}}/>
                </div> 
                {/* <h2 style={{textTransform:"capitalize", fontSize:"1rem", textIndent:'0.5rem'}}>green engineering and consultancy ltd.</h2> */}
              </div>
              <div className="moble-support">
                  You can support this website at:<br /> +237 676308067<br />
                  <Link to="/web-supporters" style={{color: "Var(--heroWhite)"}}>
                       See List Of Supporters
                  </Link>
              </div>
              <div className="nav-toggle" onClick={() => {this.handleClickMenu(height)}}>
                < FaAlignJustify style={{color:"var(--mainOrange)"}}/>
              </div>
            </div>
            <div className="links-container" style={{ height: height, overflow: overFlow}}>
              <div className="links" >
              <Link to="/home" onClick={() => this.clearHeight(height)}>
               Home
              </Link>
              <div className="dropdown">
              <Link to="/">branches</Link>
              <div className="dropdown-content" style={{ height: height}}>
                     <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                        bemenda
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         buea
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         muea
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         Mutengene
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         Limbe
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         Douala
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         Yaounde
                      </Link>
                  </div>
                  
              </div>
              <Link to="/all-projects"  onClick={() => this.clearHeight(height)}>
              Projects
              </Link>
              <div className="dropdown">
              <Link to="/" style={{zIndex:"-1"}}>social groups</Link>
              <div className="dropdown-content" style={{ height: height}}>
                     <Link to="/social-groups/beyoin" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                        Befang Youths Initiative
                      </Link>
                      <Link to="/comming-soon" className="dropdown-link" onClick={() => this.clearHeight(height)}>
                         Befang Youths Association
                      </Link>
                  </div>
                  
              </div>
              <Link to="/comming-soon"  onClick={() => this.clearHeight(height)}>
               Constitution
              </Link>
              <Link to="/comming-soon"  onClick={() => this.clearHeight(height)}>
               News
              </Link>
              {showModeratorBoard && (
              
                <Link to={"/mod"}>
                  Moderator Board
                </Link>
            
            )}

              {showAdminBoard && (
               
                <Link to={"/admin"}>
                  Admin Board
                </Link>
               
            )}
            {showAdminBoard && (
               
               <Link to={"/users"}>
                 users
               </Link>
              
           )}

             {currentUser && (
               
                <Link to={"/user"}>
                  dashboard
                </Link>
              
            )}

{currentUser ? (
              
            <div style={{display: "flex", justifyContent: "spaceBetween", width: "10%"}}>
               
                <Link to={"/profile"}>
                  {currentUser.username}
                </Link>
               
               
                <a href="/"  onClick={this.logOut} className="ml-2">
                  LogOut
                </a>
               
            </div>
          ) : (
            <div style={{display: "flex", justifyContent: "spaceBetween", width: "10%"}}>
               
                <Link to={"/login"} className="nav-link" onClick={() => this.clearHeight(height)}>
                  Login
                </Link>
               

               
                <Link to={"/register"} className="ml-2" onClick={() => this.clearHeight(height)}>
                  SignUp
                </Link>
               
            </div>
          )}
                </div>
                   
              </div>
            </div>
        </nav>
            <div className='info-wrapper'>
              <p className='info'>
              Please do not SignUp on this website if you're not a Son/Daughter of Befang!
              </p>
            </div>

        <>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/all-projects" component={AllProjects} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route path="/icons/:iconId" component={Icon} />
            <Route path="/social-groups/beyoin" component={BefangYouthsInitiative} />
            <Route path="/contribute-page" component={ContributePage} />
            <Route path="/contributors" component={ListOfContributors} />
            <Route path="/branches/:branchId" component={ContributeDetails} />
            <Route path="/beyoin/:memberId" component={BeyoinMember} />
            <Route path="/web-supporters" component={ListOfSupporters} />
            <Route path="/comming-soon" component={CommingSoon} />
             
          </Switch>
          <Footer />
        </>

        { /*<AuthVerify logOut={this.logOut}/> */ }

      </>
    );
  }
}

export default App;
