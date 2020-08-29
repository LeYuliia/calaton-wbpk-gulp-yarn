import React, { Component } from "react";
import "./SearchBar.scss";
import icon1 from '../../icons/optim/home.png';
import icon2 from "../../icons/optim/contacts.png";
import icon3 from "../../icons/optim/email.png";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: "joy",
    });
  };
  render() {
    return (
      <header className="header">
        <div>
        <img className="header__icon" src={icon1} />
        <img className="header__icon" src={icon2} />
          <img className="header__icon" src={icon3} />
          </div>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm__button">
            <span className="searchForm__button-label">Search</span>
          </button>

          <input
            className="searchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
