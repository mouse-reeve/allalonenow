''' compare images with histograms '''
import cv2
from glob import glob
import numpy as np
import sys

# how similar do the histograms need to be
threshold = 0.9

def create_hist(filename):
    image = cv2.imread(filename)
    cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    hist = cv2.calcHist([image], [0, 1, 2], None, [8, 8, 8],
                        [0, 256, 0, 256, 0, 256])
    hist = cv2.normalize(hist).flatten()
    #hist = np.float32(hist)
    return hist

try:
    reference = sys.argv[1]
except IndexError:
    print 'please provide a reference image'
    exit()

reference_hist = create_hist(reference)

for filename in glob('fermi/static/images/rooms/full/*.jpg'):
    hist = create_hist(filename)
    comparison = cv2.compareHist(reference_hist, hist, cv2.cv.CV_COMP_CORREL)
    if comparison > threshold:
        print filename
