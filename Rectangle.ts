export class Rectangle {
  constructor(public length?: number, public width?: number) {}
  Rectangle(length?: number, width?: number): void | number | string {
    if (length || width) return `Length:${length} Width:${width}`;
    return `Length:${1} Width:${1}`;
  }
}
