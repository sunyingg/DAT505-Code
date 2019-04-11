Session 8
========
#### Aim of this session ####
This session iS about how to  import obj format model and set the effect of mouse click or touch object discoloration.
#### This session has three homeworks ####
00Exercise-Eyes-Interaction2X

01Exercise-RaycastSprite

02Exercise-objLoader-Raycasting

#### 00Exercise-Eyes-Interaction2X
![alt text]
In this project,The center of the eyeballs move with the mouse.
 ```javascript
 for (var i = 0; i < eyesNum; i++) {

   eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
   eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

   if (mouseX<160) eyes[1].rotation.y = map_range(mouseX, 0, 160, -0.2, 0.25);
   else eyes[1].rotation.y = map_range(mouseX, 160, window.innerWidth, 0.25, 1.14);
   if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
   else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

   if (mouseX<1650) eyes[2].rotation.y = map_range(mouseX, 0, 1650, -1.14, 0);
   else eyes[2].rotation.y = map_range(mouseX, 1650, window.innerWidth,0, 0.3 );
   if (mouseY<900) eyes[2].rotation.x = map_range(mouseY, 0, 900, -1.14, 0);
   else eyes[2].rotation.x = map_range(mouseY, 900, window.innerHeight, 0, 0.2);

   if (mouseX<160) eyes[3].rotation.y = map_range(mouseX, 0, 160, -0.2, 0.25);
   else eyes[3].rotation.y = map_range(mouseX, 160, window.innerWidth, 0.25, 1.14);
   if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
   else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

   if (mouseX<1650) eyes[4].rotation.y = map_range(mouseX, 0, 1650, -1.14, 0);
   else eyes[4].rotation.y = map_range(mouseX, 1650, window.innerWidth, 0, 0.3);
   if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, -0.25);
   else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);



 }
 ```

 #### 01Exercise-RaycastSprite
 ![alt text]
 In this project,When the mouse moves to the position of the object, the object will become random color.

  ```javascript
  function onDocumentMouseMove( event ) {
    event.preventDefault();
    if ( selectedObject ) {
      selectedObject = null;
    }

//Mouse touches object discoloration
    var intersects = getIntersects( event.layerX, event.layerY );
    if ( intersects.length > 0 ) {
      var res = intersects.filter( function ( res ) {
        return res && res.object;
      } )[ 0 ];
      if ( res && res.object ) {
        selectedObject = res.object;
        selectedObject.material.color.setHex( Math.random() * 0xFFFFFF );

      }


    }
  }

  ```

  #### 02Exercise-objLoader-Raycasting
  ![alt text]
  In this project,i imported a rocket model and set it to change color by clicking on the object with the mouse.
   ```javascript
   // Model/material loading
 	var mtlLoader = new THREE.MTLLoader();
 	mtlLoader.load("pao.mtl", function(materials){

 		materials.preload();

     var objLoader = new THREE.OBJLoader();
 		objLoader.setMaterials(materials);

   		objLoader.load("pao.obj", function(mesh){
   			mesh.traverse(function(node){
   				if( node instanceof THREE.Mesh ){
   					node.castShadow = true;
   					node.receiveShadow = true;
   				}
   			});
         var sizeRand = Math.random() * 0.05;
         mesh.scale.set(sizeRand,sizeRand,sizeRand);
         mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
         mesh.rotation.y = -Math.PI/Math.random()*4;

         scene.add(mesh);
         objects.push(mesh); //Add to the array so that we can access for raycasting
   		});
   	});
   }
   //Mouse click object discoloration
   function onDocumentMouseDown( event ) {
     var intersects = raycaster.intersectObjects( objects, true );
   if ( intersects.length > 0 ) {
     intersects[0].object.material.color.set( Math.random() * 0xffffff);
   }

   }

   ```
