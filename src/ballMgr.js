ballMgrClass = function() {

	this.relation = [];
	this.balls = [];
	this.ballMaxID = 0;

	this.clickBallID = -1;

	this.maxTreeID = 0;
	this.trees = [];

	this.getABString = function(a, b){
		//if(a === undefined)debugger;
		var tmp = '';
		if(a < b){
			tmp = tmp + a;
			tmp = tmp + "_" + b;
		}else{
			tmp = tmp + b;
			tmp = tmp + "_" + a;
		}
		return tmp;
	};

	this.insertAB = function(a, b){
		//debugger;
		var tmp = this.getABString(a['bid'], b['bid']);
		this.relation[tmp] = tmp;

		/*
		//连接了需要合并两颗树
		var bOldTid = b['tid'];
		var treeA = this.trees[a['tid']];//引用
		var treeB = this.trees[bOldTid];
//debugger;
		try{
			for(var t in treeB){
				treeA.push(treeB[t]);
				this.getBallByID(treeB[t]).b['tid'] = a['tid'];
			}
		}catch(e){
			debugger
		}

			delete this.trees[bOldTid];
		*/
		};

	this.removeAB  =  function(a, b){
		var tmp = this.getABString(a['bid'], b['bid']);
		this.relation[tmp] = undefined;
		delete this.relation[tmp];

		/*
		//断开连接则需要新生成一棵树
		var bOldTid = b['tid'];
		var treeA = this.trees[a['tid']];//引用
		var treeB = this.trees[bOldTid];

		try{
			for(var t in treeB){
				treeA.push(treeB[t]);
				this.getBallByID(treeB[t]).b['tid'] = a['tid'];
			}
		}catch(e){
			debugger
		}

			delete this.trees[bOldTid];
		};
		*/
	};

	this.doForAllABs = function(doFun){
		for(var obj in this.relation){
			doFun(obj);
		}
	};

	this.getBallByID  =  function(id){
		return this.balls[id];
	};

	this.addBall = function(ball){
		var id = ball.b["bid"];
		if(id === undefined){
			cc.log("@error: found a undefined bid when addBall."); 
		}
		this.balls[id] = ball;

		//小球新创建时，独立一棵树，树上就一个节点
		var tid = this.maxTreeID++;
		this.trees[tid] = [];
		this.trees[tid].push(ball.b["bid"]);
		ball.b['tid'] = tid;//树id
	};

	this.forAllBalls = function(doFun){
		for(var ballId in this.balls){
			doFun(this.balls[ballId]);
		}
	};

	this.getNextBallID = function(){
		var t = this.ballMaxID++; 
		//cc.log("@debug: t =" + t);
		return t;
	};

	this.getBallIDByPos = function(pos){
		for(var ballId in this.balls){
			var tmp = this.balls[ballId];
			var ballCenter = tmp.b.p;

			var dltx = Math.abs(ballCenter.x - pos.x);
			var dlty = Math.abs(ballCenter.y - pos.y);

			if(dltx * dltx + dlty * dlty <= gameCfg.ballR * gameCfg.ballR ){
				return tmp.b['bid'];
			}
		}
		return -1;
	};

	this.doForRelationWithID = function(bid){
		if(-1 == bid)return;
		//0_9,3_9,9_8,
		var ret = [];
		ret.push(bid); 
		for(var k in this.relation){
			var ids = k.split("_");
			if(ids[0] == bid){
				ret.push(ids[1]);
			}else if(ids[1] == bid){
				ret.push(ids[0]);
			}
		}//for

		cc.log("@debug: click tree=" + ret.toString());
	};
};

var ballMgr = new ballMgrClass();