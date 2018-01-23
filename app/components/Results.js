const React = require('react');

class Results extends React.Component {
  render() {
    console.log(this.props.location.search);
    return (
      <div>Results</div>
    )
  }
}

module.exports = Results;
