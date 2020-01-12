import { Sorter } from './Sorter';
import { Printable } from './Printable';

type Nullable<T> = T | null;

class CustomNode<T> {
  next: Nullable<CustomNode<T>> = null;
  constructor(public data: T) {}
}

export class LinkedList<T> extends Sorter implements Printable {
  private head: Nullable<CustomNode<T>> = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      node = node.next;
      length++;
    }
    return length;
  }

  add(data: T): LinkedList<T> {
    const node = new CustomNode(data);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;

    return this;
  }

  at(index: number): CustomNode<T> {
    if (!this.head) {
      throw new Error('Index Out of Bounds');
    }

    let counter = 0;
    let node: Nullable<CustomNode<T>> = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index Out of Bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty');
    }

    [this.at(leftIndex).data, this.at(rightIndex).data] = [
      this.at(rightIndex).data,
      this.at(leftIndex).data
    ];
  }

  print() {
    if (!this.head) {
      return;
    }

    let node: Nullable<CustomNode<T>> = this.head;
    let values: T[] = [];
    while (node) {
      values.push(node.data);
      node = node.next;
    }

    console.log('<LinkedList>', values);
  }
}
