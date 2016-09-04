#!/bin/bash

# extract the main color from each image
echo 'collecting images and colors'

echo "
$(python scripts/maincolor.py | while read line; do
    echo $line
done)" > lines

# sort the colors using hilbert
echo 'sorting images'
python scripts/colorsort.py lines > fermi/static/js/rooms.js
rm lines
