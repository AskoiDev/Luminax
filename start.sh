#!/usr/bin/env bash

# Check for `deno` in PATH
if ! command -v deno &> /dev/null ; then
    printf "(\033[1;31mError\033[1;0m): Deno not found on your machine\n"
    printf "(\033[1;31mError\033[1;0m): Please install Deno and set the PATH correctly\n"
    printf "(\033[1;31mError\033[1;0m): Try again later\n"
    printf "(\033[1;31mError\033[1;0m): Aborting request due to error...\n"
    exit 1
fi

# Clear the screen and start the application
printf "(\033[1;32mInfo\033[1;0m): Info running application...\n"
sleep 2
clear
deno run -qA ./src/index.ts