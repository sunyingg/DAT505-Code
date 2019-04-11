Session 5
========
#### Aim of this session ####
his session iS about how to use functions to modify scale of object to achieve  wave effect.

#### This session has one homework ####
Exercise-ArryMeshWaveEffect

#### Exercise-ArryMeshWaveEffect
![alt text]
In this project,i use functions to modify scale of object to achieve  wave effect.
```javascript
function drawFrame(ts){
  requestAnimationFrame(drawFrame);


  rot += 0.01;

  //forEach takes all the array entries and passes the c as the object, and i as the index
  cubes.forEach(function(c, i) {
//Using the equation to change the scale of the object to achieve the effect of swing
c.scale.y =Math.sin(ts/500*Math.PI +
c.position.x*4.95 + c.position.z/10) + 1;

});
```
