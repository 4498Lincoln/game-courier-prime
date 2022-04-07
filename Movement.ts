abstract class Movement {
    public static main() {
        /*                    | ------- |
                              | PRESSED |
                              | ------- |
        */

        /* Left */
        Controls.listen(Controls.Button.left, Controls.ButtonMode.press, function() {
            animation.runImageAnimation(Player.getPlayerSprite(), assets.animation`plrwalk`, 225, true);
            control.runInParallel(function () {
                while (Controls.left.pressed && Controls.canMove) {
                    Player.getPlayerSprite().vx = -25;
                    pause(5);
                }
            })
        })
        /* Right */
        Controls.listen(Controls.Button.right, Controls.ButtonMode.press, function () {
            animation.runImageAnimation(Player.getPlayerSprite(), assets.animation`plrwalk`, 225, true);
            control.runInParallel(function () {
                while (Controls.right.pressed && Controls.canMove) {
                    Player.getPlayerSprite().vx = 25;
                    pause(5);
                }
            })
        })
        /* Up */
        Controls.listen(Controls.Button.up, Controls.ButtonMode.press, function () {
            if (Controls.canMove && Player.getPlayerSprite().isHittingTile(CollisionDirection.Bottom)) Player.getPlayerSprite().vy = -85;
        })

        /*                    | -------- |
                              | RELEASED |
                              | -------- |
        */
        /* Left */
        Controls.listen(Controls.Button.left, Controls.ButtonMode.release, function () {
            if (Controls.canMove) Player.getPlayerSprite().vx = 0;
            if (!Controls.horizontalPressed()) {
                animation.stopAnimation(animation.AnimationTypes.All, Player.getPlayerSprite());
                if (Controls.canChangeImageOnStop)
                    Player.getPlayerSprite().setImage(assets.image`plrfront`);
            }
        })
        /* Right */
        Controls.listen(Controls.Button.right, Controls.ButtonMode.release, function () {
            if (Controls.canMove) Player.getPlayerSprite().vx = 0;
            if (!Controls.horizontalPressed()) {
                animation.stopAnimation(animation.AnimationTypes.All, Player.getPlayerSprite());
                if (Controls.canChangeImageOnStop)
                    Player.getPlayerSprite().setImage(assets.image`plrfront`);
            }
        })
    }
}

Movement.main();