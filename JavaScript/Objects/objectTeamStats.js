/*
Team Stats
We want to create and extract information about your favorite sports team.
Basketball, soccer, tennis, or water polo, you pick it.
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them.
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/
const team = {
  _players: [
    {firstName: 'Stephan', lastName: 'Diggs', age: 24},
    {firstName: 'Kirk', lastName: 'Cousins', age: 29},
    {firstName: 'Mike', lastName: 'Boone', age: 22}
  ],
  _games: [
    {opponent: 'Bears', teamPoints: 10, opponentPoints: 38},
    {opponent: 'Texans', teamPoints: 31, opponentPoints: 13},
    {opponent: 'Titans', teamPoints: 25, opponentPoints: 16},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
 	addGame(opponent, teamPoints, opponentPoints) {
  let game = {
  	opponent: opponent,
  	teamPoints: teamPoints,
  	opponentPoints: opponentPoints,
	};
  this.games.push(game);  
}
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Packers', 17, 14);
team.addGame('Giants', 24, 10);
team.addGame('Eagles', 10, 21);

console.log(team.players);
console.log(team.games);
