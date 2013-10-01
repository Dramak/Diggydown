/**
 * Created by hudsonw on 01/10/13.
 */
// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function () {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },

    // Locate this entity at the given position on the grid
    at: function (x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Game.map_grid.tile.width, y: this.y / Game.map_grid.tile.height }
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    }
});

// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
    init: function () {
        this.requires('2D, Canvas, Grid');
    }
});

Crafty.c('Sky', {
    init: function () {
        this.requires('Actor, Color');
        this.color('rgb(182, 229, 240)');
    }
});

Crafty.c('Rock', {
    init: function () {
        this.requires('Actor, Color, Solid');
        this.color('rgb(150, 150, 150)');
    },

    mine: function () {
        this.destroy();
    }

});

Crafty.c('PlayerCharacter', {
    init: function () {
        this.requires('Actor, Fourway, Color,Collision')
            .fourway(4)
            .color('rgb(20, 75, 40)')
            .stopOnSolids();
    },
    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function () {
        this.onHit('Rock', this.mine);
        this.onHit('Solid', this.stopMovement);

        return this;
    },

    mine: function (data) {
        data[0].obj.mine();
        this.stopMovement();
    },
    // Stops the movement
    stopMovement: function () {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    }
});