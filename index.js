// const url ="https://art8621-16e5.restdb.io/rest/streetart?max=2";
// const options={
//     headers:{
//         "x-apikey":
//         "6137472c43cedb6d1f97edbb"
//     }
// }
// fetch(url,options)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
const url ="https://art8621-16e5.restdb.io/rest/streetart?max=2";
const options={
    headers:{
        "x-apikey":
        "6137472c43cedb6d1f97edbb"
    }
}
fetch(url,options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
   // console.log(data);
   artlist(data);
   
  })
function artlist(data){
  data.forEach(showart);
}
  function showart(art){
    console.log(art)
    //grab template
    const template= document.querySelector("#smallimagetemplate").content;
//clone it
    const copy = template.cloneNode(true);
    //change content
   // copy.querySelector("").href = "product.html?id=" + product.id;
    copy.querySelector(
      ".artist"
    ).textContent = `${art.Artist}`;
    copy.querySelector(
      ".place"
    ).textContent = `${art.Place}`;
    copy.querySelector(
      ".artist"
    ).textContent = `${art.artist}`;
    copy.querySelector("h2").textContent = art.Name;
    copy.querySelector(
      "img"
    ).src = `"https://allmara.dk/kea/pic/images/${art.id}.jpg`;
    copy.querySelector("img").alt = art.Name;
  
    //     //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
  }
  

  