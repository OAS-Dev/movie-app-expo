export class Formatter {
  static formatCurrency(value: number) {
    return new Intl.NumberFormat('es-US', {style: 'currency', currency: 'USD'}).format(value);
  }
}
