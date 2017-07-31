# soundbox
A super simple JS library for playing sound effects and other audio.

Now with button mashing support!

 * Current size: `1.4kb`
 * Current minified size: `0.74kb`

[Demo](https://sbrl.github.io/soundbox/example.html)

## To use:

### With callbacks

```javascript
var soundbox = new SoundBox();
soundbox.load("beep", "beep.wav", function() {
    console.log("Loaded beep!");
}); // The callback is optional

// Later....
soundbox.play("beep", function() {
	// Do stuff
}); // This callback is also optional
```

### With Promises

```javascript
var soundbox = new SoundBox();
soundbox.load("beep-a", "beep-a.wav")
    .then(
        () => console.log("Loaded beep a!"),
        () => console.error("Failed to load keep a :-(")
    );
soundbox.load("beep-b", "beep-b.wav");
soundbox.load("beep-c", "beep-c.wav");
soundbox.load("victory", "victory.mp3");

soundbox.play("beep-a")
    .then(() => soundbox.play("beep-b"))
    .then(() => soundbox.play("beep-c"))
    .then(() => soundbox.play("victory"));
```

### Additional Functionality
Get the current version of SoundBox:

```javascript
console.log(`Soundbox is at ${SoundBox.version}`);
```

## Download
The latest master should be perfectly stable. If you want something that you know will work, try the latest [release](https://github.com/sbrl/soundbox/releases).

 * [soundbox.js](https://raw.githubusercontent.com/sbrl/soundbox/master/soundbox.js)
 * [soundbox.min.js](https://raw.githubusercontent.com/sbrl/soundbox/master/soundbox.min.js)

soundbox is also available via [npm](https://npmjs.org/) here: [sound-box](https://www.npmjs.com/package/sound-box) - To install it simply type `npm install sound-box`.

## License
SoundBox.js is licensed under MIT:

```
The MIT License (MIT)

Copyright (c) 2015 Starbeamrainbowlabs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
