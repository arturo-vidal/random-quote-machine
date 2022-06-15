const boton= document.getElementById("new-quote");
const quoteText= document.getElementById("text");
const quoteAuthor= document.getElementById("author")


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    const datos= data;
    function getRandom(){
      console.log("cliick");
      let ranNum= Math.floor(Math.random()*datos.length);
      quoteText.textContent= '"'+datos[ranNum].text+'"';
      quoteAuthor.textContent= '- '+datos[ranNum].author;
    }
    window.addEventListener("load", getRandom(event));
    boton.addEventListener("click", getRandom);
  });




