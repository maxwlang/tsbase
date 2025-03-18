#!/bin/bash

echo "Checking if already initialized.."
FILE=.initialized
if test -f "$FILE"; then
    echo "Already initialized, starting up.."
    until npm run start; do
        echo "Server crashed with exit code $?.  Respawning.." >&2
        sleep 1
    done
else
    echo "Initializing.."
    npm run
    touch $FILE
    echo "Done. Starting up.."
    until npm run start; do
        echo "Server crashed with exit code $?.  Respawning.." >&2
        sleep 1
    done
fi