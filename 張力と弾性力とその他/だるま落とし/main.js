
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
let cradle = Composites.newtonsCradle(355, 160, 1, 20, 390);
World.add(world, [
	cradle,
	Bodies.rectangle(400, 350, 50, 50, { friction:0,inertia: Infinity }),
	Bodies.rectangle(400, 400, 50, 50, { friction: 0, inertia: Infinity }),
	Bodies.rectangle(400, 450, 50, 50, { friction: 0, inertia: Infinity }),
	Bodies.rectangle(400, 500, 50, 50, { friction: 0, inertia: Infinity }),
	Bodies.rectangle(400, 550, 50, 50, { friction: 0, inertia: Infinity }),
	Bodies.rectangle(600, 600, 1800, 50.5, { isStatic: true }),
	Bodies.rectangle(600, -120, 1800, 520, { isStatic: true })
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
