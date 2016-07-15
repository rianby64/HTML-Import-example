;(_ => {
  'use strict';
  var ownerDoc = document.currentScript.ownerDocument;
  var div = ownerDoc.querySelector('div#mythird');
  console.log(ownerDoc);
  console.log(div);
  div.style.backgroundColor = "blue";
})();
