from rembg import remove
from PIL import Image
import os

input_path = 'images/profile.jpg'
output_path = 'images/profile.png'

if os.path.exists(input_path):
    print(f"Processing {input_path}...")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Saved to {output_path}")
else:
    print(f"Error: {input_path} not found.")
