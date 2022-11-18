var ex3 = () => {
  var head = document.querySelector(".heading").innerText;
  console.log(head);
  let content = "";
  let string = [...head];
  for (let i in string) {
    content += `<span>${string[i]}</span>\n`;
  }
  document.querySelector(".heading").innerHTML = content;
};

window.onload = () => {
  ex3();
};
