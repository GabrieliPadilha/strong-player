const path = function(file){
    return `../files/${file}`;
};


if (typeof window !== "undefined"){
  window.addEventListener("load", player.start());
}