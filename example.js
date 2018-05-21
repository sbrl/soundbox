"use strict";

import SoundBox from "./soundbox.jsm";

window
	.addEventListener("load", function(event) {
	window.soundbox = new SoundBox();
	soundbox.load("beep1", "examplesounds/beep1.wav");
	soundbox.load("beep2", "examplesounds/beep2.wav");
	soundbox.load("beep3", "examplesounds/beep3.wav");
	
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
	
});
