class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  convert() {
    let converter;
    if (typeof this.r === "string") {
      converter = (n) => parseInt(n, 16);
    } else {
      converter = (n) => n.toString(16);
    }
    this.r = converter(this.r);
    this.g = converter(this.g);
    this.b = converter(this.b);
  }
}

class RGB extends Color {
  constructor(r, g, b) {
    super(r, g, b);
  }
  
}

class Hex extends Color {
  constructor(r, g, b) {
    super(r, g, b);
  }
}

const newRgb = new RGB(16, 255, 189);
newRgb.convert();
console.log(newRgb);



const newHex = new Hex("ff", "f5", "00");
newHex.convert();
console.log(newHex);
