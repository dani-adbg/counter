const doc = document;

addEventListener('DOMContentLoaded', () => {
  const num = doc.querySelector("#num");

  num.innerHTML=0;

  const au = doc.querySelector("#au");
  const dis = doc.querySelector("#dis");
  const res = doc.querySelector("#res");

  au.addEventListener("click", () => {
    num.innerHTML=`${parseInt(num.textContent) + 1}`;
  });

  dis.addEventListener("click", () => {
    num.innerHTML=`${parseInt(num.textContent) - 1}`;
  });

  res.addEventListener("click", () => {
    num.innerHTML=0;
  });
});