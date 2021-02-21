const body = document.querySelector("body");
const IMAGE_NUM = 3;

function paintImage(imgNumber){
  const image = new Image();
  const src1 ="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
  const src2 = "https://images.unsplash.com/photo-1541918602878-4e1ebfc7b739?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80";
  const src3 = "https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8&w=1000&q=80";
  body.appendChild(image);
  switch(imgNumber){
    case 1:
      image.src=src1;
      break;
    case 2:
      image.src=src2;
      break;
    case 3:
      image.src=src3;
      break;
  }
  image.classList.add('bgImage');
  body.appendChild(image);
  

}

function generateRandom(){
  const number = Math.ceil(Math.random()*IMAGE_NUM);
  return number;
}

(function init(){
  const random = generateRandom();
  paintImage(random);
})();
