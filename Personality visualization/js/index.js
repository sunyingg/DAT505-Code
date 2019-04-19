
var camera, scene,  renderer,geometry, material, mesh;;
var width;
var height;
var mixers = [];
var ob;
var clock = new THREE.Clock();
var texture;
var cubesNum=100;//定义cube数量
var speed=[];
var cubes=[];





function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(width + " " + height);
  renderer = new THREE.WebGLRenderer()
  {
      antialias : true
  }
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff,1);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60,width/height,1,10000);
  camera.position.set(10,10,30);
  camera.lookAt(0,0,0);

  var light = new THREE.AmbientLight( '#FFFFE0' ,.8);

var shadowLight = new THREE.DirectionalLight(0xffffff, 1);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;


scene.add(light);
scene.add(shadowLight);

  geometry = new THREE.SphereGeometry( 0.5, 5, 5 );
  	//for循环的方法
   for (var i =0; i<cubesNum; i++){
  	var randomValue=Math.random() *0.5;
  	speed.push(randomValue);
  	//最后的数字为材质数量
  	var randomSelection=Math.round(Math.random()*5);
  	// Load a texture
  	texture = new THREE.TextureLoader().load("textures/texture"+randomSelection+".jpg");

  	// Create a MeshBasicMaterial with a loaded texture
  	material =  new THREE.PointsMaterial( {

            map:texture,
            depthTest: false
              });


  	// Combine the geometry and material into a mesh
  	mesh=new THREE.Mesh(geometry,material);

  	scene.add( mesh );
  	cubes.push(mesh);
  }





  // Model/material loading!
  var loader = new THREE.FBXLoader();

  loader.load( 'fbx/mirrow1.FBX', function ( object ) {
      object.mixer = new THREE.AnimationMixer(object);
      mixers.push(object.mixer);

      var action = object.mixer.clipAction(object.animations[0]);
      action.play();


       object.position.x = 10;
      object.position.y = -25;
      object.position.z =-10;
      object.rotateY(45);
      object.scale.set(.5,.5,.5);
      ob = object;
      scene.add(object);
  });


  window.addEventListener("resize",onWindowResize,false);
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}


function animation() {
    requestAnimationFrame(animation);

    if ( mixers.length > 0 ) {
        for ( var i = 0; i < mixers.length; i ++ ) {
            mixers[ i ].update( clock.getDelta() );
        }

    }
    for (var i =0; i<cubes.length; i++){
	// Rotate the x position of the mesh by 0.03
cubes[i].rotation.x += 0.02;
	// Rotate the y position of the mesh by 0.02
cubes[i].rotation.y += 0.02;

	//Move the mesh towards the bottom of the screen
cubes[i].position.y -= speed[i];

	//If the mesh passes the bottom of the screen,
	//make it appear on the top. Also x position is randomized
	if (cubes[i].position.y <- 50){
		cubes[i].position.y = 30;
		cubes[i].position.x = (Math.random() * -40) +20;
		//位置

	}
}
    renderer.render(scene,camera);
}
function start() {
    init();
    animation();
}
