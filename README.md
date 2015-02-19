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

## License
SoundBox.js is licensed under MIT.

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
