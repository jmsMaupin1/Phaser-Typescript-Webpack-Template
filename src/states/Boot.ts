/*
	Our Boot class is where we define global settings for the game. 
	It’s also were we preload the graphics that will be used by the 
	actual Preloader, in this case a simple loading bar image
*/

import '../../assets/loader.png';

export default class Boot extends Phaser.State {
	preload() {
		this.load.image('preloadBar', "../../assets/loader.png")
	}

	create() {
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start('Preloader', true, false);
	}
}