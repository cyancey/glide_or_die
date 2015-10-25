function renderGameDetailsReactView(eventsModel) {
  // debugger
  var GameDetails = React.createClass({
    render: function() {
      return (
        <div id="games-container">
          <h2 className="game-section-header">Next Game</h2>
          <GameList gameData={this.props.gameData.nextEvent} />

          <h2 className="game-section-header">Future Games</h2>
          <GameList gameData={this.props.gameData.futureEvents} />

          <h2 className="game-section-header">Past Games</h2>
          <GameList gameData={this.props.gameData.pastEvents} />
        </div>
      );
    }
  })

  var Game = React.createClass({
    render: function() {
      return(
        <div className="game-detail">
          <h3>{this.props.gameDetails.name}</h3>
          <p>{this.props.gameDetails.formattedStartDate()}</p>
          <p>{this.props.gameDetails.location}</p>

        </div>
      )
    }
  })

  var GameList = React.createClass({
    render: function() {
      var gameNodes;

      if (Array.isArray(this.props.gameData)) {
        gameNodes = this.props.gameData.map(function(game) {
          return (
            <Game gameDetails={game} />
          )
        })
      } else {
        gameNodes = <Game gameDetails={this.props.gameData} />
      }

      return (
        <div id='game-list'>
          {gameNodes}
        </div>
      )
    }
  })


  ReactDOM.render(
    <GameDetails gameData={eventsModel.classifiedEvents} />,
    document.getElementById('game-details')
  );
}
