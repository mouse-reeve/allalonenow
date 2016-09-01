''' delete image files that are too small '''

import cv2
import numpy as np
import os

for filename in os.listdir('fermi/static/images/rooms/full/'):
    image = cv2.imread('fermi/static/images/rooms/full/' + filename)
    height, width, _ = image.shape
    print height, width
