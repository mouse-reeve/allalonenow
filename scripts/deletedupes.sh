#!/bin/bash

ls fermi/static/images/rooms/full | wc -l
fdupes -dN fermi/static/images/rooms/full/
ls fermi/static/images/rooms/full | wc -l
