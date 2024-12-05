
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


/***** ワールドに剛体を加える（ここから） *****/
let boxA = Bodies.rectangle(250, 475, 30, 30, { friction: 0,frictionAir:0 });
let boxB = Bodies.rectangle(520, 0, 100, 100, { friction:0,density: 0.8 });
let boxC = Bodies.rectangle(750, 75, 30, 30, { friction: 0 });
let seesaw = Bodies.rectangle(370, 500, 400, 20, { friction: 0 });
World.add(world, [
	boxA,
	boxB,
	boxC,
	seesaw,
	Bodies.rectangle(270, 560, 100, 100, { isStatic: true }),
	Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
	Bodies.rectangle(750, 100, 100, 20, { isStatic: true }),
	Constraint.create({
		bodyA: seesaw,
		pointB: Vector.clone(seesaw.position),
		stiffness: 1
	})
]);
/***** ワールドに剛体を加える（ここまで） *****/
