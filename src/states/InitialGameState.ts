import Player from '../gameObjects/Player';

export default class InitialGameState extends Phaser.State {
	player: Player;
	map: Phaser.Tilemap;
	layer: Phaser.TilemapLayer;
	create() {
		this.player = new Player(this.game, 130, 284);
		//this is the preloaded map key
		this.map = this.add.tilemap('tdfmap');

		this.map.addTilesetImage('wood_tileset', 'wood_tileset');

		//this is the name in the layers array object that contains the map
		this.layer = this.map.createLayer('tdflevel1');
		this.layer.resizeWorld();
	}
}