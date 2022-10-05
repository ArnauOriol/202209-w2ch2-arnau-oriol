export const strictEquals = (valor1, valor2) => {
  if (
    Object.is(typeof valor1, "number") &&
    Object.is(typeof valor2, "number")
  ) {
    if (Number.isNaN(valor1) && Number.isNaN(valor2)) {
      return [valor1, valor2, false];
    }
    if (valor1 <= 0 && valor2 <= 0) {
      return [valor1, valor2, true];
    }
  }
  return [valor1, valor2, Object.is(valor1, valor2)];
};
