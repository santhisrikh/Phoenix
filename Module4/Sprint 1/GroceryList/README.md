### Grocery List

![](https://imgur.com/pHzbUkt.png)
- Create a component GroceryData
- It should accept 
    - product image (avatar)
    - product_name
    - description
    - price
    - is_available(boolean )
        - if true then a button to show High Stock with green background-colour
        - if false then the same button to show Low Stock with red background-colour
- use the given JSON file to create the list of GroceryDetails
- on clicking add(+)  button increment the Qty and on clicking reduce(-) button decrement the Qty and update the Qty.
- **Display two cards per row.**
- store the data in the state.


```jsx
import data from "./data.json"
this.state = {
    data: [ ...data ]
}

```
```
use .map method to access the grocery objects(Ignore warnings related to key in console for now.)
this.state.data.map(item=>{
    return <GroceryData item ={item} />
})
```

Metrics:
- styling
- component design
- Good UI
- Divide the application into class and functional components.
- Use module CSS for styling

#### data.json
```json
[{
  "id": 1,
  "product_name": "Turkey - Breast, Double",
  "image_url": "http://dummyimage.com/200x200.jpg/dddddd/000000",
  "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
  "is_available": true,
  "price": 987
}, {
  "id": 2,
  "product_name": "Bread - Burger",
  "image_url": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
  "is_available": false,
  "price": 763
}, {
  "id": 3,
  "product_name": "Beans - Kidney White",
  "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
  "is_available": true,
  "price": 231
}, {
  "id": 4,
  "product_name": "Wine - Piper Heidsieck Brut",
  "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
  "is_available": true,
  "price": 970
}, {
  "id": 5,
  "product_name": "Lemonade - Strawberry, 591 Ml",
  "image_url": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
  "is_available": false,
  "price": 427
}, {
  "id": 6,
  "product_name": "Bread - Dark Rye",
  "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
  "is_available": false,
  "price": 847
}, {
  "id": 7,
  "product_name": "Turnip - White, Organic",
  "image_url": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
  "is_available": true,
  "price": 781
}, {
  "id": 8,
  "product_name": "Truffle - Peelings",
  "image_url": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  "is_available": false,
  "price": 505
}, {
  "id": 9,
  "product_name": "Lotus Leaves",
  "image_url": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
  "is_available": true,
  "price": 252
}, {
  "id": 10,
  "product_name": "Table Cloth 72x144 White",
  "image_url": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
  "is_available": false,
  "price": 662
}, {
  "id": 11,
  "product_name": "Soup - Campbells Beef Strogonoff",
  "image_url": "http://dummyimage.com/200x200.bmp/dddddd/000000",
  "description": "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
  "is_available": true,
  "price": 207
}, {
  "id": 12,
  "product_name": "Yoplait Drink",
  "image_url": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
  "is_available": false,
  "price": 319
}, {
  "id": 13,
  "product_name": "Capicola - Hot",
  "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
  "is_available": false,
  "price": 526
}, {
  "id": 14,
  "product_name": "Flour - All Purpose",
  "image_url": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
  "is_available": false,
  "price": 988
}, {
  "id": 15,
  "product_name": "Juice - Grapefruit, 341 Ml",
  "image_url": "http://dummyimage.com/200x200.jpg/dddddd/000000",
  "description": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
  "is_available": true,
  "price": 193
}, {
  "id": 16,
  "product_name": "Cheese - Victor Et Berthold",
  "image_url": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
  "is_available": true,
  "price": 358
}, {
  "id": 17,
  "product_name": "Tequila Rose Cream Liquor",
  "image_url": "http://dummyimage.com/200x200.bmp/ff4444/ffffff",
  "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
  "is_available": false,
  "price": 990
}, {
  "id": 18,
  "product_name": "Muffin - Zero Transfat",
  "image_url": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "description": "maecenas leo odio condimentum id luctus nec molestie sed justo",
  "is_available": true,
  "price": 331
}, {
  "id": 19,
  "product_name": "Shiratamako - Rice Flour",
  "image_url": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "in est risus auctor sed tristique in tempus sit amet",
  "is_available": true,
  "price": 361
}, {
  "id": 20,
  "product_name": "Pepper - Roasted Red",
  "image_url": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "justo eu massa donec dapibus duis at velit eu est congue elementum in",
  "is_available": false,
  "price": 942
}, {
  "id": 21,
  "product_name": "Wine - Magnotta - Bel Paese White",
  "image_url": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
  "is_available": false,
  "price": 770
}, {
  "id": 22,
  "product_name": "Cheese - Mascarpone",
  "image_url": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
  "description": "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
  "is_available": false,
  "price": 447
}, {
  "id": 23,
  "product_name": "Fish - Artic Char, Cold Smoked",
  "image_url": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "description": "proin at turpis a pede posuere nonummy integer non velit donec diam",
  "is_available": false,
  "price": 182
}, {
  "id": 24,
  "product_name": "Table Cloth 62x120 Colour",
  "image_url": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "description": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
  "is_available": false,
  "price": 551
}, {
  "id": 25,
  "product_name": "Pepper - Gypsy Pepper",
  "image_url": "http://dummyimage.com/200x200.bmp/ff4444/ffffff",
  "description": "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
  "is_available": false,
  "price": 638
}]
```