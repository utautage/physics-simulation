
/***** Matter.js モジュール 初期設定（ここから） *****/

let Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Body = Matter.Body,
	Events = Matter.Events,
	Composite = Matter.Composite,
	Composites = Matter.Composites,
	Common = Matter.Common,
	Constraint = Matter.Constraint,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	World = Matter.World,
	Bodies = Matter.Bodies;
Vector = Matter.Vector;

/***** Matter.js モジュール 初期設定（ここまで） *****/

//物理エンジンの生成
let engine = Engine.create(),
	world = engine.world;

//表示領域の生成
let render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		width: 800,
		height: 600,
		showVelocity: true
	}
});

//表示領域を走らせる
Render.run(render);

//表示領域を走らせ続けるrunner関数をつくる
let runner = Runner.create();

//表示領域を走らせ続ける
Runner.run(runner, engine);


let startTime;
Events.on(world, "afterAdd", () => {
	startTime = new Date();
});
Events.on(engine, "collisionStart", () => {
	console.log("衝突までの時間：" + (new Date() - startTime) + "msec");
});
/***** ワールドに剛体を加える（ここから） *****/
World.add(world, [
	Bodies.circle(400, -380, 30),
	Bodies.rectangle(400, 625, 800, 50, { isStatic: true }),
	Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
	Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);
/***** ワールドに剛体を加える（ここまで） *****/

/***** マウスのコントロール設定（ここから） *****/



/***** マウスのコントロール設定（ここまで） *****/
