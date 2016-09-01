#!/bin/bash

python scripts/sizefilter.py 300 | while read line; do
    rm 'fermi/static/images/rooms/full/'$line
done
