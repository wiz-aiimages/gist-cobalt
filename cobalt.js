let fileName = document.querySelector(".gist-meta > a:nth-child(2)")
fileName.setAttribute('href', 'javascript:void(0);');
let gistTitle = document.querySelector("body > .fileName")
let gist = document.querySelector(".gist")
gist.prepend(gistTitle);
let gistmeta = document.querySelector(".fileName")
gistmeta.appendChild(fileName);