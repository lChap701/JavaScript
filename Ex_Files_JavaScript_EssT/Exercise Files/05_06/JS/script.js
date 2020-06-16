const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

// appendChild() method
/*captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);*/

// append() method
captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");