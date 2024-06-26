---
title: "Giant Game Boy Camera"
date: 2024-06-20T18:22:52-07:00
author: "Kay"
image: "images/blog/2024/gameboy/hero.jpg"
categories: ["Hackerspace News", "Member Projects"]
tags: ["Projects Showcase", "OpenSauce"]
description: "This giant-sized Game Boy with a real Game Boy camera takes prints your picture like a photo booth."
---

# Giant Game Boy Camera
This was probably one of our most time consuming projects, and also the one we are most proud of. I worked on this with my partner Burry, under our group name DCPunks. We were fortunate enough to show it off at TWO conventions in the Bay Area, Further Confusion 2024 and Open Sauce 2024!

## What is it?
It's exactly what it seems like. A huge Game Boy camera kiosk that will print out your photo on a piece of sticker paper, just like the original! In case you didn't know, the original Game Boy had two very interesting first party accessories: a camera and a printer. Both were sold officially by Nintendo. The camera allowed you to take very rudimentary photos and doodle on them with stickers. The printer would let you print our your photos on a small roll of thermal paper. The Giant Game Boy Camera recreates this functionality, just bigger and with a couple of enhancements.

## How does it work?
The Giant Game Boy Camera uses a real Game Boy and a real Game Boy Camera. We used a (damaged) Game Boy Advance SP motherboard with a mod chip that outputs the video signal to HDMI. We then downscaled that to composite video and fed it into a CRT for the big Game Boy screen. 

When users wanted to take a photo, we had them press a huge red button. This button would simulate button presses with relays that were soldered to the Game Boy Advance SP motherboard and cause it to take the photo, print it out, delete it, and reset the camera. 

The only non-original part of the exhibit is the printer. The original printer is terrible and not worth using. It prints out on tiny thermal paper that's impossible to source and the image fades super quickly. Instead, we created our own printer emulator out of an ESP32, Raspberry Pi, and Brother QL-570 label printer. The connection between the Game Boy and the printer is very simple, it's just SPI. We used an ESP32 to sniff the SPI signal, handshake with the Game Boy, and turn the data into UART that the Raspberry Pi could read. The Raspberry Pi then takes this UART data, extracts the image, converts it to a PNG, and prints it out on the printer.

Finally, all the photos that get taken are saved and sent to a public Telegram channel for users to download.

## How it was made

### Electronics Design
The first thing we needed to get working was the electronics. I had to make absolutely sure that the whole kludge not only worked in theory, but practice. Mounting it all in a pretty case was something I knew we could achieve with enough time.

{{< figure title="Kicad 3D render of the populated PCB" src="/images/blog/2024/gameboy/3d_render.jpg">}}

I designed a PCB that held the ESP32 and managed the button relays and link cable connection. We dubbed this board the SGB AUTOCON. I tried to make it out of all through hole components so we could rework it easier if we ended up screwing something up.

{{< figure title="Final Populated PCB" src="/images/blog/2024/gameboy/pop.jpg" >}}


After assembling the boards and connecting all the parts together, we tested it on our kitchen table and it all worked! I didn't know it at the time, but this was the easy part. Assembling and painting this thing was going to be a nightmare

{{< figure title="Electronics Mockup" src="/images/blog/2024/gameboy/electronics_mockup.jpg" >}}

### Early Mockups
{{< figure title="Cardboard Mockup" src="/images/blog/2024/gameboy/cardboard_mockup_gb.jpg" >}}
We mocked up as much of it as we could on cardboard first to get the scaling right. This ended up paying off, cardboard is cheap and it allowed us to get a feel for the thing we were building and size all the parts correctly. Early versions had screens that were way too small and had to be resized in order to fit the TV we had sourced.

{{< figure title="Cardboard Fit Check" src="/images/blog/2024/gameboy/carboard_check_fit.jpg" >}}

We did our best to make everything as to-scale as possible, but some things had to be changed just a bit to work with the parts we had. The camera is not quite to scale, it's a little larger because we thought it looked nicer.

{{< figure title="Sizing the Camera" src="/images/blog/2024/gameboy/sizing_camera.jpg" >}}

### Laser Cutting
I am a computer engineer, I am not a carpenter. This means the laser cutter is my best friend. Just draw everything as an SVG and the machine will cut it for you! I barely ever had to pick up a saw or measure anything for this entire project. 
{{< figure title="Freshly Cut GB" src="/images/blog/2024/gameboy/fresh_cut_gb.jpg" >}}

I would rather sand off the burn marks then screw up my measurements and have to cut everything all over again.

{{< figure title="Freshly Cut Camrea" src="/images/blog/2024/gameboy/fresh_cut_camera.jpg" >}}

We laser cut out the Game Boy and Camera and engraved some of the parts we wanted to paint. This helped give it some dimension and gave us very useful guides for later painting.

{{< figure title="Finished Game Boy" src="/images/blog/2024/gameboy/cut_finished_gb.jpg" >}}

### Painting

{{< figure title="Painting the GB" src="/images/blog/2024/gameboy/painting_gb.jpg" >}}

Painting this thing was the hardest part of the entire project. Seriously, it took about four days of straight work in order to get the paint job to where we wanted it. I took a whole week off of my job in order to get this part done.

{{< figure title="Detail Painting GB" src="/images/blog/2024/gameboy/detail_painting_gb.jpg" >}}

There was so much painting, sanding, letting dry, re-painting, re-sanding, over and over and over. It had to look good!

{{< figure title="Masking the Camera" src="/images/blog/2024/gameboy/masking_camera.jpg" >}}

Just laying down the grey base coats took a couple days. The detail painting and the later touch ups took a super long time as well. We seriously painted this thing from like 9am to 10pm for half a week. It started to drive me nuts.

### Assembly
I could not wait to get to assembly. It meant painting was over! This part happened super quick, we just had to glue, nail, and screw everything down 

[Assembled Box and Platform](/images/blog/2024/gameboy/assembled_box_platform.jpg)

I made sure to build a robust shelf for the TV to sit on since it's a CRT. Those things are heavy! They'd easily cause a piece of MDF to bow and crack over time. 

{{< figure title="Assembled TV Stand" src="/images/blog/2024/gameboy/tv_stand.jpg" >}}

Mounting all the electronics into our assembled beast was fun as well. This was where we slowly got to see out project come to life. There were a couple days where we weren't sure if this was going to get done in time for the convention, but as soon as we hit this stage we knew we'd make it.

{{< figure title="Camera Assembly" src="/images/blog/2024/gameboy/back_camera_assembly.jpg" >}}

### The Finished Product!
We were so happy to see this completed. The paint job was great, the code was solid, and it worked really well. I even coded in some remote management that let me check in on the status of the thing and reset it remotely via a private Telegram chat. That saved our ass countless times.

{{< figure title="Finished!" src="/images/blog/2024/gameboy/finished.jpg" >}}

### Transporting to the Convention
This was fun. There are only two seats in the sprinter van and three of us. I got to sit in the back with the Game Boy (and a couple of furry dakimakuras) and make sure nothing fell on it. 

{{< figure title="Loaded in the Van" src="/images/blog/2024/gameboy/loaded_van.jpg" >}}

Fortunately, we did not get in a crash or roll over. My frieds driving did forget that I was back there and almost left me in the car when they went to get Burger King.

### At the Con: Round 1

{{< figure title="Set Up at FurCon" src="/images/blog/2024/gameboy/furcon_setup.jpg" >}}

It was a huge hit at Further Confusion 2023! Hundreds of people got photos with it and we saw the little portrait stickers plastered everywhere. I even found one on the ground at a 7/11 that was like 10 miles out of town.

Hilariously, the Game Boy made it into the backround of a local news segment.

{{< figure title="News" src="/images/blog/2024/gameboy/furcon_news.jpg" >}}

One of my favorite YouTubers, Adum from YMS was apparently there and got a photo. That was really wierd to see scroll across my timeline.

{{< figure title="Adum" src="/images/blog/2024/gameboy/adum.jpg" >}}

### At the Con: Round 2
{{< figure title="Open Sauce" src="/images/blog/2024/gameboy/open_sauce.jpg" >}}
We shoved the Game Boy back in to the van and carted it off to Open Sauce. Wosman hooked us up with a pretty fantastic spot right next to the merch booth, we got tons of traffic. I disabled the Telegram channel for this con since most people (not all!) at this con were not furries and would not just have it installed.

It even got featured in on of Wosman's videos!
{{< figure title="Wosman" src="/images/blog/2024/gameboy/wosman.jpg" >}}
