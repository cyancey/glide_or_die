function renderGameDetailsReactView(eventsModel) {
  var GameDetails = React.createClass({
    render: function() {
      return (
        <div id="games-container">
          <div className="game-section">
            <h2 className="game-section-header">Next Game</h2>
            <div className="game-section-list">
              <GameList gameData={this.props.gameData.nextEvent} />
            </div>
          </div>

          <div className="game-section">
            <h2 className="game-section-header">Future Games</h2>
            <div className="game-section-list">
              <GameList gameData={this.props.gameData.futureEvents} />
            </div>
          </div>

          <div className="game-section">
            <h2 className="game-section-header">Past Games</h2>
            <div className="game-section-list">
              <GameList gameData={this.props.gameData.pastEvents} />
            </div>
          </div>
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
        // debugger
        gameNodes = this.props.gameData.map(function(game) {
          return (
            <Game key={game.googleEventId} gameDetails={game} />
          )
        })
      } else {
        if (this.props.gameData) gameNodes = <Game gameDetails={this.props.gameData} />
      }

      return (
        <div id='game-list'>
          {gameNodes && (!Array.isArray(gameNodes) || gameNodes.length > 0) ?
            gameNodes : <div className="game-detail">No games</div>}
        </div>
      )
    }
  })


  ReactDOM.render(
    <GameDetails gameData={eventsModel.classifiedEvents} />,
    document.getElementById('game-details')
  );
}
