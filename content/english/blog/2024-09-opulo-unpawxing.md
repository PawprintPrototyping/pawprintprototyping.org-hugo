---
title: "2024 09 Opulo Unpawxing"
date: 2024-09-26T21:07:57-07:00
draft: false
---
# UnPAWxing Our Opulo V4

There are a huge amount of wannabe PCB designers at Pawprint Prototyping. 
None of us have any REAL experience, but we can still throw together a 
(mostly) working PCB. We're heavy users of JLCPCB's assembly service and
PCBWay's turnkey assembly programs, but frankly we're tired of the 
parts constraints and turnaround times offered by both of those options. 
Sometimes we want to use some good ol' American microcontrollers! Those 
are often in short supply when going for JLC's turnkey service. 
 
The Lumen was like a perfect fit for a bunch of wierdos at a hackerspace. 
It's cheap, open, hackable, and appears to be made with love by wierdos 
just like us. It's been on our wishlist for a while, and we finally got 
enough funds to justify purchasing it (thanks Open Sauce 2024!).

# The Box!
{{< figure title="Photo of the Box" src="/images/blog/2024/opulo-unpawxing/00_box_arrived.jpg" >}}

After a month of waiting, this awesome box finally showed up on our 
doorstep! Several of our members came down with "Pick n Place" fever 
and took some extra time off work to assemble and calibrate the new 
machine. 

{{< figure title="Rechner with the Boxcutter" src="/images/blog/2024/opulo-unpawxing/01_rechner_with_knife.jpg" >}}

{{< figure title="Geo and Rechner with the box open" src="/images/blog/2024/opulo-unpawxing/03_opening_the_box.jpg" >}}

We tore into the box with eager paws!

{{< figure title="Open box with pawbs" src="/images/blog/2024/opulo-unpawxing/04_open_with_pawbs.jpg" >}}

# The Auto Feeders

{{< figure title="Rechner Holding the Feeders" src="/images/blog/2024/opulo-unpawxing/05_rechner_with_feeders.jpg" >}}

We of course ordered a pack of 5 auto feeders and see ourselves ordering 
at least another ten or so. The price for these seems high, but it 
genuinely seems worth it. They're very well engineered with a PCB, 
servos, and metal gearing. We considered trying to build a couple ourselves
from the designs online but quickly realized that it would cost about as
much as just buying them outright.

# Packaging

{{< figure title="Geo taking stuff out" src="/images/blog/2024/opulo-unpawxing/06_geo_reaching_box.jpg" >}}

Everything was packed very well in custom cut foam. 

{{< figure title="Geo pawing at box contents" src="/images/blog/2024/opulo-unpawxing/07_geo_touching_box_contents.jpg" >}}

The only thing that was amiss was a single leg with the little rubber 
foot pushed off of the bottom. Not even worth worrying about. 

{{< figure title="The foot off the leg" src="/images/blog/2024/opulo-unpawxing/10_foot_off.jpg" >}}

It even came with a cool little toolbag! 

{{< figure title="Closeup of the toolbag" src="/images/blog/2024/opulo-unpawxing/13_geo_tool_bag.jpg" >}}

We didn't need to use any of our own tools to set this up, everything 
was provided.

{{< figure title="Open tool bag" src="/images/blog/2024/opulo-unpawxing/21_geo_open_toolbag.jpg" >}}

We are definetely going to make use of that bag. Gotta rep da merch.

{{< figure title="Geo pulling out the head gantry" src="/images/blog/2024/opulo-unpawxing/14_geo_holding_gantry.jpg" >}}

{{< figure title="rechner holding mobo" src="/images/blog/2024/opulo-unpawxing/.jpg" >}}
After lots of pawing, everything was out on the table and ready for 
assembly

{{< figure title="all the parts on the table" src="/images/blog/2024/opulo-unpawxing/28_all_part_unpacking.jpg" >}}

{{< figure title="The main controller container" src="/images/blog/2024/opulo-unpawxing/19_mobo.jpg" >}}

# Starting Assembly

The assembly instructions on the Opulo website were super clear and 
covered a bunch of gotchas that saved us tons of time. More than once 
we were confused about something, only to read a little further and 
find the answer to our question in a little tooltip. Great work Opulo!

{{< figure title="The head gantry" src="/images/blog/2024/opulo-unpawxing/20_head.jpg" >}}

The included guide tool was also a really neat idea. It's a small 3D 
printed jig that has common measurements on its axis. If you ever needed 
something to be placed exactly 10cm away from another part, you could 
just line up the tool and use it as a spacer. It even had some holes to 
keep bolts in place while we tightened them. One of the sides was a 
little wonky from a bad print, but we just ended up using the other sides. 

{{< figure title="the 3D printed tool" src="/images/blog/2024/opulo-unpawxing/27_cool_tool.jpg" >}}

All of us have put together at least a couple Prusa's each, and we lamented 
the lack of gummy bears that came with the kit. Luckily, we could provide 
our own.

{{< figure title="gummy bears" src="/images/blog/2024/opulo-unpawxing/35_gummy.jpg" >}}

# Some Small Quality Nit Picks
A couple of our printed pieces had some quality issues. As mentioned before, 
the print for the guide jig was a little bit wonky on the sides

The box that contained all the electronics also seemed to have poor layer 
adhesion. It was cracked where one of the bolts was installed. Not a big 
issue, we just glued it back together. 

{{< figure title="the cracked motherboard container" src="/images/blog/2024/opulo-unpawxing/32_mobo_cracked.jpg" >}}

Some of the overhangs on the cable guides also came off pretty easy. 
Nothing structural, but maybe the printers at Opulo need to be calibrated 
a bit. 

{{< figure title="cracked cable guide overhang" src="/images/blog/2024/opulo-unpawxing/26_cracked_cable_holder.jpg" >}}

This one is more of an oddity than a quality problem, but one of the 
chips that sits in the head of the Lumen appears to be lasered off. I 
highly doubt this was something Opulo did, since this machine is 
completely open source. We have a feeling that it just came from the 
supplier this way. Maybe the stock on these chips was low and they had 
to purchase from the grey market. 

{{< figure title="the lasered chip" src="/images/blog/2024/opulo-unpawxing/33_laser_part.jpg" >}}

# Final Assembly
In the Opulo documentation, it quotes the assembly time to be around 50 
minutes. Maybe we are dumb animals, but it took us two hours and seventeen 
minutes to put the whole thing together. We timed it! 

{{< figure title="the timer" src="/images/blog/2024/opulo-unpawxing/36_timer.jpg" >}}

The assembly itself was the easy part. Everything went together really 
smoothly and the instructions were great. Little did we know that the 
real battle was coming up next. 

{{< figure title="completed build" src="/images/blog/2024/opulo-unpawxing/24_trying_to_cal.jpg" >}}

# Calibration
Calibration and software setup was the most difficult part of the entire 
process. It's not that the software or the machine are bad, it's just that 
there's a lot involved with getting the machine finely tuned and working 
smoothly. 

For what it is, the OpenPNP software is very impressive. I can't even 
imagine all the work and math that went in to getting the machine 
vision and control loops to work. It works where it counts, and where 
it counts is precision and customizability. The UI leaves a bit to be 
desired, especially all the fanagling you need to do to get columns to 
display properly. We found ourselves constantly adjusting column widths 
so we could see all the values we were tuning.

Again, the Opulo documentation here was great. The setup procedure was 
very clear and accurate to the version of OpenPNP that was recommended. 
We learned very quickly to follow the documentation EXACTLY. One missed 
click and suddenly we were configuring the wrong thing. The software 
isn't exactly intuitive right off the bat, but after a bit of usage it 
starts to click and everything falls into place.

{{< figure title="plastic over the lumen" src="/images/blog/2024/opulo-unpawxing/22_covered_for_the_night.jpg" >}}

We were up until around 3am calibrating the machine, and we were still 
not done! After a head crash and GitHub starting to rate limit us from 
browsing the wiki too fast, we turned in for the night.

# Calibration (the next day)

The thing that we got stuck on the night prior was getting the bottom 
camera to recognize and calibrate one of our nozzles. We followed the 
docs perfectly but it still wouldn't cal! It took some experimentation, 
but we eventually realized we needed to manually adjust the vision 
pipeline to have a slightly wider field of view. The nozzle we were 
calibrating on was meant for big parts, so it had a big head. The 
pipeline was looking at too small of an area and couldn't see the 
whole thing. After a tiny tweak (120px to 122px) we the FOV was large 
enough to see the whole thing. We got cal every time!

# Our First Job!

Opulo includes a little test board that you can place some resistors on 
to test your machine's calibration. We had auto feeders, but the docs 
here recommended we test with strip feeders first. 

We had some issues calibrating the z-axis for the strip feeders. The head 
kept moving too far down and punching the parts clean through the tape! 
This violent movement also scattered the rest of the parts all over the 
work area, which meant we needed to remove that tape, cut a new one, and 
try again. Punch! This happened a couple times.

{{< figure title="the lumen movin" src="/images/blog/2024/opulo-unpawxing/39_lumen_movin.jpg" >}}
Once it works though, it works! We witnessed the fruits of two days worth 
of labor as the Lumen placed parts on the board with perfect accuracy. 

{{< figure title="parts on the board" src="/images/blog/2024/opulo-unpawxing/32_placed_part.jpg" >}}

This thing can MOVE! By default, the speed was set to 20%. We cranked that 
up to 100% and the head was flying across the work area. It was so much 
faster than trying to do this all by hand with tweezers. Hopefully, those 
days were behind us forever.

# Conclusion
There's still a lot of work to be done before we can do a "real" job with 
the lumen. Some of the settings are just ever so slightly off, and we need 
to set up the auto feeders so we can use reeled parts. We're learning the 
quirks of the OpenPNP software and getting closer to a combat - ready 
machine. 

The Lumen is a great piece of hardware. It's fast, fully featured, hackable, 
and extremely easy for a hackerspace to maintain. We have already 3D printed 
some replacement parts that we broke during calibration.

{{< figure title="photo of snapped head holder" src="/images/blog/2024/opulo-unpawxing/37_cracked_head_holder.jpg" >}}

This machine is going to see a lot of use, and we're so happy it's in space.

