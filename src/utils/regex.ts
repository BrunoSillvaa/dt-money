export function formateVallue(value: number) {
  return value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace('-', '- R$');
}