function renderGameDetailsReactView(eventsModel) {
  // debugger
  var GameDetails = React.createClass({
    render: function() {
      return (
        <div id="games-container">
          <h1>Games</h1>
          <GameList gameData={this.props.gameData} />
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
      var gameNodes = this.props.gameData.map(function(game) {
        return (
          <Game gameDetails={game} />
        )
      })

      return (
        <div id='game-list'>
          {gameNodes}
        </div>
      )
    }
  })


  ReactDOM.render(
    <GameDetails gameData={eventsModel.events} />,
    document.getElementById('game-details')
  );
}
