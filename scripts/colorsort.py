''' sort images by rgb color '''
import hilbert
import sys

# accept a json version of rooms.js
try:
    colors = []
    with open(sys.argv[1]) as f:
        lines = f.readlines()
        for line in lines:
            line = line.strip()
            line = line.split(' ')
            colors.append(line)
except KeyError:
    exit()

colors.sort(key=lambda (_, r, g, b): hilbert.Hilbert_to_int([int(r*255), int(g*255), int(b*255)]))

# format javascript file (this aint no hack)
print 'var rooms = ['
for color in colors:
    print '["%s", "rgb(%d, %d, %d)"],' % (colors[0], colors[1], colors[2], colors[3])
print '];'
