function SoundBox() {
	this.sounds = {};
	this.sound_callbacks = {};
	this.add_sound = function(sound_name, path) {
		this.sounds[sound_name] = new Audio(path);
		// reset the sound ready for the next playing
		this.sounds[sound_name].addEventListener("ended", function(event) {
			event.target.currentTime = 0;
			if(typeof this.sound_callbacks[sound_name] == "function")
			{
				this.sound_callbacks[sound_name](sound_name);
			}
		});
	};
	
	this.remove = function(sound_name) {
		if(typeof this.sounds != "undefined")
			delete this.sounds[sound_name];
		if(typeof this.sound_callbacks == "function")
			delete this.sound_callbacks[sound_name];
	};
	
	this.play = function(sound_name, callback) {
		if(typeof this.sounds[sound_name] == "undefined")
		{
			console.error("Can't find sound called '" + sound_name + "'.");
			return false;
		}
		
		if(typeof callback == "function")
			this.sound_callbacks[sound_name] = callback;
		
		this..sounds[sound_name].play();
	};
}
