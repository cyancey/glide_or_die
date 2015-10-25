$(document).ready(function() {
  console.log('whaaaa')

  var GameDetails = React.createClass({
    render: function() {
      return (
        <div className="game-details">
          <h1>ok</h1>
        </div>
      );
    }
  })


  ReactDOM.render(
    <GameDetails />,
    document.getElementById('game-details')
  );

})
