#!/bin/bash
mkdir validate
python scripts/histogramcompare.py fermi/static/images/rooms/full/1dc27409f56fd0c942b4ac743b4b6803b5c175bc.jpg | while read line; do
    mv $line validate/
done
