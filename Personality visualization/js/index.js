
var camera, scene, renderer, geometry, material, mesh;;
var width;
var height;
var mixers = [];
var ob;
var clock = new THREE.Clock();
var texture;
var cubesNum = 100;//定义cube数量
var speed = [];
var cubes = [];
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


    scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);
    scene.add(GROUP);

    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(10, 10, 30);
    camera.lookAt(0, 0, 0);

    var light = new THREE.AmbientLight( '#FFFFE0' ,.8);
  var light1= new THREE.HemisphereLight( '#F0F8FF', 0x080820, 1 );
      light1.position.set(200, 200, 200);
      scene.add(light);
     scene.add( light1);


    geometry = new THREE.SphereGeometry(0.09, 1, 1);
    //for循环的方法
    for (var i = 0; i < cubesNum; i++) {
        var randomValue = Math.random() * 0.5;
        speed.push(randomValue);
        //最后的数字为材质数量
        var randomSelection = Math.round(Math.random() * 5);
        // Load a texture
        //texture = new THREE.TextureLoader().load("textures/texture" + randomSelection + ".jpg");

        // Create a MeshBasicMaterial with a loaded texture
        material = new THREE.PointsMaterial({

            map: texture,
            depthTest: false
        });


        // Combine the geometry and material into a mesh
        mesh = new THREE.Mesh(geometry, material);


        group.add(mesh);
        cubes.push(mesh);
    }

    // ground
    // var loaderImg = new THREE.TextureLoader();
    // var groundTexture = loaderImg.load('textures/grasslight-big.jpg');
    // groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    // groundTexture.repeat.set(25, 25);
    // groundTexture.anisotropy = 16;

    // var groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });

    // var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
    // mesh.position.y = - 250;
    // mesh.rotation.x = - Math.PI / 2;
    // mesh.receiveShadow = true;
    // scene.add(mesh);


var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Model/material loading!
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
          GROUP.add(object);
    });

    var texturesSky = getTexturesFromAtlasFile("textures/nx.png", 6);

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
        //make it appear on the top. Also x position is randomized
        if (cubes[i].position.y < 0) {
            cubes[i].position.y = 30;
            cubes[i].position.x = (Math.random() * -40) + 20;

            //位置

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
function onDocumentMouseDown(event) {
    event.preventDefault();
    action.play();
    if (selectedObject) {
        selectedObject.material.color.set('#69f');
        selectedObject = null;
    }

    var intersects = getIntersects(event.layerX, event.layerY);
    if (intersects.length > 0) {
        var res = intersects.filter(function (res) {
            return res && res.object;
        })[0];
        if (res && res.object) {
            selectedObject = res.object;
            selectedObject.material.color.set('#16f9d1');
            // console.log(selectedObject.position);
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
