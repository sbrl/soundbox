"use strict";

import SoundBox from "../soundbox.mjs";

window.addEventListener("load", function(event) {
	window.soundbox = new SoundBox();
	soundbox.load("beep1", "sounds/beep1.mp3")
	soundbox.load("beep2", "sounds/beep2.mp3");
	soundbox.load("beep3", "sounds/beep3.mp3");
	soundbox.load("long_beep", "sounds/long_beep.mp3");
	
	document.getElementById("play_sound_1")
		.addEventListener("click", function() {
			soundbox.play("beep1");
		});
	
	document.getElementById("play_sound_2")
		.addEventListener("click", function() {
			soundbox.play("beep2");
		});
	
	document.getElementById("play_sound_3")
		.addEventListener("click", function() {
			soundbox.play("beep3");
		});
	
	document.getElementById("play_long_sound")
		.addEventListener("click", function() {
			soundbox.play("long_beep");
		});
	
	document.getElementById("play_quiet")
		.addEventListener("click", function() {
			soundbox.play("beep2", null, 0.25);
		});
	
	document.getElementById("play_multiple_sounds")
		.addEventListener("click", function() {
			soundbox.play("beep1", function() {
				soundbox.play("beep2", function() {
					soundbox.play("beep3");
				});
			});
		});
	
	document.getElementById("play_multiple_sounds_promise")
		.addEventListener("click", function() {
			window.soundbox.play("beep1")
				.then(() => window.soundbox.play("beep2"))
				.then(() => window.soundbox.play("beep3"));
		});
	
	document.getElementById("play_lots")
		.addEventListener("click", function() {
			setTimeout(() => {
				for(let i = 0; i < 10; i++) {
					window.soundbox.play("long_beep");
				}
			}, 1000);
		});
	
	document.getElementById("stop_sounds")
		.addEventListener("click", function() {
			window.soundbox.stop_all();
		});
	
	document.getElementById("set_default_volume")
		.addEventListener("click", function() {
			window.soundbox.default_volume = parseFloat(document.getElementById("input_volume").value);
		});
	
	
});
