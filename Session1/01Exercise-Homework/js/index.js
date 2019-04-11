//Global variables
var scene,camera, renderer;
var geometry1,geometry2, material,material, mesh1,mesh2;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  var light = new THREE.DirectionalLight( 0xffffff);
   light.position.set(0, 0, 1);
 light.castShadow = true;
 scene.add( light );
 var canvas = document.createElement( 'canvas' );
				canvas.width = 128;
				canvas.height = 128;
				var context = canvas.getContext( '2d' );
				var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
				gradient.addColorStop( 0.1, 'rgba(210,210,210,1)' );
				gradient.addColorStop( 1, 'rgba(255,255,255,1)' );
				context.fillStyle = gradient;
				context.fillRect( 0, 0, canvas.width, canvas.height );
				var shadowTexture = new THREE.CanvasTexture( canvas );
				var shadowMaterial = new THREE.MeshBasicMaterial( { map: shadowTexture } );
				var shadowGeo = new THREE.PlaneBufferGeometry( 300, 300, 1, 1 );
				var shadowMesh;
				shadowMesh = new THREE.Mesh( shadowGeo, shadowMaterial );
				shadowMesh.position.y = - 250;
				shadowMesh.rotation.x = - Math.PI / 2;
				scene.add( shadowMesh );


  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry( 150, 8, 8);
  material = new THREE.MeshPhongMaterial({color:"#EE1289",
					flatShading: true,
					vertexColors: THREE.VertexColors,
					shininess: 40 } );
  mesh1 = new THREE.Mesh( geometry1, material );
    mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );


  geometry2= new THREE.SphereGeometry(190,8,6);
  material2 = new THREE.MeshNormalMaterial( { wireframe:true,
    color: "#00EEEE" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.set(1,1,1);
  mesh2.position.z = -800;


  scene.add( mesh2 );
}


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.04; //Continuously rotate the mesh
  mesh1.rotation.y += 0.04;
  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;


  renderer.setClearColor("#FDF5E6");

  // Render the scene
  renderer.render(scene, camera);
};


init();
geometry();
render();
