"use strict";

export const byteFromTwoHex = (high, low) => ((high & 0xF) << 4) + (low & 0xF);

export const KEY_TYPE_A = 0x60;
export const KEY_TYPE_B = 0x61;
export const DEFAULT_KEY = Buffer.from([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
export const DEFAULT_KEYS = [
  Buffer.from([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  Buffer.from([0xa0, 0xb0, 0xc0, 0xd0, 0xe0, 0xf0]),
  Buffer.from([0xa1, 0xb1, 0xc1, 0xd1, 0xe1, 0xf1]),
  Buffer.from([0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5]),
  Buffer.from([0xb0, 0xb1, 0xb2, 0xb3, 0xb4, 0xb5]),
  Buffer.from([0x4d, 0x3a, 0x99, 0xc3, 0x51, 0xdd]),
  Buffer.from([0x1a, 0x98, 0x2c, 0x7e, 0x45, 0x9a]),
  Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00]),
  Buffer.from([0xd3, 0xf7, 0xd3, 0xf7, 0xd3, 0xf7]),
  Buffer.from([0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff]),
];
export const DEFAULT_C1 = 0x0;
export const DEFAULT_C2 = 0x0;
export const DEFAULT_C3 = 0x8;
export const DEFAULT_END_ACS = 0x69;
