let x = document.getElementById("x");
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let y = document.getElementById("y");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");
let w = document.getElementById("w");
let h = document.getElementById("h");
let s = document.getElementById("s");
let r = document.getElementById("r");
let B1 = document.getElementById("B1");
let B2 = document.getElementById("B2");
let B3 = document.getElementById("B3");
let B4 = document.getElementById("B4");

function setup() {
  canvas = createCanvas(1000, 600);
  defaultCanvas0.onmousemove = function showCoords(event) {
    var cx = event.clientX - 499;
    var cy = event.clientY - 7;
    var coor = cx + "," + cy;
    document.getElementById("coord").innerHTML = coor;
  };

  defaultCanvas0.onmouseout = function clearCoor() {
    document.getElementById("coord").innerHTML = "";
  };
  defaultCanvas0.addEventListener("click", pol);
}
function pol(event) {
  var cx = event.clientX - 499;
  var cy = event.clientY - 7;
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(cx, cy);

  ctx.stroke();
}

class shape {
  //créer et d'initialiser les objet créés avec une classe

  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  //fonction utilitaire
  static draw(shape) {
    switch (shape.name) {
      case "square":
        square(shape.x, shape.y, shape.s);

        break;
      case "rectangle":
        rect(shape.x, shape.y, shape.w, shape.h);
        break;
      case "ellipse":
        ellipse(shape.x, shape.y, shape.r, shape.r);
        break;
      case "triangle":
        triangle(shape.x1, shape.x2, shape.x3, shape.y1, shape.y2, shape.y3);
        break;
    }
  }
}
class squares extends shape {
  constructor(name, x, y, s) {
    super(name, y, x);
    this.s = s;
  }
}
class rectangles extends shape {
  constructor(name, x, y, w, h) {
    super(name, x, y);
    this.w = w;
    this.h = h;
  }
}
class ellipses extends shape {
  constructor(name, x, y, r) {
    super(name, y, x);
    this.r = r;
  }
}
class triangles extends shape {
  constructor(name, x1, x2, x3, y1, y2, y3) {
    super(name);
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
  }
}

B1.onclick = function () {
  let sq = new squares("square", x.value, y.value, s.value);
  squares.draw(sq);
};
B2.onclick = function () {
  let rec = new rectangles("rectangle", x.value, y.value, w.value, h.value);
  rectangles.draw(rec);
};
B3.onclick = function () {
  let elp = new ellipses("ellipse", x.value, y.value, r.value);
  ellipses.draw(elp);
};
B4.onclick = function () {
  let tri = new triangles(
    "triangle",
    x1.value,
    x2.value,
    x3.value,
    y1.value,
    y2.value,
    y3.value
  );
  triangles.draw(tri);
};
