/**
 * Created by crawler on 05/10/2017.
 */

// create svg with normal javascipt

//  var uri = "http://www.w3.org/2000/svg";
// var div = document.getElementById("drawing");
// var svg = document.createElementNS(uri, "svg");
// svg.setAttributeNS(null, "width", "100%");
// svg.setAttributeNS(null, "height", "100%");
// div.appendChild(svg);
//
// var rect = document.createElementNS(uri, "rect");
// rect.setAttributeNS(null, "width", "100px");
// rect.setAttributeNS(null, "height", "100px");
// rect.setAttributeNS(null, "fill", "red");
// svg.appendChild(rect);


//create svg with svg.js
var draw = SVG("drawing");
var rect = draw.rect(100, 100).fill("red");