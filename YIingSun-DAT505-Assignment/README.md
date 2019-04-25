# In the depth of  heart
------

#### Name:Ying Sun
#### Stduent Code:B161006084
[Github link](https://github.com/sunyingg/DAT505-Code/tree/master/YingSun-DAT505-Assignment)
------
### Catlog
YINGSUN-DAT505-Assignment
* audio---ghost duet.mp3
* build---FBXLoader.js / inflate.min.js/stats.js/three.js/tween.js
* css---style.css
* fbx---mirror1.FBX
* fonts---helvetiker_regular.typeface.json
* js---index.js
* textures---place1.painting
* index.html


------
### Introduction
This project is mainly about displaying a  3D painting .It also has a dynamic display，when you touch the models,the animation that comes with the model will start playing.The models and maps in the pictures are all designed by me.The raycaster is used to make a mouse click to play the animation. In addition, there are snowflakes effect and cactus made of cube in the picture.i also add a skybox into the index. The camera keeps rotating to show the scene in many directions.
##### ps.The index can only be opened with Microsoft Edge,and the models will take some time to load

------
### Design details and purpose
The girl in the picture is looking at the mirror, which shows the reflection of this girl and some marine creatures. When the mouse clicks on the mirror, these creatures will float in the wind. This is to show that many people have a soft and colorful heart beneath their hard exterior. When we touch it, it will also give us a response. So I set the scene in the desert, and the scenery outside the mirror is black and white, in order to show that our external performance may only be a kind of empty body to protect ourselves, while the inner part of us is colorful and energetic. The main purpose of this project is to appeal to people to find out more about themselves and don't be afraid to face the depth of their heart.
![final](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/3.png)
![final](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/5.png)
![final](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/6.png)
![final](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/7.png)

### Insipration

It was inspired by the Darjeeling Limited which is my favourite movie.I've seen this film more than ten times so I made a brief analysis of the film.Then i found that I was most interested in the personality conflicts of the characters, so I drew a sketch.
Then I thought it would be more interesting and special to make it into a 3d model.Therefore, i started to finish this work.

analysis:
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/14.png )



sketch:
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/1.png)


### Design Process
##### about the models

I revised the basic draft and then redesigned the image of marine creatures and girls to make it more easy to be built.In fact, I've adjusted the character modeling design to a great extent, because the original design was too difficult for me.
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/8.png)


![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/9.png
  )



Then i used 3D Max to build models and make maps for them. I also set animations in 3dmax, and import the final model into the web page.
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/2.png)
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/4.png)
##### about the skybox
At first, I just wanted to insert a picture in the background, but after looking at the effect, I found that it was too empty , so I added a sky box.The map of skybox is painted by PS. I designed it in sketchbook first, and then improved it on the basis of draft.
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/12.jpg)
![alt text](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/screenshots/13.png)
##### about another code
In this project, I also used some code to improve the overall effect.

1. The effect of snowflakes

The code of this snow actually has the same principle of the falling square.

```javascript
geometry = new THREE.SphereGeometry(0.09, 1, 1);

for (var i = 0; i < cubesNum; i++) {
    var randomValue = Math.random() * 0.5;
    speed.push(randomValue);

    material = new THREE.PointsMaterial({
        depthTest: false
    });


    // Combine the geometry and material into a mesh
    mesh = new THREE.Mesh(geometry, material);
    for (var i = 0; i < cubes.length; i++) {
        // Rotate the x position of the mesh by 0.03
        cubes[i].rotation.x += 0.02;
        // Rotate the y position of the mesh by 0.02
        cubes[i].rotation.y += 0.02;
        //Move the mesh towards the bottom of the screen
        cubes[i].position.y -= speed[i];
        //make it appear on the top.
        if (cubes[i].position.y < 0) {
            cubes[i].position.y = 30;
            cubes[i].position.x = (Math.random() * -40) + 20;
       }

```


2. Cactus created by cubes

```javascript
var geometry2 = new THREE.BoxGeometry(10, 3, 3);
var boxMaterial = new THREE.MeshBasicMaterial({color: '#696969'});
var mesh2 = new THREE.Mesh( geometry2,boxMaterial);
    mesh2.position.x = -25;
    mesh2.position.y = -10;
    mesh2.position.z = -10;
    mesh2.rotation.z =10;

    group.add( mesh2 );

 var geometry3 = new THREE.BoxGeometry(10, 3, 3);
 var mesh3 = new THREE.Mesh( geometry3,boxMaterial);
      mesh3.position.x = -35;
      mesh3.position.y = -15;
      mesh3.position.z = -10;
      mesh3.rotation.z =-10;

    group.add( mesh3 );

var geometry4 = new THREE.BoxGeometry(3, 20, 3);
var mesh4 = new THREE.Mesh(geometry4, boxMaterial);
      mesh4.position.x = -30;
      mesh4.position.y = -15;
      mesh4.position.z =  -10;

      group.add(mesh4);

```
3. Set Sky Box to Fill in the Screen

Sky box is made of a hug cube,and it should be setted in front of the camera.
```javascript
var texturesSky = getTexturesFromAtlasFile("textures/place1.png", 6);

var materialsSky = [];
for (var i = 0; i < 6; i++) {
    materialsSky.push(new THREE.MeshBasicMaterial({ map: texturesSky[i] }));
}
//create the skybox
var skygeometry=new THREE.BoxBufferGeometry(1, 1, 1)
var skyBox = new THREE.Mesh(skygeometry, materialsSky);
skyBox.position.x = 0;
 skyBox.position.y = 25;
skyBox.position.z = -10;
skyBox.rotateY(45);
skyBox.geometry.scale(100, 100, -100);
scene.add(skyBox);
function getTexturesFromAtlasFile(atlasImgUrl, tilesNum) {
    var textures = [];
    for (var i = 0; i < tilesNum; i++) {
        textures[i] = new THREE.Texture();
    }
    //Use the image loader
    var imageObj = new Image();
    imageObj.onload = function () {
        var canvas, context;
        var tileWidth = imageObj.height;
        for (var i = 0; i < textures.length; i++) {//to split six pictures.
          // draw part of it on a canvas
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
```
4.Mouse click effect

```javascript
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
//mouse up and the animation wil stop
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

```
5. Setting up camera rotation

```javascript
//define an angle variable theta
        theta += 0.001;
  camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
  camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
  //camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
  camera.lookAt( scene.position );
```
6. Loading music

```javascript
// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'audio/ghost duet.mp3', function( buffer ) {
sound.setBuffer( buffer );
sound.setLoop( true );
sound.setVolume( 0.5 );
sound.play();
});
```
