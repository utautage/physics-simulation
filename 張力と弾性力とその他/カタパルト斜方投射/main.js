
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
let ballA = Bodies.circle(100, 450, 20, { density:0.00003,friction: 0 });
let ballB = Bodies.circle(700, 45, 30, { friction: 0 });
const angle = -Math.PI * 0.3;
let body = Bodies.rectangle(100 - 35 * Math.cos(angle), 450 - 35 * Math.sin(angle), 20, 50, { inertia: Infinity, angle: angle, friction: 0});
let constraint = Constraint.create({
	pointA: Vector.clone(body.position),
	bodyB: body,
	pointB: { x: 0, y: 0 },
	stiffness: 0.5
});
World.add(world, [
	body,
	constraint,
	ballA,
	ballB,
	Bodies.rectangle(100 - 135 * Math.cos(angle) + 35 * Math.sin(angle), 450 - 135 * Math.sin(angle) - 35 * Math.cos(angle), 220, 20, { isStatic: true, angle: angle }),
	Bodies.rectangle(100 - 120 * Math.cos(angle) - 35 * Math.sin(angle), 450 - 120 * Math.sin(angle) + 35 * Math.cos(angle), 220, 20, { isStatic: true, angle: angle }),
	Bodies.rectangle(100 - 95 * Math.cos(angle), 450 - 95 * Math.sin(angle), 20, 50, { isStatic:true,angle:angle }),
	Bodies.rectangle(700, 100, 100, 50, { isStatic: true }),
	Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
]);
/***** ワールドに剛体を加える（ここまで） *****/

/***** マウスのコントロール設定（ここから） *****/
let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create(engine, {
	mouse: mouse,
	constraint: {
		stiffness: 0.2, render: { visible: false }
	}
});
World.add(world, mouseConstraint);
render.mouse = mouse;
/***** マウスのコントロール設定（ここまで） *****/
