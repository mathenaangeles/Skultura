import React, { Component } from "react";
import ChatScreen from "./ChatScreen";
import UserHome from "./UserHome";
import UserNavbar from "./components/UserNavbar";
import TeacherHome from "./components/TeacherHome";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import "./stylesheets/App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: "mathena828",
      currentScreen: "ChatScreen",
    };
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }
  onUsernameSubmitted(username) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        this.setState({
          currentUsername: "mathena828",
          currentScreen: "ChatScreen",
        });
      })
      .catch((error) => console.error("error", error));
  }
  render() {
    return (
      <Router>
        <UserNavbar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/teacher-home">
            <TeacherHome />
          </Route>
          <Route path="/home">
            <UserHome />
          </Route>
          <Route path="/chat">
            <ChatScreen currentUsername={this.state.currentUsername} />{" "}
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* render={routeProps => <ChatScreen {...routeProps} currentUsername={this.state.currentUsername}/>}   */}
        </Switch>
      </Router>
    );

    // if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
    //     return <UsernameForm onSubmit={this.onUsernameSubmitted} />

    //  }
    //  if (this.state.currentScreen === 'ChatScreen') {
    //       return <ChatScreen currentUsername={this.state.currentUsername} />  
    //  }

  }
}

export default App;
