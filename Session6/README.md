Session 6
========
#### Aim of this session ####
This session is about the method of randomize position and scale of the objects to clone a city.
#### This session has one homework ####
Exercise-CityScape-full

#### Exercise-CityScape-full
![Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture9.png)
In this project, I changed the material of the city to the wireframe.
```javascript
//Settings for models and material
var geometry = new THREE.CubeGeometry( 1,  1,  1, 6,  10,  6 );
//geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
var material = new THREE.MeshNormalMaterial({overdraw: true, color: "#FFFFFF" ,wireframe :true});

//Geometry to store all buildings of the city
var cityGeometry = new THREE.Geometry();
for (var i = 0; i < 300; i++) {
  //Create geometry as a clone
  var building = new THREE.Mesh(geometry.clone());

  //Randomize position and scale of the buildings
  building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
  building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
  building.scale.x  = Math.pow(Math.random(), 2) * 50 + 10;
  building.scale.y  = Math.pow(Math.random(), 3) * building.scale.x * 8 + 8;
  building.scale.z  = building.scale.x;

  //Merge all buildings to one model - cityGeometry
  THREE.GeometryUtils.merge(cityGeometry, building);
}
```
