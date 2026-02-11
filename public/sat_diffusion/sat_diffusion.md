# Satellite Image Generator

## Description
Quick hack I put together. Diffusion (DDIM or DDPM) from scratch to generate Sentinel-2 10m resolution synthetic imagery. Images generated are only 64x64px. Took 2 hours to train on A100.

In the future (when my Google Colab credits refresh), I plan on trying the following:
1. Increasing image size (e.g. 128px, 256px)
2. Latent diffusion, to enable larger image sizes
3. Use higher resolution satellite images (NAIP, 1m resolution)
4. Use text embeddings to guide image generation (maybe simple biomes like "urban" or "desert")
5. Cleanup data to have less variability

## Results - 60 epochs, > 20,000 steps
<img src="/sat_diffusion/sd_results.png" alt="Sample results grid" width="900" />

## Sample Generations (look pixelated because upscaled)
| Final Result | Generation Process GIF |
| :---: | :---: |
| <img src="/sat_diffusion/gifs/sample_0.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_0.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_1.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_1.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_2.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_2.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_3.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_3.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_4.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_4.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_5.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_5.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_6.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_6.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_7.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_7.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_8.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_8.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_9.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_9.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_10.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_10.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_11.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_11.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_12.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_12.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_13.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_13.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_14.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_14.gif" width="256" height="256" /> |
| <img src="/sat_diffusion/gifs/sample_15.png" width="256" height="256" /> | <img src="/sat_diffusion/gifs/sample_15.gif" width="256" height="256" /> |
