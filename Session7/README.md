Session 7
========
#### Aim of this session ####
This session is about how to  randomly generate  objects of different sizes and maps and make all objects under the same contro
#### This session has two homeworks ####
01Exercise-Texture-CubeGeometry

02Exercise-Eyes-Interaction

#### 01Exercise-Texture-CubeGeometry
![01Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture10.png)
In this project,i randomly generate cubes of different sizes and 5 maps at the top, and the cubes are dropping constantly.
 ```javascript
 //for循环
for (var i =0; i<cubesNum; i++){
 var randomValue=Math.random() *0.5;
 speed.push(randomValue);
 //5 means the number of materials
 var randomSelection=Math.round(Math.random()*5);
 // Load a texture
 texture = new THREE.TextureLoader().load("textures/texture"+randomSelection+".jpg");

 // Create a MeshBasicMaterial with a loaded texture
 material = new THREE.MeshBasicMaterial( { map: texture} );

 // Combine the geometry and material into a mesh
 mesh=new THREE.Mesh(geometry,material);

 scene.add( mesh );
 cubes.push(mesh);
}
function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );
for (var i =0; i<cubes.length; i++){
	// Rotate the x position of the mesh by 0.03
cubes[i].rotation.x += 0.02;
	// Rotate the y position of the mesh by 0.02
cubes[i].rotation.y += 0.01;

	//Move the mesh towards the bottom of the screen
cubes[i].position.y -= speed[i];

	//If the mesh passes the bottom of the screen,
	//make it appear on the top. Also x position is randomized
	if (cubes[i].position.y <- 50){
		cubes[i].position.y = 30;
		cubes[i].position.x = (Math.random() * -40) +20;
		//make the cubes size randomly
		cubes[i].scale.x=(Math.random() * -2) +1;
		cubes[i].scale.y=(Math.random() * -2) +1;
		cubes[i].scale.z=(Math.random() * -2) +1;
	}
}
 ```

 #### 02Exercise-Eyes-Interaction
![02Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture11.png)
 In this project,Random generation of multiple eyeballs at different locations that can follow the mouse's rotation
  ```javascript
  for ( a = 0; a < 10; a ++ ) {
  	var material = new THREE.MeshPhongMaterial( {
  		color: 0xffffff,
  		specular: 0x050505,
  		shininess: 50,
  		map: THREE.ImageUtils.loadTexture('images/eye.png'),
  	});

    var cubescale=(Math.random()*-2)+1;
      mesh = new THREE.Mesh( geometry, material );
      // generate eyeballs randomly
    	mesh.position.x=(Math.random()*-200)+40;
    	mesh.position.y=(Math.random()*-100)+50;
    	mesh.scale.x=cubescale;
    	mesh.scale.y=cubescale;
    	mesh.scale.z=cubescale;
    	scene.add( mesh );
    	cubes.push( mesh );
    }

  	var geometry = new THREE.SphereGeometry( 30, 32, 16 );
    function render() {
    	console.log(window.innerHeight)
      //Make them follow the mouse
    	cubes.forEach(function(c,i){
    	cubes[i].rotation.x = mouseY/window.innerHeight*2;
    	cubes[i].rotation.y = mouseX/window.innerWidth*2;
    });


  ```
