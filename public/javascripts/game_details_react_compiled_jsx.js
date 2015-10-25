"use strict";

function renderGameDetailsReactView(eventsModel) {
  // debugger
  var GameDetails = React.createClass({
    displayName: "GameDetails",

    render: function render() {
      return React.createElement(
        "div",
        { id: "games-container" },
        React.createElement(
          "h1",
          null,
          "Games"
        ),
        React.createElement(GameList, { gameData: this.props.gameData })
      );
    }
  });

  var Game = React.createClass({
    displayName: "Game",

    render: function render() {
      return React.createElement(
        "div",
        { className: "game-detail" },
        React.createElement(
          "h1",
          null,
          this.props.gameDetails.name
        ),
        React.createElement(
          "p",
          null,
          this.props.gameDetails.startDateTime.toString()
        ),
        React.createElement(
          "p",
          null,
          this.props.gameDetails.timeContext
        )
      );
    }
  });

  var GameList = React.createClass({
    displayName: "GameList",

    render: function render() {
      var gameNodes = this.props.gameData.map(function (game) {
        return React.createElement(Game, { gameDetails: game });
      });

      return React.createElement(
        "div",
        { id: "game-list" },
        gameNodes
      );
    }
  });

  ReactDOM.render(React.createElement(GameDetails, { gameData: eventsModel.events }), document.getElementById('game-details'));
}
