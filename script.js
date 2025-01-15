let names=document.getElementById("name-span")

colors=['red','green','blue']

let i=0;
function changeColor(){
  setInterval(()=>{
    if(i<3){
    names.style.color=colors[i++];}
    else{
      i=0;
    }
  },2000)
}

changeColor();

const css_r=document.getElementById("css-r")
const css_p=document.getElementById("css-percent")

css_p.innerText=css_r.style.getPropertyValue('--skill-percent')

document.getElementById("html-percent").innerText=document.getElementById("html-r").style.getPropertyValue("--skill-percent")

document.getElementById("js-percent").innerText=document.getElementById("js-r").style.getPropertyValue("--skill-percent")

document.getElementById("mysql-percent").innerText=document.getElementById("mysql-r").style.getPropertyValue("--skill-percent")

document.getElementById("react-percent").innerText=document.getElementById("react-r").style.getPropertyValue("--skill-percent")

document.getElementById("mongo-percent").innerText=document.getElementById("mongo-r").style.getPropertyValue("--skill-percent")

document.getElementById("express-percent").innerText=document.getElementById("express-r").style.getPropertyValue("--skill-percent")

document.getElementById("node-percent").innerText=document.getElementById("node-r").style.getPropertyValue("--skill-percent")

document.getElementById("java-percent").innerText=document.getElementById("java-r").style.getPropertyValue("--skill-percent")

document.getElementById("python-percent").innerText=document.getElementById("python-r").style.getPropertyValue("--skill-percent")

const anime=document.getElementById('animated-text')

