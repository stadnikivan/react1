import React from 'react';
// import logo from './logo.svg';
import './App.css';


class Counter extends React.Component{
        constructor(){
            super();
            this.state ={
                counter: 0,
                }
        }

        onClickUp = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1,
                    }
            })
         };

        onClickDown = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1,
                    }
            })
        };



var App = React.createClass({
            render: function() {
                return (
                    <div className="main">
                        <div className="nav">
                            <h1 className="H"style={{fontSize: "30px", textAlign: "center"}}>John Doe</h1>
                        </div>

                        <div className="center" style={{marginTop: "50px", marginBottom: "50px"}}>
                            <h1 className="H-center">John Doe profile</h1>
                            <img className="main-image" src={"252.png"} />
                            <div className="main-butt">
                                <div className="followers">
                                    <p className="count">счетчик</p>
                                    <p>Followers</p>
                                    <button onClick={this.onClickUp}className="butt">+</button>
                                    <button onClick={this.onClickDown}className="butt">-</button>
                                </div>
                                <div className="following">
                                    <p className="count">счетчик</p>
                                    <p>Following</p>
                                    <button onClick={this.onClickUp}className="butt">+</button>
                                    <button onClick={this.onClickDown}className="butt">-</button>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                                <div className="foot-block">
                                    <h1 className="r">365 Freebies.007/365</h1>
                                </div>
                                <div className="foot-block">
                                    <img className="footer-image" src={"310.png"} />
                                </div>
                                <div className="foot-block">
                                    <h1 className="l">@anakareant</h1>
                                </div>
                        </div>
                    </div>
                );
            }
        });



// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <img src={310} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
//     </div>
//   );
// }

export default App;
