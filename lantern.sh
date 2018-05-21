#!/usr/bin/env bash

version="0.5";

##########################
### Colour Definitions ###
#### ANSI color codes ####
RS="\033[0m"    # reset
HC="\033[1m"    # hicolor
UL="\033[4m"    # underline
INV="\033[7m"   # inverse background and foreground
LC="\033[2m"    # locolor / dim
FBLK="\033[30m" # foreground black
FRED="\033[31m" # foreground red
FGRN="\033[32m" # foreground green
FYEL="\033[33m" # foreground yellow
FBLE="\033[34m" # foreground blue
FMAG="\033[35m" # foreground magenta
FCYN="\033[36m" # foreground cyan
FWHT="\033[37m" # foreground white
BBLK="\033[40m" # background black
BRED="\033[41m" # background red
BGRN="\033[42m" # background green
BYEL="\033[43m" # background yellow
BBLE="\033[44m" # background blue
BMAG="\033[45m" # background magenta
BCYN="\033[46m" # background cyan
BWHT="\033[47m" # background white

CSECTION=${HC}${FBLE};
CTOKEN=${FCYN};
CACTION=${FYEL};
##########################

#######################
### Cursor Movement ###
# http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x361.html
function cursor_position {
	echo -ne "\033[$1;$2H";
}
function cursor_up {
	echo -ne "\033[$1A";
}
function cursor_down {
	echo -ne "\033[$1B";
}
function cursor_right {
	echo -ne "\033[$1C";
}
function cursor_left {
	echo -ne "\033[$1D";
}
function cursor_save {
	echo -ne "\033[s";
}
function cursor_restore {
	echo -e "\033[u"
}
#######################

# $1 - The width of the text to draw
# $2 - The text to draw
function right_aligned_text {
	cursor_save
	echo -ne "\r"; # Reset to the beginning of the line
	location_start=$((( $(tput cols) - $1))); # Calculate where we need to draw at
	cursor_right ${location_start}; # Jump ahead to the right place
	echo -ne "$2"; # Draw the string
	cursor_restore
}

# $1 - The 2-character status to show
function task_status {
	right_aligned_text 6 "${HC}${FBLE}[${RS} $1 ${HC}${FBLE}]${RS}";
}

# $1 - The stage name
function stage_begin {
	term_width=$(tput cols);
	title_length=$(echo -ne "$1" | wc -m);
	padding_length=$((term_width / 2 - title_length / 2 - 2 - 1));
	echo -e "${HC}${FBLE}$(printf '%*s' ${padding_length} | tr ' ' '-')[${RS} $1 ${HC}${FBLE}]$(printf '%*s' ${padding_length} | tr ' ' '-')${RS}";
	
}

# $1 - The exit code
function stage_end {
	display_text="${HC}${FGRN}ok${RS}"
	if [[ $1 -ne 0 ]]; then
		display_text="${HC}${FRED}!!${RS}";
	fi
	term_width=$(tput cols);
	padding_length=$((term_width / 2 - 3 - 1));
	echo -e "${HC}${FBLE}$(printf '%*s' ${padding_length} | tr ' ' '-')[${RS} ${display_text} ${HC}${FBLE}]$(printf '%*s' ${padding_length} | tr ' ' '-')${HC}${FBLE}";
	
}

# $1 - The task name
function task_begin {
	echo -ne " ${FGRN}*${RS} $1";
	echo -e "";
}

# $1 - Exit code
# $2 - Error message (only displayed if the exit code isn't 0)
function task_end {
	cursor_up 1;
	
	if [[ "$1" -ne "0" ]]; then
		echo -ne " ${FRED}*${RS} $2";
		task_status "${HC}${FRED}!!${RS}";
	else
		task_status "${HC}${FGRN}ok${RS}";
	fi
	echo -e "";
}

# $1 - Task name
function subtask_begin {
	echo -ne "    ${FBLE}*${RS} $1";
}

# $1 - exit code
# $2 - error message (only displayed if the exit code isn't 0)
function subtask_end {
	if [[ "$1" -ne "0" ]]; then
		echo -ne "$2";
		echo -e "\r    ${FRED}*${RS}";
	else
		echo -e "\r    ${FGRN}*${RS}";
	fi
}

# $1 - Command name to check for
# $2 - Whether to call subtask_begin/end
function check_command {
	if [ "$2" != "" ]; then
		subtask_begin "Checking for $1";
	fi
	which $1 >/dev/null 2>&1; exit_code=$?
	if [[ "${exit_code}" -ne 0 ]]; then
		task_end ${exit_code} "Error: Couldn't locate $1. Make sure it's installed and in your path.";
		if [ "$3" != "optional" ]; then
			exit 2;
		fi
	fi
	
	if [ "$2" != "" ]; then
		subtask_end 0;
	fi
}

function tasks_run {
	while test $# -gt 0
	do
		task_$1;
		shift
	done
}
