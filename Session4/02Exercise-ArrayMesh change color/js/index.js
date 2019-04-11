var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(20, 50, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,1000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
 //Method of Adding Mouse Control
controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -15; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -15; y <= 10; y += 5) {
        for (var z= -15; z <= 10; z += 5) {

//Concatenation of the x and y values (open console to see)
console.log("X:" +x+ ",Y : " +y+ ",Z:" +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      var boxMaterial = new THREE.MeshLambertMaterial({color:  0xE79796});

//use Object coordinates to change the color
 if (x >= 0 && y >= 0 && z >= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#FFD700"});
 } else if ( x >= 0 && y >=0 && z <= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#FFD700"});
 } else if ( x >= 0 && y <=0 && z < 0){
   boxMaterial = new THREE.MeshLambertMaterial({color:"#BCEE68"});
 } else if ( x >= 0 && y <=0 && z >= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#9370DB"});
  } else if ( x <= 0 && y >=0 && z >= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color: "#87CEEB"});
  } else if ( x <= 0 && y >=0 && z <= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color: "#3A5FCD"});
  }


    ) * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x;
      mesh.position.z = z;
        mesh.position.y = y;

      scene.add(mesh);
      cubes.push(mesh);

}
}
}


  document.body.appendChild(renderer.domElement);

}
function drawFrame(){
  requestAnimationFrame(drawFrame);
rot += 0.01;

cubes.forEach(function(c,i){
  c.rotation.x = rot;
  c.rotation.y = rot;
});

  renderer.render(scene, camera);
}



init();
drawFrame();
render();
