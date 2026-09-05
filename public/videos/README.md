# Optimized Video Assets Guide

Place self-hosted video files in this directory (`/public/videos/`).

## Recommended Video Specifications for Web Performance

To ensure videos load instantly without buffering on mobile networks:

| Parameter | Recommended Specification |
| :--- | :--- |
| **Container & Codec** | MP4 (`H.264` video + `AAC` audio) or WebM (`VP9`) |
| **Max Resolution** | 1080p (`1920x1080`) or 720p (`1280x720`) |
| **Frame Rate** | 25 or 30 fps |
| **Bitrate** | 2.5 Mbps – 4.0 Mbps |
| **Web Optimization** | Enable FastStart / Web Optimized (`moov` atom at the beginning of the file) so playback starts before the full file finishes downloading. |

## Free Tools to Optimize Video Files

### Option A: Handbrake (GUI)
1. Open the video in [Handbrake](https://handbrake.fr/).
2. Select the preset: **Web > Discord Nitro 1080p30** or **General > Fast 1080p30**.
3. Ensure the checkbox **"Web Optimized"** is checked.
4. Export as `.mp4`.

### Option B: ffmpeg (CLI)
Run the following command to produce a high-efficiency web-optimized video:
```bash
ffmpeg -i input.mov -vcodec libx264 -crf 23 -preset medium -movflags +faststart -acodec aac -b:a 128k output.mp4
```

## How to Add a Video Project in `src/data/projects.ts`

```ts
{
  id: "proj-stacker-doors-video",
  title: "Stacking Folding Doors in Action",
  category: "doors",
  client: "Residential Client",
  location: "Bryanston, Johannesburg",
  description: "Smooth glide demonstration of our 4-panel aluminium stacking folding doors opening up an entertainment patio.",
  imagePath: "/images/real_images/products/doors/aluminium_door_one.jpeg", // Poster thumbnail
  finish: "Charcoal Matte Powder",
  glass: "Toughened Safety Glass",
  aesthetic: "Seamless Indoor-Outdoor Flow",
  mediaType: "video",
  videoUrl: "/videos/stacker-doors-demo.mp4", // Or YouTube / Vimeo URL
  videoDuration: "0:45",
}
```
