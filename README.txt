PROJECT START DATE:     2023-01-15  @ 10:00PM 

DATE MODIFIED:          2023-01-15  @ 10:00PM - 10:30PM
    - changed project version to 0.0.1 in package.json 
    - created the content-interface.ts script
    - created the content-list.ts script


--------- PRODUCTIVITY BREAK ------------------


DATE MODIFIED:          2023-01-15  @ 10:35PM - 10:30PM
    - generated Content-card component -----------------> ng generate c Content-card

DATE MODIFIED:          2023-01-16  @ 5:35PM - 6:30PM
    - added new custom component to homepage of application




class MyContentList extends ContentList {
    constructor() {
        super();
        // creating 3 valid content items
        const item1: Content = {
            id: 1,
            title: 'First Item',
            description: 'This is the first item',
            creator: 'John Doe',
            imgURL: 'https://example.com/image1.jpg',
            type: 'Type A',
            tags: ['tag1', 'tag2']
        };
        const item2: Content = {
            id: 2,
            title: 'Second Item',
            description: 'This is the second item',
            creator: 'Jane Doe',
            imgURL: 'https://example.com/image2.jpg',
            type: 'Type B',
            tags: ['tag3', 'tag4']
        };
        const item3: Content = {
            id: 3,
            title: 'Third Item',
            description: 'This is the third item',
            creator: 'John Smith',
            type: 'Type C',
        };
        // Adding the items to the content list using the add function
        this.add(item1);
        this.add(item2);
        this.add(item3);
    }
}

const myContentList = new MyContentList();
console.log(myContentList.count());  // 3


1. create template
2. reference ToDo List