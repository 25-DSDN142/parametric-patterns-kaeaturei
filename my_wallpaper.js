//your parameter variables go here!
let rect_width = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(245, 208, 226);; //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let middle = 100;


  rect(40, 40, rect_width, rect_height);

  //setup - run once when the code is first starts

  //shadow one
  strokeWeight(0);
  fill(69, 0, 0);
  ellipse(middle -12, middle + 23, 40, 40);
  ellipse(middle - 18, middle + 27, 40, 40);

  //shadow two
  strokeWeight(0);
  fill(69, 0, 0);
  ellipse(middle + 53, middle + 23, 40, 40);
  ellipse(middle + 46, middle + 28, 40, 40);

  // cherry one
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle - 30, middle + 20, 40, 40);
  ellipse(middle - 15, middle + 20, 40, 40);
  ellipse(middle - 22.5, middle + 27, 40, 40);

  //cherry two
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle + 35, middle + 20, 40, 40);
  ellipse(middle + 50, middle + 20, 40, 40);
  ellipse(middle + 42.5, middle + 27, 40, 40);

  //stem
  stroke(15, 51, 11);
  strokeWeight(2);
  noFill ();

  beginShape();
  vertex(middle - 20, middle); // start point (left side)
  quadraticVertex(middle + 30, middle - 140, 143, 100); // pulled down part and the end point (right side)
  endShape();

  fill(15, 51, 11);
  ellipse(middle - 20, middle + 2.5, 4, 4);

  fill(15, 51, 11);
  ellipse(middle + 43, middle + 2.5, 4, 4);

  //tip of the stem
  strokeWeight(0);
  fill(15, 51, 11);
  ellipse(120, 27, 5, 10);

  strokeWeight(0);
  fill(15, 51, 11);
  ellipse(123, 29, 5, 5);

  strokeWeight(0);
  fill(15, 51, 11);
  ellipse(117, 29, 5, 5);


  //shine on cherry
  strokeWeight(0);
  fill(255);
  ellipse(middle - 30, middle + 20, 30, 30);
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle - 27, middle + 23, 30, 30);

  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle - 22, middle + 10, 10, 10);
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle - 40, middle + 30, 10, 10);
  strokeWeight(0);
  fill(255);
  ellipse(middle - 42, middle + 29, 3, 3);

  //shine on cherry
  strokeWeight(0);
  fill(255);
  ellipse(middle + 35, middle + 20, 30, 30);
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle + 38, middle + 23, 30, 30);

  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle + 43, middle + 10, 10, 10);
  strokeWeight(0);
  fill(110, 24, 31);
  ellipse(middle + 25, middle + 30, 10, 10);
  strokeWeight(0);
  fill(255);
  ellipse(middle + 24, middle + 29, 3, 3);

  //shine on stem
  strokeWeight(0);
  fill(83, 130, 86)
  ellipse(middle + 19, middle - 75, 2, 5);

  ellipse(middle + 17, middle - 72, 4, 2);

  ellipse(middle - 21, middle + 2.5, 3, 5);
  ellipse(middle + 42, middle + 2.5, 3, 5);

}