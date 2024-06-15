import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import colorsys
import os

# we list filles in the directory
def list_files(directory):
    return os.listdir(directory)

# import image
def import_image(image_path):
    image = Image.open(image_path)
    # convert gif to rgb
    if image.mode == "P":
        image = image.convert("RGB")
    image.seek(0)
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


path = "../Seizetheday/images/"
files = list_files(path)
images = [import_image(path + file) for file in files]
images_array = [image_to_array(image) for image in images]
averages_shade = [main_shade(image_array) for image_array in images_array]
hsv = [rgb_to_hsv(average_shade) for average_shade in averages_shade]

for i in range(len(files)):
    with open(path + "hsv_" + files[i] + ".txt", "w+") as file:
        file.write(str(hsv[i][0]) + " " + str(hsv[i][1]) + " " + str(hsv[i][2]))