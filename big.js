const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://art8621-16e5.restdb.io/rest/streetart?" + id;
const options = {
  headers: {
    "x-apikey": "6137472c43cedb6d1f97edbb",
  },
};
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    artlist(data);
  });
function artlist(art) {
  console.log(art);

  document.querySelector(
    "img.bigimage"
  ).src = `https://allmara.dk/kea/pic/images/${art.id}.jpg`;

  document.querySelector("p.namebig").textContent = art.Name;
  document.querySelector("img.bigimage").alt = art.Name;
  document.querySelector("h2").textContent = art.Name;
  document.querySelector("p.placebig").textContent = art.place;
}
