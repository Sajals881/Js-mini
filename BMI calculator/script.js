const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const Height = parseInt(document.querySelector("#Height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const results = document.querySelector("#results");

  if (Height === "" || Height < 0 || isNaN(Height)) {
    results.innerHTML = `please give valid input ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `please give valid input ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
}); 
