var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;

var objects = [];

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );


  var W = window.innerWidth,
      H = window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);


  scene = new THREE.Scene();
  scene.background = new THREE.Color( "#0F0F0F" );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );
  var spotLight1 = new THREE.SpotLight("#E6E6FA");
  spotLight1.position.set(100, 500, 100);
  scene.add(spotLight1);

  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );



  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("mirrow.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);

  		objLoader.load("mirrow.obj", function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
  				}
  			});

        mesh.scale.set(2,2,2);
        mesh.position.z =-300;
  mesh.position.y = -70;
  mesh.position.x = 50;
    mesh.rotation.y = 0.8;
    mesh.rotation.x = 0.1;

        scene.add(mesh);
        objects.push(mesh); //Add to the array so that we can access for raycasting
  		});
  	});


  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  //stats = new Stats();
  //container.appendChild( stats.dom );
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
function onDocumentMouseDown( event ) {
  var intersects = raycaster.intersectObjects( objects, true );
if ( intersects.length > 0 ) {
  intersects[0].object.material.color.set( Math.random() * 0xffffff);
}

}
//
function animate() {
  requestAnimationFrame( animate );

  render();
  //stats.update();
}

function render() {
  //Auto rotate camera


  //Find intersections
  raycaster.setFromCamera( mouse, camera );
  //var intersects = raycaster.intersectObjects( scene.children );

  //var intersects = raycaster.intersectObjects( objects, true );

  //if ( intersects.length > 0 ) {
    //if ( INTERSECTED != intersects[ 0 ].object ) {
    //  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    //  INTERSECTED = intersects[ 0 ].object;
    //  INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    //  INTERSECTED.material.emissive.setHex( Math.random() * 0xffffff);
  //  }
  //} else {
  //  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  //  INTERSECTED = null;
  //}
  renderer.render( scene, camera );
}
