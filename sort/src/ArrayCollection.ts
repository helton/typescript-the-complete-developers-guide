import { Sorter } from './Sorter';
import { Printable } from './Printable';

export class ArrayCollection<T> extends Sorter implements Printable {
  constructor(public data: T[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex]
    ];
  }

  print(): void {
    console.log('<ArrayCollection>', this.data);
  }
}
