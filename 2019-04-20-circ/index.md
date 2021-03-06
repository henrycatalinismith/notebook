---
title: circ
description: |
  A C implementation of Bresenham's circle algorithm.
  I'm tired of having to dig this out of Google so I'm keeping a copy of it here from now on.
date: 2019-04-20
permalink: /circ/
layout: note
---

```c
void circ(int x, int y, int r, int col) {
  int f = 1 - r;
  int ddF_x = 0;
  int ddF_y = -2 * r;
  int cx = 0;
  int cy = r;

  pset(x, y + r, col);
  pset(x, y - r, col);
  pset(x + r, y, col);
  pset(x - r, y, col);

  while (cx < cy) {
    if (f >= 0) {
      cy--;
      ddF_y += 2;
      f += ddF_y;
    }

    cx++;
    ddF_x += 2;
    f += ddF_x + 1;

    pset(x + cx, y + cy, col);
    pset(x - cx, y + cy, col);
    pset(x + cx, y - cy, col);
    pset(x - cx, y - cy, col);
    pset(x + cy, y + cx, col);
    pset(x - cy, y + cx, col);
    pset(x + cy, y - cx, col);
    pset(x - cy, y - cx, col);
  }
}
```