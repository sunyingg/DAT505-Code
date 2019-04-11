// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#E6E6FA");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);


var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};
//create the airplane
var geometry = new THREE.BoxGeometry(170,100, 100);
geometry .vertices[1].y-=20;//修改顶点大小以完善飞机的形态
geometry .vertices[1].z+=30;
geometry .vertices[0].y-=20;
geometry .vertices[0].z-=30;
geometry .vertices[3].y+=40;
geometry .vertices[3].z+=30;
geometry .vertices[2].y+=40;
geometry .vertices[2].z-=30;
var geometry1 = new THREE.BoxGeometry(50,100, 100);
var geometry2 = new THREE.BoxGeometry(20,20, 20);
var geometry3 = new THREE.BoxGeometry(10,150, 20);
var geometry4 = new THREE.BoxGeometry(100,10, 400);
var geometry5 = new THREE.BoxGeometry(40,40, 40);
var geometry6 = new THREE.BoxGeometry(200, 400, 300);
var geometry7 = new THREE.BoxGeometry(100, 32, 32 );


  color = Math.random() * 0xffffff;
var material = new THREE.MeshLambertMaterial({
  color: color,
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
var material1 = new THREE.MeshPhongMaterial({
  color: '#EE6363',
  emissiveIntensity : 10
});

var material2 = new THREE.MeshLambertMaterial({
  color: '#030303',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
var material3 = new THREE.MeshLambertMaterial({
  color: '#8B008B',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
var material4 = new THREE.MeshLambertMaterial({
  color: '#8968CD'
});
var material5 = new THREE.MeshLambertMaterial({
  color: '#836FFF'
});
var mesh1 = new THREE.Mesh( geometry, material1);
mesh1.position.z = -1000;
mesh1.position.y = 100;
mesh1.rotation.x = 200;
var mesh2 = new THREE.Mesh( geometry1, material);
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 100;
mesh2.rotation.x = 200;

var mesh3 = new THREE.Mesh( geometry2, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -135;
mesh3.position.y = 100;
mesh3.rotation.x = 200;

var mesh4 = new THREE.Mesh( geometry3, material2);
mesh4.position.z = -1000;
mesh4.position.x = -150;
mesh4.position.y = 100;
mesh4.rotation.x = 200;

var mesh5 = new THREE.Mesh( geometry4, material1);
mesh5.position.z = -1000;
mesh5.position.x = -20;
mesh5.position.y = 140;
mesh5.rotation.x = -100;

var mesh6 = new THREE.Mesh( geometry5, material );
mesh6.position.z = -1000;
mesh6.position.x = 90;
mesh6.position.y = 140;
mesh6.rotation.x = 200;
var mesh7 = new THREE.Mesh( geometry6, material5 );
mesh7.position.z = -1500;
mesh7.position.x = 100;
mesh7.position.y = -300;
var mesh8 = new THREE.Mesh( geometry6, material4 );
mesh8.position.z = -1500;
mesh8.position.x = -150;
mesh8.position.y = -250;
var mesh9 = new THREE.Mesh( geometry6, material4 );
mesh9.position.z = -1500;
mesh9.position.x = 500;
mesh9.position.y = -400;
var mesh10 = new THREE.Mesh( geometry6, material3 );
mesh10.position.z = -1500;
mesh10.position.x = -500;
mesh10.position.y = -300;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
  var controller = new function() {
    this.planecolor = color;
    //this.castShadow = true;

  }();
  var gui = new dat.GUI();
  gui.addColor( controller, 'planecolor', color ).onChange( function() {
    mesh1.material.color.setHex( dec2hex(controller.planecolor) );
  });




function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}



var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 10;



  mesh4.rotation.x = rot+100;


  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
