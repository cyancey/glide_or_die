'use strict';

$(document).ready(function () {
  console.log('whaaaa');

  var GameDetails = React.createClass({
    displayName: 'GameDetails',

    render: function render() {
      return React.createElement(
        'div',
        { className: 'game-details' },
        React.createElement(
          'h1',
          null,
          'ok'
        )
      );
    }
  });

  ReactDOM.render(React.createElement(GameDetails, null), document.getElementById('game-details'));
});
