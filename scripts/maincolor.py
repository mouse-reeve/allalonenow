''' Extract the dominant color in an image '''
import cv2
import glob
import numpy as np

for filename in glob.glob('fermi/static/images/rooms/full/*.jpg'):
    img = cv2.imread(filename)

    Z = img.reshape((-1, 3))
    Z = np.float32(Z)

    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
    k = 1
    ret, label, center = cv2.kmeans(Z, k, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

    center = np.uint8(center)[0]
    filename = filename.split('/')[-1]
    print filename, center[0], center[1], center[2]
