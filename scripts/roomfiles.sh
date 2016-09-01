#!/bin/bash

echo "
$(echo 'var rooms = ['
ls fermi/static/images/rooms/full/ | while read line; do
    echo "'$line',"
done
echo '];')" > fermi/static/js/rooms.js
