"use strict";

function renderGameDetailsReactView(eventsModel) {
  var GameDetails = React.createClass({
    displayName: "GameDetails",

    render: function render() {
      return React.createElement(
        "div",
        { id: "games-container" },
        React.createElement(
          "div",
          { className: "game-section" },
          React.createElement(
            "h2",
            { className: "game-section-header" },
            "Next Game"
          ),
          React.createElement(
            "div",
            { className: "game-section-list" },
            React.createElement(GameList, { gameData: this.props.gameData.nextEvent })
          )
        ),
        React.createElement(
          "div",
          { className: "game-section" },
          React.createElement(
            "h2",
            { className: "game-section-header" },
            "Future Games"
          ),
          React.createElement(
            "div",
            { className: "game-section-list" },
            React.createElement(GameList, { gameData: this.props.gameData.futureEvents })
          )
        ),
        React.createElement(
          "div",
          { className: "game-section" },
          React.createElement(
            "h2",
            { className: "game-section-header" },
            "Past Games"
          ),
          React.createElement(
            "div",
            { className: "game-section-list" },
            React.createElement(GameList, { gameData: this.props.gameData.pastEvents })
          )
        )
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
          "h3",
          null,
          this.props.gameDetails.name
        ),
        React.createElement(
          "p",
          null,
          this.props.gameDetails.formattedStartDate()
        ),
        React.createElement(
          "p",
          null,
          this.props.gameDetails.location
        )
      );
    }
  });

  var GameList = React.createClass({
    displayName: "GameList",

    render: function render() {
      var gameNodes;

      if (Array.isArray(this.props.gameData)) {
        // debugger
        gameNodes = this.props.gameData.map(function (game) {
          return React.createElement(Game, { key: game.googleEventId, gameDetails: game });
        });
      } else {
        if (this.props.gameData) gameNodes = React.createElement(Game, { gameDetails: this.props.gameData });
      }

      return React.createElement(
        "div",
        { id: "game-list" },
        gameNodes && (!Array.isArray(gameNodes) || gameNodes.length > 0) ? gameNodes : React.createElement(
          "div",
          { className: "game-detail" },
          "No games"
        )
      );
    }
  });

  ReactDOM.render(React.createElement(GameDetails, { gameData: eventsModel.classifiedEvents }), document.getElementById('game-details'));
}
