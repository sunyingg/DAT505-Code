Session 4
========
#### Aim of this session ####
In this session, I learned how to use for loop functions to create objects and make these objects into a set and modify the coordinate range to change the color and speed of a single object.

#### This session has three homeworks ####
01Exercise-ArryMesh change color

02Exercise-ArryMeshRandomSpeed

03Exercise-ArryMesh changeRotateandColor

#### 01Exercise-ArryMesh change color
![Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture5.png)
In this project,i cloned the object to x, y and Z separately, added mouse control, and used the range of the object set to modify the object color.
```javascript
 //Method of Adding Mouse Control
controls = new THREE.OrbitControls(camera, renderer.domElement);

  for (var x = -15; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -15; y <= 10; y += 5) {
        for (var z= -15; z <= 10; z += 5) {

//Concatenation of the x , y and z values (open console to see)
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
```



#### 02Exercise-ArryMeshRandomSpeed
![02Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture6.png)
In this poject, I cloned cubes and also rotated them at any angle.What is more,i used speed as a set so that all squares move at different speeds.
 ```javascript
 //Method of Adding Mouse Control
   controls = new THREE.OrbitControls(camera, renderer.domElement);

   //Create a two dimensional grid of objects, and position them accordingly
   for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
     for (var y = -35; y < 40; y += 5) {
       var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
       //The color of the material is assigned a random color
       var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
       var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

       mesh.position.x = x;
       mesh.position.z = y;
       mesh.rotation.x = 360*Math.random();
      //locate speed in a set
       var randomValueX= (Math.random()*0.1) - 0.05;
         var randomValueY= (Math.random()*0.1) - 0.05;
         randomRotationX.push(randomValueX);
         randomRotationY.push(randomValueY);

       scene.add(mesh);
       cubes.push(mesh);
     }
   }
   function drawFrame(){
     requestAnimationFrame(drawFrame);

     rot += 0.01;

     //forEach takes all the array entries and passes the c as the object, and i as the index
     cubes.forEach(function(c, i) {
       c.rotation.x += randomRotationX[i];
       c.rotation.y += randomRotationY[i];//Rotate the object that is referenced in c
     });
 ```


 #### 03Exercise-ArryMesh changeRotateandColor
![03Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture7.png)
 Change only the color of specific objects and make them rotate
 ```javascript
 //Using coordinates to control the color of a single object
       var boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFF33});
       if (x==-5 && y==-5){
       boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF39 });
     }else if (x==5 && y==5){
       boxMaterial = new THREE.MeshLambertMaterial({color: "#B452CD" });
     }else{
       boxMaterial = new THREE.MeshLambertMaterial({color:  0xFFFFFF});
     }
     //Rotate the selected object only
   for (var i =0;i<5; i++){
     cubes[6].rotation.x += randomSpeedX[6];
   cubes[18].rotation.y += randomSpeedY[18];
   }
 ```
