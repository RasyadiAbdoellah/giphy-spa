import React from 'react';
import PropTypes from 'prop-types';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  changeHandler = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.search(this.state.value);
  };

  //Main Navigation should render a search bar and filter options.
  render() {
    return (
      <nav id={this.props.id}>
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.changeHandler} />
          <button type='submit'>Search</button>
        </form>
        <button>Random</button>
        <button onClick={() => this.props.trending()}>Trending</button>
      </nav>
    );
  }
}

MainNav.propTypes = {
  search: PropTypes.func.isRequired
};

export default MainNav;
