Session 2
========
#### Aim of this session ####
This session iS about how to  modify material parameters and to add textures of geometries.
#### This session has one homework ####
Exercise-GeometriesAndMaterials
#### Exercise-GeometriesAndMaterials
![Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture3.png)
This project is to attach material to two objects and change the rotation method of the circle to achieve the effect of cross rotation.
 ```javascript
 var geometry = new THREE.CubeGeometry( 80, 80,80 );
 var geometry1 = new THREE.TorusGeometry( 100, 10, 10, 100 );
 var geometry2 = new THREE.SphereGeometry( 50, 32, 32 );

 var material = new THREE.MeshLambertMaterial({
   color: '#CAFF70',
   lightMap: null,
   lightMapIntensity: 1,
   emissive: 0x000000,
   emissiveMap: null,
   emissiveIntensity: 1,
   specularMap: null,

 });

 var material2 = new THREE.MeshNormalMaterial();


// to add textures
 var texture = new THREE.TextureLoader().load( 'textures/timg1.jpg' );
 var material8 = new THREE.MeshBasicMaterial( { map: texture } );
 var texture = new THREE.TextureLoader().load( 'textures/timg4.jpg' );
 var material9 = new THREE.MeshBasicMaterial( { map: texture } );
 var texture = new THREE.TextureLoader().load( 'textures/timg5.jpg' );
 var material10 = new THREE.MeshBasicMaterial( { map: texture } );

 var mesh1 = new THREE.Mesh( geometry1, material2 );
 mesh1.position.z = -1000;
 mesh1.position.y = 100;
 mesh1.position.x = 200;
 var mesh2 = new THREE.Mesh( geometry1, material );
 mesh2.position.z = -1000;
 mesh2.position.x = -100;
 mesh2.position.y = 100;

 var mesh3 = new THREE.Mesh( geometry, material9 );
 mesh3.position.z = -1000;
 mesh3.position.x = -100;
 mesh3.position.y = 100;

 var mesh4 = new THREE.Mesh( geometry1, material2 );
 mesh4.position.z = -1000;
 mesh4.position.x = 200;
 mesh4.position.y = 100;

 var mesh5 = new THREE.Mesh( geometry2, material10 );
 mesh5.position.z = -1000;
 mesh5.position.x = 200;
 mesh5.position.y = 100;
 var mesh6 = new THREE.Mesh( geometry1, material );
 mesh6.position.z = -1000;
 mesh6.position.x = -100;
 mesh6.position.y = 100;
 var mesh7 = new THREE.Mesh( geometry1, material );
 mesh7.position.z = -1000;
 mesh7.position.x = -100;
 mesh7.position.y = 100;

 var mesh8 = new THREE.Mesh( geometry1, material2 );
 mesh8.position.z = -1000;
 mesh8.position.x = 200;
 mesh8.position.y = 100;

 // Add mesh to scene
 scene.add( mesh1 );
 scene.add( mesh2 );
 scene.add( mesh3 );
 scene.add( mesh4 );
 scene.add( mesh5 );
 scene.add( mesh6 );
 scene.add( mesh7 );
 scene.add( mesh8 );



 var rot = 0;

 // Render Loop
 var render = function () {
   requestAnimationFrame( render );

   rot += 0.09;

   mesh1.rotation.x = rot+1; //change the way of rotate
   mesh1.rotation.y = rot+1;
   mesh2.rotation.x = rot;
   mesh2.rotation.y = rot;
   mesh3.rotation.x = rot+2;
   mesh3.rotation.y = rot+2;
   mesh4.rotation.x = rot;
   mesh4.rotation.y = rot;
   mesh5.rotation.x = rot+2;
   mesh5.rotation.y = rot+2;
   mesh6.rotation.x = rot+1;
   mesh6.rotation.y = rot+1;
   mesh7.rotation.x = rot+3;
   mesh7.rotation.y = rot+3;
   mesh8.rotation.x = rot+3;
   mesh8.rotation.y = rot+3;
   ```
