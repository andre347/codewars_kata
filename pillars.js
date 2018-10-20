function pillars(num_pill, dist, width) {
  // your code here
  //number of pillars (≥ 1);
  if (num_pill > 1 && dist >= 10 && dist <= 30 && width >= 10 && width <= 50) {
    //distance between pillars (10 - 30 meters);
    if (num_pill < 3) return (num_pill - 1) * (dist * 100);
    if (num_pill > 2)
      return (num_pill - 1) * (dist * 100) + (num_pill - 2) * width;
  }
  {
    return 0;
  }
  //width of the column (10 - 50 centimeters).
}

// it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm",
function test() {
  console.log(pillars(1, 10, 10), 0);
}

//it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm",
function test1() {
  console.log(pillars(2, 20, 25), 2000);
}

//it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm",

function test2() {
  console.log(pillars(11, 15, 30), 15270);
}

test();
test1();
test2();
