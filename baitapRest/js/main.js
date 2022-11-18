const getMyEle = (ele) => document.getElementById(ele);
const bt2 = (...params) => {
  let total = 0;
  for (let i = 0; i < params.length; i++) {
    total += params[i];
  }
  return total / params.length;
};

getMyEle("btnKhoi1").addEventListener("click", () => {
  const math = +getMyEle("inpToan").value;
  const physic = +getMyEle("inpLy").value;
  const chemsistry = +getMyEle("inpHoa").value;
  let result1 = bt2(math, physic, chemsistry);
  getMyEle("tbKhoi1").innerHTML = result1;
});

getMyEle("btnKhoi2").addEventListener("click", () => {
  const literature = +getMyEle("inpVan").value;
  const history = +getMyEle("inpSu").value;
  const geography = +getMyEle("inpDia").value;
  const english = +getMyEle("inpEnglish").value;
  var result2 = bt2(literature, history, geography, english);
  getMyEle("tbKhoi2").innerHTML = result2;
});
