/**
 * Created by develop on 2015/6/1.
 */
var GRABABLE_MASK_BIT = 1 << 31;
var NOT_GRABABLE_MASK = ~GRABABLE_MASK_BIT;

var gameCfg = gameCfg || {
        ballR : 20,//30 小球的物理半径
        ballScale : 1.1,//小球素材的放大比率 1.2
        sensorScale : 1.3,//碰撞区域比实体稍大

        alphaThold : 0.21,//临界alpha值 0.19 .20

        debugFlg : false,//标志位用于 显示/隐藏 物理引擎调试图
        lineDebug : false,//是否显示关系线条
        initBallCount : 10,//初始小球数量

        layer_bkGround : 0,
        layer_phyDebug : 20,
        layer_balls : 10,
        layer_bound : 30,
        layer_lineDebug : 40,
        layer_menu : 50,

        effTimeLength : 0.7,//缩放特效时间
        minNodeCount : 3//允许消除的最小连接数

    };

