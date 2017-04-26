import Player from '../gameObjects/Player';

export default class InitialGameState extends Phaser.State {
	player: Player;
	map: Phaser.Tilemap;
	layer: Phaser.TilemapLayer;
	create() {
		this.player = new Player(this.game, 130, 284);
		this.map = this.add.tilemap('tilemap');

		this.map.addTilesetImage('tinytileset', 'basictiles');

		this.layer = this.map.createLayer('tilemap');
		this.layer.resizeWorld();
	}
}