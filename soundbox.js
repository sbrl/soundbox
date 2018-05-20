/**
 * SoundBox
 * By Starbeamrainbowlabs
 * A super simple JS library for playing sound effects and other audio.
 *
 * Note to self: When making a release, remember to update the version number at the bottom of the file!
 */
"use strict";

class SoundBox {
	constructor() {
		this.sounds = {};
	}
	
	load(sound_name, path, callback) {
		this.sounds[sound_name] = new Audio(path);
		if(typeof callback == "function")
			this.sounds[sound_name].addEventListener("canplaythrough", callback);
		else
			return new Promise((resolve, reject) => {
				this.sounds[sound_name].addEventListener("canplaythrough", resolve);
				this.sounds[sound_name].addEventListener("error", reject);
			});
	};
	
	remove(sound_name) {
		if(typeof this.sounds != "undefined")
			delete this.sounds[sound_name];
		if(typeof this.sound_callbacks == "function")
			delete this.sound_callbacks[sound_name];
	};
	
	play(sound_name, callback, volume = 1) {
		if(typeof this.sounds[sound_name] == "undefined") {
			console.error("Can't find sound called '" + sound_name + "'.");
			return false;
		}
		
		var soundInstance = this.sounds[sound_name].cloneNode(true);
		soundInstance.volume = volume;
		soundInstance.play();
		
		if(typeof b == "function") {
			soundInstance.addEventListener("ended", callback);
			return true;
		}
		else {
			return new Promise((resolve, reject) => soundInstance.addEventListener("ended", resolve));
		}
	};
}

SoundBox.version = "0.3";

export default SoundBox;
