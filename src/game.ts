import Boot from './states/Boot.ts'
import Preloader from './states/PreLoader.ts'
import MainMenu from './states/MainMenu.ts'
import InitialGameState from './states/InitialGameState.ts'
class SimpleGame extends Phaser.Game{

    constructor() {
        super(800, 600, Phaser.AUTO, 'App', null);
        super(800, 600, Phaser.AUTO, 'App', null);
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('InitialGameState', InitialGameState, false);

        this.state.start('Boot');
    }

}

window.onload = () => {
    var game = new SimpleGame();
};