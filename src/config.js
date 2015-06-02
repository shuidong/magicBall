/**
 * Created by develop on 2015/6/1.
 */
var GRABABLE_MASK_BIT = 1 << 31;
var NOT_GRABABLE_MASK = ~GRABABLE_MASK_BIT;

var gameCfg = gameCfg || {
        ballR : 25,//30 小球的物理半径
        ballScale : 1.2,//小球素材的放大比率
        debugFlg : true,//标志位用于 显示/隐藏 物理引擎调试图

        layer_bkGround : 0,
        layer_bkGround : 10,
        layer_bkGround : 20,
        layer_bkGround : 30

    };

