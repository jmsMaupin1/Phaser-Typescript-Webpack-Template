import Player from '../gameObjects/Player';

export default class InitialGameState extends Phaser.State {
	player: Player;

	create() {
		this.player = new Player(this.game, 130, 284);
	}
}