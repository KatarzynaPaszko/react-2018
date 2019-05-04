import React from "react";

class App extends React.Component {
  state = {
    imie: "",
    nazwisko: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { imie, nazwisko } = this.state;

    console.log("onSubmit", {
      imie,
      nazwisko
    });
  };

  // handleInputLastname = e => {
  //     this.setState({ nazwisko: e.currentTarget.value });
  // };

  // handleInputName = e => {
  //     this.setState({ imie: e.currentTarget.value });
  // };

  handleInput = name => e => {
    this.setState({ [name]: e.currentTarget.value });
  }

  render() {
    // const { imie, nazwisko } = this.state;

    return (
      <div>
        <h1>Hello</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="imie"
            value={this.state.imie}
            onChange={this.handleInput("imie")}
          />
          <input
            type="text"
            placeholder="nazwisko"
            onChange={this.handleInput("nazwisko")}
            value={this.state.nazwisko}
          />
          <input type="submit" value="Wyslij" />
        </form>
      </div>
    );
  }
}

export default App;
