export class InvoiceItem {
  constructor(
    public id: string,
    public desc: string,
    public qty: number,
    public unitPrice: number
  ) {}
  getID() {
    return this.id;
  }
  getDesc() {
    return this.desc;
  }
  getQty() {
    return this.qty;
  }
  getUnitPrice() {
    return this.unitPrice;
  }
  setQty(num: number) {
    return (this.qty = num);
  }
  setUnitPrice(price: number) {
    return (this.unitPrice = price);
  }
  getTotal() {
    return this.unitPrice * this.qty;
  }
}
