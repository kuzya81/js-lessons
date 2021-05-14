
const path = "/users/download/index.html";
function isHTML(string){
    const search_letters = "html";
    return string.slice(-4) === search_letters;
  
}

console.log(isHTML(path));

