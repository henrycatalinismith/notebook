---
name: pico8 palette
date: 2021-03-25
---

<style>
table {
  border-collapse: collapse;
  width: var(--box);
}

td {
  color: snow;
  font-family: Menlo, monospace;
  font-size: clamp(0.6rem, 4vw, 1.2rem);
  font-weight: bold;
  text-align: center;
  text-shadow:
    -0.1em  0.1em 0.2em black,
     0.1em -0.1em 0.2em black,
    -0.1em -0.1em 0.2em black,
     0.1em  0.1em 0.2em black;
  width: 25%;
}

td::before, td::after {
  content: '';
  display: block;
  padding-bottom: calc(50% - 0.5em);
}

tr:nth-child(1) td:nth-child(1) {
  background-color: #000000;
}
tr:nth-child(1) td:nth-child(2) {
  background-color: #1D2B53;
}
tr:nth-child(1) td:nth-child(3) {
  background-color: #7E2553;
}
tr:nth-child(1) td:nth-child(4) {
  background-color: #008751;
}

tr:nth-child(2) td:nth-child(1) {
  background-color: #AB5236;
}
tr:nth-child(2) td:nth-child(2) {
  background-color: #5F574F;
}
tr:nth-child(2) td:nth-child(3) {
  background-color: #C2C3C7;
}
tr:nth-child(2) td:nth-child(4) {
  background-color: #FFF1E8;
}

tr:nth-child(3) td:nth-child(1) {
  background-color: #FF004D;
}
tr:nth-child(3) td:nth-child(2) {
  background-color: #FFA300;
}
tr:nth-child(3) td:nth-child(3) {
  background-color: #FFEC27;
}
tr:nth-child(3) td:nth-child(4) {
  background-color: #00E436;
}

tr:nth-child(4) td:nth-child(1) {
  background-color: #29ADFF;
}
tr:nth-child(4) td:nth-child(2) {
  background-color: #83769C;
}
tr:nth-child(4) td:nth-child(3) {
  background-color: #FF77A8;
}
tr:nth-child(4) td:nth-child(4) {
  background-color: #FFCCAA;
}
</style>

|         |         |         |         |
|---------|---------|---------|---------|
| #000000 | #1D2B53 | #7E2553 | #008751 |
| #AB5236 | #5F574F | #C2C3C7 | #FFF1E8 |
| #FF004D | #FFA300 | #FFEC27 | #00E436 |
| #29ADFF | #83769C | #FF77A8 | #FFCCAA |

