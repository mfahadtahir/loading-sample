let divs= document.getElementsByClassName("divs");
const startLoading = () => {
  console.log(divs)
  for (let i=0;i < divs.length; i++){
      callTimeout(i)
  }
}

let progress = document.getElementById("upload")

const callTimeout = (div) => {
  setTimeout(() => {
    progress.value+= 100/divs.length;
    document.getElementById("span-" + div).innerHTML = "&#9989;"
  }, Math.random()*10 * 1000);
}

const resetLoading = () => {
  for (let i=0;i < divs.length; i++){
    document.getElementById("span-"+i).innerHTML = "&#10060;"
  }
  progress.value = 0;
}