let doc;
doc = document;
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
doc = document.documentURI;
doc = document.URL;
// doc = document.contentType;
// doc = document.characterSet;
// doc = document.links;
// doc = document.links[0].classList;
// doc = document.links[0].className;
// doc = document.images;

const para = document.createElement('p');
para.textContent = `My url is ${doc}`;
const paraimg = document.createElement('img');
paraimg.src = "guarantee-200.png"

document.body.appendChild(para);
document.body.appendChild(paraimg);