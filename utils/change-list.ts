enum Status {
  Unchanged,
  Added,
  Updated,
  Removed,
}

type ChangeType<T> = T & { status: Status };

export class ChangeList<T> {
  private items: ChangeType<T>[];

  constructor(list: T[]) {
    this.items = list.map((x) => ({ ...x, status: Status.Unchanged }));
  }

  add(item: T): void {
    this.items.push({
      ...item,
      status: Status.Added,
    });
  }

  remove(index: number): void {
    const item = this.items[index];
    if (item.status === Status.Added) {
      this.items = this.items.splice(index);
      return;
    }

    this.items = this.items.map((item, i) => {
      return i === index
        ? {
            ...item,
            status: Status.Removed,
          }
        : item;
    });
  }
}
