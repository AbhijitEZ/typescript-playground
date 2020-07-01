//==========================================================
// HTML Class Template
//==========================================================
export class ListTemplate {
  constructor(private container: HTMLUListElement, item?: HTMLLIElement) {
    if (item) this.render(item);
  }

  createItem(text: string): HTMLLIElement {
    let listItem = document.createElement("li");
    listItem.innerText = text;
    this.render(listItem);

    return listItem;
  }

  render(listItem: HTMLLIElement) {
    this.container.append(listItem);
  }
}
