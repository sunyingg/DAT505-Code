Session 1
========
#### Aim of this session ####
In this session,I mianly learned some basic knowledge about how to create multiple geometries and modify their size and material.
#### This session has two homework ####
Exercise-test2  
01Exercise-Homework
#### 00Exercise-Basicgeometry
![alt text]
This project is mainly about building two cubes and Making their centers consistent  by changing their positions
 ```javascript
 function geometry(){
   // Create two Cubes
   geometry1 = new THREE.BoxGeometry(400, 10, 10);
   material = new THREE.MeshBasicMaterial( { color: "#CDCD00" } );
   mesh1 = new THREE.Mesh( geometry1, material );
   mesh1.position.set(1,1,1);
   mesh1.position.z = -1000;
   scene.add( mesh1 );
   geometry2= new THREE.BoxGeometry(400, 10, 10);
   material2 = new THREE.MeshBasicMaterial( { color: "#9F79EE" } );
   mesh2 = new THREE.Mesh( geometry2, material2 );
   mesh2.position.set(1,1,1);
   mesh2.position.z = -1000;
   ```
#### 01Exercise-Homework ####
This project is to create two spheres and one of them is wireframe,i also Set them to different rotation modes.
 ```javascript
 function geometry(){
   // Create two spheres
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
   material2 = new THREE.MeshNormalMaterial( { wireframe:true,//Make objects wireframes
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
   mesh2.rotation.x += 0.01;
   mesh2.rotation.y += 0.01;

  ```
