import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src={props.avatarUrl} />
      <div
        style={{
          display: "inline-block",
          marginLeft: "10px",
          verticalAlign: "top"
        }}
      >
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div> {props.company}</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return <div>{props.list.map(card => <Card {...card} />)}</div>;
};

class Form extends React.Component {
  state = { userInput: "" };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("sumpited : ", this.state.userInput);
    //AJAX  fetch ..
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            value={this.state.userInput}
            onChange={event => this.setState({ userInput: event.target.value })}
            type="text"
            placeholder="Search Github User"
            required
          />
          <button type="submit"> Add User </button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    data: [
      {
        name: "Aminjoni Abdullozoda",
        avatarUrl:
          "https://avatars3.githubusercontent.com/u/30694948?s=460&v=4",
        company: "Google Inc"
      },
      {
        name: "Milod Orif",
        avatarUrl:
          "https://avatars1.githubusercontent.com/u/25881325?s=460&v=4",
        company: "Pornhub.com"
      }
    ]
  };

  render() {
    return (
      <div>
        <Form />
        <CardList list={this.state.data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
