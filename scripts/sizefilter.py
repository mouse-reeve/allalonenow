''' detect images that are smaller than a given size '''
import cv2
import numpy as np
import os
import sys

try:
    size = int(sys.argv[1])
except IndexError:
    pass
except ValueError:
    pass
else:
    for filename in os.listdir('fermi/static/images/rooms/full/'):
        image = cv2.imread('fermi/static/images/rooms/full/' + filename)
        try:
            height, width, _ = image.shape
        except AttributeError:
            continue
        if height < size or width < size:
            print filename
