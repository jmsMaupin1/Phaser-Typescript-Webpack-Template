import '../../assets/phaser-logo.jpg';
import '../../assets/simon.png';
export default class Preloader extends Phaser.State {
	preloadBar: Phaser.Sprite;

	preload() {
		this.preloadBar = this.add.sprite(200, 500, 'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);
		this.load.image('phaserlogo', '../../assets/phaser-logo.jpg');

		this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
	}

	create() {
		var tween = this.add.tween(this.preloadBar).to({
			alpha: 0
		}, 1000, Phaser.Easing.Linear.None, true);
		
		tween.onComplete.add(this.startMainMenu, this);
	}
 
	startMainMenu() {
		this.game.state.start('MainMenu', true, false);
	}
}