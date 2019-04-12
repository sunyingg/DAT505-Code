Session 9
========
#### Aim of this session ####
This session is about how to  Set the effect of mouse clicking or touching objects to make sound
#### This session has one homework ####
01Exercise-RaycastAudio

#### 01Exercise-RaycastAudio
![02Exercise](https://raw.githubusercontent.com/sunyingg/DAT505-Code/master/Pictures/texture14.png)
In this project,i qdded the effect of mouse clicking on an object to make a sound
and 5 maps at the top, and the cubes are dropping constantly.
 ```javascript
 var intersects = raycaster.intersectObjects( objects, true );

 if ( intersects.length > 0 ) {
   if ( INTERSECTED != intersects[ 0 ].object ) {
     if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
     INTERSECTED = intersects[ 0 ].object;
     INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
     INTERSECTED.material.emissive.setHex(Math.random() * 0xffffff );
//Add sound
     audioLoader.load( 'audio/biu.wav', function( buffer ) {
       sound.setBuffer( buffer );
       sound.setLoop( false );
       sound.setVolume( 0.7 );
       sound.play();
     });

   }
 } else {
   if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
   INTERSECTED = null;
 }
 ```
