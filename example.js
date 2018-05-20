"use strict";

import SoundBox from "soundbox.js";

window.addEventListener("load", function(event) {
	window.soundbox = new SoundBox();
	soundbox.load("beep1", "examplesounds/beep1.wav");
	soundbox.load("beep2", "examplesounds/beep2.wav");
	soundbox.load("beep3", "examplesounds/beep3.wav");
});

function play_sound_1()
{
	soundbox.play("beep1");
}
function play_sound_2()
{
	soundbox.play("beep2");
}
function play_sound_3()
{
	soundbox.play("beep3");
}

function play_multiple_sounds()
{
	soundbox.play("beep1", function() {
		soundbox.play("beep2", function() {
			soundbox.play("beep3");
		});
	});
}

function play_multiple_sounds_promise()
{
	window.soundbox.play("beep1")
		.then(() => window.soundbox.play("beep2"))
		.then(() => window.soundbox.play("beep3"));
}
