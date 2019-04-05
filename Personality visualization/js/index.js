var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX=[];



function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  var spotLight1 = new THREE.SpotLight(0xFFFFFF);
  spotLight1.position.set(500, 1000, 500);
  scene.add(spotLight1);


  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  var mirrowGeometry = new THREE.CircleBufferGeometry(30, 32);
    var mirrowMaterial = new THREE.MeshNormalMaterial({color:  0xFFFF33});
    var mesh1 = new THREE.Mesh( mirrowGeometry, mirrowMaterial );
mesh1.position.x = 5;
mesh1.position.y = 2;
   //mesh1.rotation.y = -200;
  //mesh1.rotation.x =100;
    scene.add( mesh1 );
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -20; x < 30; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -20; y < 30; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFFFF});




if(x==-5 && y ==-5){
var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
}else if (x ==5 && y==5){
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  }else {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    }



      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = 2;


var randomValueX =(Math.random()*0.1)-0.05;
randomSpeedX.push(randomValueX)

      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}

//var scaleCube = -100;
var rot =0;

function drawFrame(ts){
  requestAnimationFrame(drawFrame);

//scaleCube += 0.02 ;
//if(scaleCube> 100)scaleCube = -100;
  rot += 0.01;

  //forEach takes all the array entries and passes the c as the object, and i as the index
  cubes.forEach(function(c, i) {
//潮水涌动方法
c.scale.y =Math.sin(ts/500*Math.PI +
c.position.x*4.95 + c.position.z/10) + 1;


  //        cubes[18].rotation.z += randomSpeedX[18];


});

  renderer.render(scene, camera);
}

init();
drawFrame();
