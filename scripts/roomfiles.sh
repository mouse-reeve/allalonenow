#!/bin/bash

echo "
$(echo 'var rooms = ['
python scripts/maincolor.py | while read line; do
    echo "$line,"
done
echo '];')" > fermi/static/js/rooms.js
