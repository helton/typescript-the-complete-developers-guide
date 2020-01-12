import { Sortable } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { ArrayCollection } from './ArrayCollection';
import { LinkedList } from './LinkedList';
import { Printable } from './Printable';

let collections: (Sortable & Printable)[] = [
  new ArrayCollection([10, 3, 0, -5]),
  new ArrayCollection([false, true, false, true, true]),
  new ArrayCollection([12.22, -3.14, 0.4, -0.3]),
  new CharactersCollection('XaabY'),
  new LinkedList()
    .add(500)
    .add(-10)
    .add(-3)
    .add(4)
];

collections.forEach(collection => {
  console.log('[BEFORE]');
  collection.print();
  console.log('[AFTER]');
  collection.bubbleSort();
  collection.print();
  console.log('-------------');
});
