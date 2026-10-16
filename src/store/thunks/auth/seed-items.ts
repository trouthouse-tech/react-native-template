import type { Item } from '@/src/model';

export const SEED_ITEMS: Item[] = [
  { id: 'item-1', title: 'Sample item one', description: 'First seeded row for the template.' },
  { id: 'item-2', title: 'Sample item two', description: 'Open via thunk + root stack detail.' },
  { id: 'item-3', title: 'Sample item three', description: 'Uses currentItem, not route params.' },
];
