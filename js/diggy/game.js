/**
 * Created by hudsonw on 01/10/13.
 */
Game = {
    start: function () {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(82, 82, 82)');


        // Place a tree at every edge square on our grid of 16x16 tiles
        for (var x = 0; x < Game.map_grid.width; x++) {
            for (var y = 0; y < Game.map_grid.height; y++) {

                if (y < 4) {
                    // Place a tree entity at the current tile
                    Crafty.e('Sky').at(x, y);
                } else {
                    // Place a bush entity at the current tile
                    Crafty.e('Rock').at(x, y);
                }
            }
        }
        Crafty.e('PlayerCharacter').at(5, 3);
    },

    map_grid: {
        width: 24,
        height: 20,
        tile: {
            width: 16,
            height: 16
        }
    },

    // The total width of the game screen. Since our grid takes up the entire screen
    //  this is just the width of a tile times the width of the grid
    width: function () {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    // The total height of the game screen. Since our grid takes up the entire screen
    //  this is just the height of a tile times the height of the grid
    height: function () {
        return this.map_grid.height * this.map_grid.tile.height;
    }
}