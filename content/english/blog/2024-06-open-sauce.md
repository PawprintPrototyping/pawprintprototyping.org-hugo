---
title: "Pawprint Goes to OpenSauce (again!)"
date: 2024-06-22
author: rechner
image : "images/blog/blog-post-2.jpg"
bg_image: "images/blog/2024/paw-simon/banner.jpg"
categories: ["Hackerspace News"]
tags: ["Projects Showcase", "OpenSauce"]
description: "A look at the projects and experiences of Maker Youtube's coolest place to show things off"
draft: false
type: "post"
---

June 15th marked Pawprint Prototyping's return to [OpenSauce](https://opensauce.live) - the whimsical convention
for Science and Makers YouTubers, and brainchild of [William Osman](https://www.youtube.com/@williamosman).

A menagerie of members proudly presented these fine projects at our exhibitor table:

* [The Badge!](#badge)
* [Return of the ARM](#return-of-the-arm)
* [Pirate Box Badge](#pirate-box-badge)
* [Long Range Thermal Imaging](#long-range-thermal-imaging)
* [Water Plants Game](#water-plants-game)

## Badge

We were all especially excited to return this year since one of our members, [DC Punks](https://dcpunks.computer/)
had the honor of designing the OpenSauce badge, which features LED blinking eyes courtesy of a few extra jellybean
components to form an [astable multivibrator](https://en.wikipedia.org/wiki/Multivibrator).

Thanks to the tireless efforts of our roadshow team, a couple of randomly canceled Digikey orders, and a few trips up
and down the SF Bay Peninsula, the Pawprint OpenSauce booth furnished component kits featuring everything needed to give
this robot PCB badge blinkie eyes for just $10, and the satisfaction of supporting your local hackerspace.  To everyone
that purchased a kit from us, **thank you so much!**  In total we sold 500 kits and raised a little
over $3000 for our non-profit to keep the lights on, servers running, and laser lasing.

<blockquote class="twitter-tweet" data-media-max-width="560">
    <p lang="en" dir="ltr">
    Good morning <a href="https://twitter.com/OpenSauceLive?ref_src=twsrc%5Etfw">@OpenSauceLive</a> <br><br>
    We have badge kits so you can make yours blink!! <br><br>
    $10 and profits go towards keeping our hackerspace running <a href="https://t.co/VFIJWCqkJC">pic.twitter.com/VFIJWCqkJC</a>
    </p>&mdash; Pawprint Prototyping (@PawprintProto) <a href="https://twitter.com/PawprintProto/status/1801638944511246598?ref_src=twsrc%5Etfw">June 14, 2024</a>
</blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Return of The ARM

In the months leading up the event, our build team was hoping to bring something new and on-theme to OpenSauce this
year.  Unfortunately, the perils of integration hell and an unfortunate time crunch led us to shelve our new project
and dust the cobwebs off last year's project, The _Amazing Raygun Machine_ (ARM for short).  Built originally by a core
team of 5 members over the course of 3 months, this project exemplifies our spirit of collaboration and Pawprint's
mission to foster a network of hackers in the local community.

<img class="img-responsive" src="/images/blog/2024/open-sauce/setup-1.jpg" title="Setup on Friday in progress, with the star of our show, the ARM">

### Background

The ARM is our quirky take on a carnival duck-hunt game, played using a cheap laser-tag gun system (the cheapest we could
get from Amazon), with custom-built targets moved around by robots.  A pair of side targets flail about on simple 3d-printed
carriages on 80/20 frame railing, and the motion for the center target is a fickle Thermo Fisher F3 robot and C500-B
controller from the late 90's.  Your score is displayed on the largest 7-segment flip-digit displays we could source
from Poland, and the game is started by entering your name on a VT520 terminal, on which the day's top scores are also
shown.  In homage to the event's change in venue to Cow Palace, Mojake redesigned the side targets to feature a laser-engraved
"missing person" milk carton of a [boykisser](https://knowyourmeme.com/memes/oooooo-you-like-boys-ur-a-boykisser), and a cute
dairy cow for the center robot.  The aesthetics of the entire project is a culmination of a couple of things we really
appreciate from technology of a particular era: the loud and clunky mechanical action of flip digits and
chunky relays, the ring of a bell, the warm glow of a CRT terminal, beige paint and plastics everywhere, and a prominent
stack light to tie the whole thing together.

The whole show is run by a pair of Raspberry Pi's and an embarrassing number of serial adapters.  One Raspberry Pi,
close to the robot controller, runs the majority of the game logic, and a second was dedicated to the flip digits and
RGB matrix display, mostly due to limitations in driving that matrix quickly enough.  Communications between the targets
happens all on the same RS485 bus, as do the communications to the flip digits.

The software (which I _definitely_ didn't
finish writing in the hotel room the night before the event last year) is all event-driven, utilizing dedicated handlers
for each component of the game, and communications brokered using MQTT.  That design decision bought us a number of
advantages: developing and debugging one particular component, like the code to enable targets, can be easily facilitated
by publishing test messages on the fly.  Once the game expanded to needing a separate Pi to control the RGB matrix,
separating that component over a network was super easy.  After each of the component services were written, all of the
gameplay can be orchestrated by publishing to a few simple targets to kick everything into motion, and made the state
diagrams easy to understand and manage.

<video src="/images/blog/2024/open-sauce/gameplay-1.mp4" controls="controls" class="img-responsive"></video>

After loading in everything Thursday, we spend most of Friday assembling the booth and making sure the ARM, as our most
complicated assembly, worked flawlessly.  A few of our neighboring exhibitors played a few games Friday alongside us,
and We even made a detailed run book this year, so if all of the boffins with arcane 90's robot controller knowledge
were unable to make it Saturday, our other members could carry the torch.

### Tragedy (the first)

<img class="img-responsive" src="/images/blog/2024/open-sauce/broken-bot-1.jpg" title="Tragedy strikes: half of its side panels removed, the problem component is revealed">

Naturally, being a complicated system and
no stranger to a popular adage by Murphy, we arrived bright and early Saturday morning to our F3 robot immobilized
due to an encoder overspeed error on joint 5 (responsible for the pitch of the tool holder).  An encoder on each joint
provides the feedback necessary for the precise, absolute positioning of every move this robot makes, and suddenly this
one was sending implausible data back to the controller.   After a quick surgery to extract the failed part, and as
luck would have it, we learned last year that [Noisebridge](https://noisebridge.net)
happened to have _the exact same_ Thermo Fisher F3 robot arm (albeit, in far more pieces and much further away from
operation than our specimen).

After a long shot cry for help on discord, a Noisebridge member tried their best to snag a coveted encoder to revive our robot,
but inadvertently disassembled the encoder instead of removing it from the motor shaft.  Fearing for further unknowns around
our replacement procedure, we faced down the problem the best way we knew how: by jumping in our hacker ambulance and speeding
straight to Noisebridge to rescue our donor.

<img class="img-responsive" src="/images/blog/2024/open-sauce/ambulance-1.jpg" title="The donor patient secured for transport">

A huge thanks and shout out to Noisebridge for getting our project running again!

### Rebirth

<img class="img-responsive" src="/images/blog/2024/open-sauce/broken-bot-3.jpg" title="The team works feverishly and diligently to rescue a viable encoder from the donor arm">
<img class="img-responsive" src="/images/blog/2024/open-sauce/broken-bot-4.jpg" title="In a high-stakes operation, the new encoder is ready to be transplanted into our sick patient">

With the donor encoder in, we were all super relieved to see our robot moving once again.  The arm proved to be no trouble
up until the end of the event.

### Tragedy (the second)

As the event was drawing to a close, we were poised to end everything on a really high note: we'd sold out both days
on our badge component kits, the robot was working again, and we got to see so many cool exhibitors showing off their
cool creations.  A few creators had even stopped by our booth to play the ARM just after the official closing time.

Now, some important background: as an artifact of being a barn in its past life, Cow Palace did not have the electrical infrastructure
to power a bunch of weird robots, computers, and gadgets, necessitating the use of rented generators.  Knowing this, you
might feel a little uneasy powering your precious 90's robot controller that you don't have a complete software backup for
off that, but I took at least a little comfort in some industry knowledge about these things - these big generators are
really just small, 3-phase power plants, frequently used to power expensive concert equpiment without incident - lighting,
sound boards, speakers, extremely rare and expensive vintage synthesizers, the whole nine-yards.

Unfortunately all of that
stability comes to a deafening fizzle thanks to nature's tendency to invent idiots who suddenly believe they're qualified
to go throwing switches on the generator's control panel. Just a few seconds into that final game, a brown out due to
improper generator operation sent the arm crashing into the target controller on its back, and the address decoding
circuit in the memory controller to send a logfile write, which normally goes to battery-backed RAM, destined instead
to to the flash chips storing unreplaceable firmware and calibration values.

<img class="img-responsive" src="/images/blog/2024/open-sauce/broken-bot-6.jpg" title="The robot controller's console now only boots to immediately kernel panic">


Last year in the course of learning more about our controller, I'd attempted to take a backup of the internal flash
on the controller, but after revisiting those backups I'm totally disheartened to learn that 1 of the 4 flash chip dumps
is empty.

If you know anyone with this era of robot arm controller, that could be instrumental in getting our project working
again, please drop us an email here at info [at] pawprintprototyping.org.


## Pirate Box Badge

<img class="img-responsive" src="/images/blog/2024/open-sauce/pirate-box.jpg" title="PirateFox Badge, the Wifi router and SneakerNet dead drop you can wear around your neck">

This [#BadgeLife](https://defcon.social/tags/badgelife) entry for DEF CON, the world's largest hacking conference, was
designed by Geo and hosts a wide variety of computer networking abilities.  It's also a cute fox with zero depth-perception.


## Long Range Thermal Imaging

<img class="img-responsive" src="/images/blog/2024/open-sauce/thermal-camera.jpg" title="This ITAR-restricted bundle of joy can see hot things from very far away">
<img class="img-responsive" src="/images/blog/2024/open-sauce/thermal-camera-2.jpg" title="A transparent look at the fursuiting experience: yes, it's hot in there, and no, we can't see a thing in any spectrum.">

This thermal camera, built to be mounted to the outside of a building for surveillance purposes, was reverse engineered
by Geo to be controlled by a playstation game controller.  Are you hot or not?  Finally, science has the answer.

## Water Plants Game

<img class="img-responsive" src="/images/blog/2024/open-sauce/water-plants.png" title="Water plants watering dude">

In this game by Pawprint member Dingo, help our friend get the chores of watering the plants around the water plant so
they can get back to their favorite activity: napping.
