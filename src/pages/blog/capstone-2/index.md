---
title: 'Capstone: Researching Tools'
description: 'A post describing the next research steps'
date: '2019-10-04'
image: 'bp2-header.jpg'
---

Since my last post, progress has been much slower. Now that we have found the initial data sources, a lot of our progress since then has been looking deeper into the datasets and seeing what information is available. Hopefully digging deeper will set us on a good path to figuring out how to relate all of the data. Recently, I have taken a look at finding good climate data for Vermont which thankfully the NOAA has plenty of data about and an accessible API for it. We can get Vermont specific data down to the specific county. This is vital for analyzing our maple syrup data.
    
I have been thinking about possible tools we can use as well. In my data mining course, we are learning about the `numpy` and `pandas` python libraries, which from my experience so far, are going to be incredibly helpful for actually analyzing the data. Victor and I need to discuss how we want to handle missing data. When Victor dug into the data sets he noticed some missing or null entries. This raises the question of if we want to simply get rid of those samples, or if we want to interpolate the data. In terms of visualization, interpolating the data will help us not have blanks for certain locations in specific periods. However, it might be misleading as we don’t know how accurate the interpolation actually will be.

While I’m getting ahead of myself, I have been researching visualization libraries for web apps. While Victor and I haven’t discussed how to implement our future visualizations, we need to think about what tools we will use to visualize our data for the web. From some basic research, it appears a good option is `d3.js`. I have heard of it before my research, and upon some shallow research, I have found many quality examples and descriptive documentation.

