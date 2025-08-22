//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

for (let i = 1; i <= 500; i++) {
  if (i % 4 === 0) {
    document.write(`<p>${i} (es multiplo de 4)</p>`);
  } else if (i % 9 === 0) {
    document.write(`<p>${i} (es multiplo de 9)</p>`);
  }
  if (i % 5 === 0) {
    document.write(`<p>${i}</p>`);
    document.write(`<p>---------------------------------------------</p>`);
  } else {
    document.write(`<p>${i}</p>`);
  }
}
