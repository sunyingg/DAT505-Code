
var camera, scene, renderer, geometry, material, mesh;;
var width;
var height;
var mixers = [];
var ob;
var clock = new THREE.Clock();
var texture;
var cubesNum = 100;
var speed = [];
var cubes = [];
var cactus =[];
var raycaster = new THREE.Raycaster();
var mouseVector = new THREE.Vector3();
var selectedObject = null;
var action;
var group;
var GROUP = new THREE.Group();
var radius = 25, theta = 0;


function init() {



    width = window.innerWidth;
    height = window.innerHeight;
    console.log(width + " " + height);
    renderer = new THREE.WebGLRenderer()
    {
        antialias: true
    }
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1);
    document.body.appendChild(renderer.domElement);

//create groups
    scene = new THREE.Scene();
    group = new THREE.Group();

    scene.add(group);
    scene.add(GROUP);
//set the position of the camera
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(10, 10, 30);
    camera.lookAt(0, 0, 0);
//set two lights
    var light = new THREE.AmbientLight( '#FFFFE0' ,.8);
  var light1= new THREE.HemisphereLight( '#F0F8FF', 0x080820, 1 );
      light1.position.set(200, 200, 200);
      scene.add(light);
     scene.add( light1);

//create snows
    geometry = new THREE.SphereGeometry(0.09, 1, 1);

    for (var i = 0; i < cubesNum; i++) {
        var randomValue = Math.random() * 0.5;
        speed.push(randomValue);
        var randomSelection = Math.round(Math.random() * 5);
        // Load a texture
        material = new THREE.PointsMaterial({

            map: texture,
            depthTest: false
        });


        // Combine the geometry and material into a mesh
        mesh = new THREE.Mesh(geometry, material);


        group.add(mesh);
        cubes.push(mesh);
    }
//load text
    var textloader = new THREE.FontLoader();

    textloader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    	var geometry1 = new THREE.TextGeometry( 'Touch The Mirror', {
    		font: font,
    		size: 1.5  ,
    		height:0.1,
    		curveSegments: 3,
    		//bevelEnabled: true,
    	//	bevelThickness:0.5,
    	//	bevelSize: 0.5,
    	//	bevelSegments: 1
    	} );
       var material1 = new THREE.MeshBasicMaterial({color: '#DDA0DD'}
      );


      // Combine the geometry and material into a mesh
      mesh1 = new THREE.Mesh(geometry1, material1);
      mesh1.position.x = -30;
      mesh1.position.y = 0;
      mesh1.position.z = 15;
    mesh1.rotateY(45);
        group.add(mesh1);

    } );



//create cactue in the left
    var geometry2 = new THREE.BoxGeometry(10, 3, 3);
    var boxMaterial = new THREE.MeshBasicMaterial({color: '#696969'});
    var mesh2 = new THREE.Mesh( geometry2,boxMaterial);
        mesh2.position.x = -25;
        mesh2.position.y = -10;
        mesh2.position.z = -10;
        mesh2.rotation.z =10;
          //mesh2.rotateY(45);
        group.add( mesh2 );

     var geometry3 = new THREE.BoxGeometry(10, 3, 3);
     var mesh3 = new THREE.Mesh( geometry3,boxMaterial);
          mesh3.position.x = -35;
          mesh3.position.y = -15;
          mesh3.position.z = -10;
          mesh3.rotation.z =-10;
            //mesh3.rotateY(45);
        group.add( mesh3 );

    var geometry4 = new THREE.BoxGeometry(3, 20, 3);
    var mesh4 = new THREE.Mesh(geometry4, boxMaterial);
          mesh4.position.x = -30;
          mesh4.position.y = -15;
          mesh4.position.z =  -10;
          //  mesh4.rotateY(45);
          group.add(mesh4);
//create  cactue in the right
          var mesh5 = new THREE.Mesh( geometry2,boxMaterial);
              mesh5.position.x = 40;
              mesh5.position.y = -15;
              mesh5.position.z = -10;
              mesh5.rotation.z =10;
                //mesh2.rotateY(45);
              group.add( mesh5 );
           var mesh6 = new THREE.Mesh( geometry3,boxMaterial);
                mesh6.position.x = 30;
                mesh6.position.y = -15;
                mesh6.position.z = -10;
                mesh6.rotation.z =-10;
                  //mesh3.rotateY(45);
              group.add( mesh6);
          var mesh7 = new THREE.Mesh(geometry4, boxMaterial);
                mesh7.position.x = 35;
                mesh7.position.y = -20;
                mesh7.position.z =  -10;
                //  mesh4.rotateY(45);
                group.add(mesh7);
//create  cactue in the middle
                var mesh8 = new THREE.Mesh( geometry2,boxMaterial);
                    mesh8.position.x = 5;
                    mesh8.position.y = -15;
                    mesh8.position.z = -40;
                    mesh8.rotation.z =10;
                      //mesh2.rotateY(45);
                     group.add( mesh8 );
                 var mesh9 = new THREE.Mesh( geometry3,boxMaterial);
                      mesh9.position.x = -5;
                      mesh9.position.y = -13;
                      mesh9.position.z = -40;
                      mesh9.rotation.z =-10;
                        //mesh3.rotateY(45);
                    group.add( mesh9);
                var mesh10 = new THREE.Mesh(geometry4, boxMaterial);
                      mesh10.position.x = 0;
                      mesh10.position.y = -20;
                      mesh10.position.z =  -40;
                      //  mesh4.rotateY(45);
                      group.add(mesh10);


//var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Model/material loading
    var loader = new THREE.FBXLoader();

    loader.load('fbx/mirror1.FBX', function (object) {
        object.mixer = new THREE.AnimationMixer(object);
        mixers.push(object.mixer);

        action = object.mixer.clipAction(object.animations[0]);


        object.position.x = 10;
        object.position.y = -25;
        object.position.z = -10;
        object.rotateY(45);
        object.scale.set(.5, .5, .5);
        ob = object;
        //add models into groups to control later
          GROUP.add(object);
    });

    var texturesSky = getTexturesFromAtlasFile("textures/place1.png", 6);

    var materialsSky = [];
    for (var i = 0; i < 6; i++) {
        materialsSky.push(new THREE.MeshBasicMaterial({ map: texturesSky[i] }));
    }
    var skyBox = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), materialsSky);
    skyBox.position.x = 0;
     skyBox.position.y = 25;
    skyBox.position.z = -10;
    skyBox.rotateY(45);
    skyBox.geometry.scale(100, 100, -100);
    scene.add(skyBox);



    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("mousedown", onDocumentMouseDown, false);
    window.addEventListener("mouseup", onDocumentMouseUp, false);
    console.log(GROUP);
}

function getTexturesFromAtlasFile(atlasImgUrl, tilesNum) {
    var textures = [];
    for (var i = 0; i < tilesNum; i++) {
        textures[i] = new THREE.Texture();
    }
    var imageObj = new Image();
    imageObj.onload = function () {
        var canvas, context;
        var tileWidth = imageObj.height;
        for (var i = 0; i < textures.length; i++) {
            canvas = document.createElement('canvas');
            context = canvas.getContext('2d');
            canvas.height = tileWidth;
            canvas.width = tileWidth;
            context.drawImage(imageObj, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
            textures[i].image = canvas;
            textures[i].needsUpdate = true;
        }
    };
    imageObj.src = atlasImgUrl;
    return textures;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animation() {
    requestAnimationFrame(animation);
//
    if (mixers.length > 0) {
        for (var i = 0; i < mixers.length; i++) {
            mixers[i].update(clock.getDelta());
        }

    }
    for (var i = 0; i < cubes.length; i++) {
        // Rotate the x position of the mesh by 0.03
        cubes[i].rotation.x += 0.02;
        // Rotate the y position of the mesh by 0.02
        cubes[i].rotation.y += 0.02;



        //Move the mesh towards the bottom of the screen
        cubes[i].position.y -= speed[i];



        //If the mesh passes the bottom of the screen,
        //make it appear on the top.
        if (cubes[i].position.y < 0) {
            cubes[i].position.y = 30;
            cubes[i].position.x = (Math.random() * -40) + 20;



        }

        theta += 0.001;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  //camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
  camera.updateMatrixWorld();
    }
    renderer.render(scene, camera);
}
//Setting Mouse Click to Play Animation
function onDocumentMouseDown(event) {
    event.preventDefault();



    var intersects = getIntersects(event.layerX, event.layerY);
    if (intersects.length > 0) {
        var res = intersects.filter(function (res) {
            return res && res.object;
        })[0];
        if (res && res.object) {
            selectedObject = res.object;
              action.play();

        }
    }
}

function onDocumentMouseUp() {
    action.stop();
}

function getIntersects(x, y) {
    x = (x / window.innerWidth) * 2 - 1;
    y = - (y / window.innerHeight) * 2 + 1;
    mouseVector.set(x, y, 0.5);
    raycaster.setFromCamera(mouseVector, camera);
    return raycaster.intersectObject(GROUP, true);
}
function start() {
    init();
    animation();
}
