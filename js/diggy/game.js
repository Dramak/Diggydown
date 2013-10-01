/**
 * Created by hudsonw on 01/10/13.
 */
Game = {
    //Grid Settings
    map_grid: {
        width: 24,
        height: 20,
        tile: {
            width: 16,
            height: 16
        }
    },

    start: function () {
        // Start crafty and set a background color
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(82, 82, 82)');


        //Generate basic scene with Sky blocks in the top 3 tiles and rock everywhere else
        for (var x = 0; x < Game.map_grid.width; x++) {
            for (var y = 0; y < Game.map_grid.height; y++) {
                if (y < 4) {
                    Crafty.e('Sky').at(x, y);
                } else {
                    Crafty.e('Rock').at(x, y);
                }
            }
        }
        Crafty.e('PlayerCharacter').at(5, 3);
    },

    // The total width of the game screen.
    width: function () {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    // The total height of the game screen.
    height: function () {
        return this.map_grid.height * this.map_grid.tile.height;
    }
}