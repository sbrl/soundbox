# soundbox
A super simple JS library for playing sound effects

 * Current size: `1.04kb`
 * Current minified size: `0.64kb`

## To use:

```javascript
var soundbox = new SoundBox();
soundbox.load("beep", "beep.wav");

// later....
soundbox.play("beep", function() {
	// do stuff
}); // the callback is optional
```

## Download

 * [soundbox.js](https://raw.githubusercontent.com/sbrl/soundbox/master/soundbox.js)
 * [soundbox.min.js](https://raw.githubusercontent.com/sbrl/soundbox/master/soundbox.min.js)
