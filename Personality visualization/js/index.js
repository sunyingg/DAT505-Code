
var camera, scene,  renderer,geometry, material, mesh;;
var width;
var height;
var mixers = [];
var ob;
var clock = new THREE.Clock();
var texture;
var cubesNum=10;//定义cube数量
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

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(20,50,30);
  scene.add(light);






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
    renderer.render(scene,camera);
}
function start() {
    init();
    animation();
}
