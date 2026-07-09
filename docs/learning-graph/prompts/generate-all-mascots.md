# Generate All Mascot Images

I used the Codex ChatGPT 5.5 Model to generate all 7 images

!!! prompt
    Please open the file [image-prompts.md](../../img/mascot/image-prompts.md) and generate a consistent set of seven mascot images for scout the mascot for this textbook.  Place all the images in @docs/img/mascot with the filename the name of the pose "neutral.png" etc.  Make sure the images are PNG with an alpha channel RGBA with a transparent background.

I’m using the imagegen skill because this is a coordinated set of transparent bitmap assets. I’ll first inspect the prompt sheet and the skill’s consistency workflow, then generate and verify all seven PNGs for RGBA transparency and naming.