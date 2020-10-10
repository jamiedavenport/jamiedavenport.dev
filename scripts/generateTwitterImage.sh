#!/bin/bash

title=$(sed 's/ /%20/g' <<< $1)
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot --window-size=280,150 https://jamiedavenport.dev/util/twitter?title=$title