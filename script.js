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
    console.log(data);
  })