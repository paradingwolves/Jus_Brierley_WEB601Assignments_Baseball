/* import { Content } from "./content-interface";

export class ContentList {

    // initialize content count
    static contentCount = 0;
    // private property to store array of Content
    private _items:  Content[];
    
    // constructor function to initialize the array as an empty array
    constructor(item: Content){
        this._items = [];
    }

    increaseCount(){
        return ++ContentList.contentCount;
    }

    // getter function to return the content array
    getContent(): Content[] {
        return this._items;
    }

    // function to add a content item to the array
    public add(item: Content): void {
        this._items.push(item);
    }
    // function to return the number of items in the array
    count(): number {
        return this._items.length;
    }
    
    // function to display the content item at a given index in reader-friendly HTML format
    displayAtIndex(index: number) {
        // check if the index is valid
        if (index < 0 || index >= this._items.length) {
            alert("Invalid index");
        }
        // get the content item at the given index
        const item = this._items[index];
      
        // return the item in reader-friendly HTML format
        return `<h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>By ${item.creator}</p>
                <img src="${item.imgURL}" alt="${item.title}">
                <p>Type: ${item.type}</p>`;
    }
} */