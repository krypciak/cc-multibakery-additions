ig.module('mba.patches.dynamic-platform')
    .requires('game.feature.puzzle.entities.dynamic-platform')
    .defines(() => {
    sc.DYNAMIC_PLATFORM_TYPES.DefaultLarge = {
        size: {
            x: 48,
            y: 48,
            z: 2,
        },
        styleKey: 'dynPlatformLarge',
        terrain: ig.TERRAIN.METAL,
        anims: {
            sheet: {
                src: null,
                width: 48,
                height: 48,
                offX: 0,
                offY: 0,
            },
            SUB: [
                {
                    name: 'on',
                    time: 1,
                    frames: [0],
                    repeat: false,
                },
                {
                    name: 'off',
                    time: 1,
                    frames: [1],
                    repeat: false,
                },
            ],
        },
        walkAnims: {
            on: {
                idle: 'on',
            },
            off: {
                idle: 'off',
            },
        },
    };
});