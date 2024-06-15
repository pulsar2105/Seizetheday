import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import colorsys

# import image
def import_image(image_path):
    image = Image.open(image_path)
    return image

# convert image to numpy array
def image_to_array(image):
    image_array = np.array(image)
    return image_array
# calculate average shade of image (RGB)
def main_shade(image):
    average_shade = np.mean(image, axis=(0, 1))
    # float to int
    average_shade = average_shade.astype(int)
    return average_shade

# convert rgb to hsv
def rgb_to_hsv(rgb):
    return  colorsys.rgb_to_hsv(rgb[0], rgb[1], rgb[2])

# convert polar to cartesian
def polar_to_cartesian(r, theta):
    x = r * np.cos(theta)
    y = r * np.sin(theta)
    return x, y

path = "../Seizetheday/images/GOzNQ8nWEAAPYHB.jpg"
image = import_image(path)
image_array = image_to_array(image)
average_shade = main_shade(image_array)
hsv = rgb_to_hsv(average_shade)

print(image_array.shape)
print(average_shade)
print(hsv)

# display graphicaly shade of image and average shade in a single window

plt.subplot(1, 2, 1)
plt.imshow(image_array)
plt.subplot(1, 2, 2)
plt.imshow(np.full(image_array.shape, average_shade, dtype=int))
plt.show()
