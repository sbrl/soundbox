for f in $(ls *.wav)
do 
    fb="$(basename $f .wav)"
    ffmpeg -i "$f" -f mp3 "$fb.mp3";
done