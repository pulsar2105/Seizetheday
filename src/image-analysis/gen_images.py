from PIL import Image
import random

# generate images of 1x1 pixel of many colors
N = 100
for i in range(N):
    img = Image.new('RGB', (1, 1), color=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
    img.save("../../images/image" + str(i) + ".png")
    img.close()