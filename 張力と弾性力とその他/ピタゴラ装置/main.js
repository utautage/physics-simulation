
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
World.add(world, [
	Bodies.circle(70, 0, 10, { friction: 0 }),
	Composites.car(340, 100, 100, 20, 15),
	Bodies.rectangle(360, 39, 80, 100, { isStatic: true }),
	Bodies.rectangle(400, 125, 200, 10, { isStatic: true }),
	Bodies.polygon(360, 155, 5, 50, { isStatic: true, angle: Math.PI * 1.1, friction: 0 }),
	Bodies.trapezoid(480, 75, 150, 80, 0.4, { angle: Math.PI, friction: 0 }),
	Bodies.rectangle(130, 80, 190, 10, { isStatic: true, angle: Math.PI * 0.1 }),
	Bodies.rectangle(210, 230, 220, 10, { isStatic: true, angle: Math.PI * -0.05 }),
	Bodies.rectangle(670, 250, 300, 10, { isStatic: true, angle: Math.PI * -0.15 }),
	Bodies.rectangle(120, 350, 400, 10, { isStatic: true, angle: Math.PI * 0.05 }),
	Bodies.rectangle(300, 450, 60, 10, { isStatic: true, angle: Math.PI * 0.05 }),
	Bodies.rectangle(570, 500, 225, 10, { isStatic: true, angle: Math.PI * 0.05 }),
	Bodies.rectangle(700, 570, 50, 10, { isStatic: true }),
	Bodies.rectangle(680, 540, 10, 50, { isStatic: true }),
	Bodies.rectangle(720, 540, 10, 50, { isStatic: true }),
]);
/***** ワールドに剛体を加える（ここまで） *****/
