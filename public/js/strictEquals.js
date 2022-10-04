export const strictEquals = (valor1, valor2) => {
  if (
    Object.is(typeof valor1, "number") &&
    Object.is(typeof valor2, "number")
  ) {
    if (Number.isNaN(valor1) && Number.isNaN(valor2)) {
      return false;
    }
    if (!Number.isNaN(valor1) && !Number.isNaN(valor2)) {
      valor1 += 1;
      valor2 += 1;
    }
  }
  return Object.is(valor1, valor2);
};
