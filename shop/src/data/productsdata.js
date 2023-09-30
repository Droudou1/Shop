/*THIS IS A DOCUMENTATION OF HOW YOU CAN ADD PRODUCTS:..
  In order to Add a product to the site You'll need to add some code which i will provide in a specific place:
  First thing you have to do is to prepare the information of the product  price/name/img(which should be downloaded in 
    the productimgs folder with the name defaultcolor-productname.example: black-robe)
    in the example below you must copy everything as it is and then change the information
  {
  id: 'you can write any random id composed from caracteres and numbers that is different from others',
  image: 'you write the image name .jpg or png or whatever the img is (example: 'Shoes.jpg')',
  name:'the name of the product to be displayed',
  priceinCents: price in cents example 999 = $9.99,
  shippingDate: "Estimated Shipping date ",
  if the product has different colors you need to do this line:
  colors:['Choose Color','brown','black','blue'],('Choose Color', must always be there and then the colors for the product)
  if the product has different sizes you need to do this line:
  sizes: ['Choose size','Small','Large'],('Choose size',must always be there and then the sizes available for the product)
  permitedquantity: [1,2,3,4,5,6], permited quantity is the list of quantites that the buyer can add at once 
  stock: 99, the stock of the product
  also if the product has different colors this line is a must:
  defaulcolor: 'black' You put the defaultcolor of the product that will appear first which is the same as the color you named the first
  img with
},

here is how a product with different colors and sizes will look:
  {
  id:'58jk5j',
  image:'robe.jpg',
  name: 'robe',
  priceinCents: 2014,
  shippingDate: "Estimated Shipping Date: July 4th",
  colors:['Choose Color','brown','black','blue'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2,3,4,5],
  stock: 55,
  defaulcolor: 'black'
},

You will also bring the imgs of the product with the colors you put in the list and name them color-productname same as first one
and put them in the same file 'productimgs'

YOU MUST WRITE EVERYTHING AS THE INSTRUCTIONS COMMAND Don't Add any uppercase or lowercase and don't remove any
BETWEEN TWO PRODUCTS THERE MUST BE A (,) as you can see in the existing products

YOU WILL FIRST WRITE THIS PRODUCT IN THE products list (the first one and the biggest one)AND THEN COPY IT 
IN WHATEVER CATEGORY LIST YOU WANT(electronics-toys-etc...)



  IF YOU WANT TO ADD A NEW CATEGORY AND FILTER first create a list with the name of that category  productslistname example productstoys
   export const productstoys = []
   and then follow the first documentation to add products to that list and don't forget to also add the product to products list
   that has all the products
    AND THEN BROWSE TO src/Components/Filters.jsx  To COMPLETE THE INSTRUCTIONS...
*/ 







export const products = [{
  id: '41ij8g',
  image: 'shoes.jpg',
  name:'Shoes',
  priceinCents: 1541,
  shippingDate: "Estimated Shipping Date: July 6th",
  sizes: ['Choose size','1','2','3','4','5'],
  permitedquantity: [1,2,3,4,5,6],
  stock: 2,
  country:'Tunisia',
},{
  id:'58jk5j',
  image:'robe.jpg',
  name: 'robe',
  priceinCents: 2014,
  shippingDate: "Estimated Shipping Date: July 4th",
  colors:['Choose Color','brown','black','blue'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2,3,4,5],
  stock: 55,
  defaulcolor: 'black',
  country:'France',
},{
  id: '791sa2e',
  image:'classic-leather-jacket.jpg',
  name:'Classic-man-leather-jacket',
  priceinCents: 1700,
  shippingDate: "Estimated Shipping Date: June 28th",
  colors:['Choose Color','black'],
  sizes: ['Choose size','Small'],
  permitedquantity: [1,2,3],
  stock: 32,
  defaulcolor: 'black',
  country:'USA',
},{
  id:'z47rt',
  image:'coat.jpg',
  name:'Coat',
  priceinCents: 2499,
  shippingDate: "Estimated Shipping Date: July 1st",
  colors:['Choose Color','brown','white','black'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2],
  stock: 42,
  defaulcolor: 'brown',
  country:'Sweeden',
},{
  id: 'ui4i1s',
  image:'Man-Tshirt.jpg',
  name:'Man-cotton-T-shirt',
  priceinCents: 1875,
  shippingDate: "Estimated Shipping Date: June 10th",
  colors:['Choose Color','black','blue','white'],
  sizes: ['Choose size','Small','Large','X-Large'],
  permitedquantity: [1,2,3,4,5,6,7,8],
  stock: 111,
  defaulcolor: 'blue',
  country:'Uk',
},{
  id:'cpu566',
  image:'sport-short.jpg',
  name:'Man-Sport-Short ',
  priceinCents: 1239,
  shippingDate: "Estimated Shipping Date: June 12th",
  colors:['Choose Color','black','gray'],
  sizes: ['Choose size','Small','Large','Medium'],
  permitedquantity: [1,2,3,4,5],
  stock: 105,
  defaulcolor: 'black',
  country:'Tunisia',
},{
  id:'x4d6g9',
  image:'pant.jpg',
  name:'Pants',
  priceinCents: 999,
  shippingDate: "Estimated Shipping Date: June 20th",
  colors:['Choose Color','brown','black','blue'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2,3],
  stock: 86,
  defaulcolor: 'brown',
  country:'USA',
},{
  id: 'siu435',
  image:'ring1.jpg',
  name:'Silver Ring',
  priceinCents:2500,
  shippingDate:"Estimated Shipping Date: June 24th",
  permitedquantity: [1,2],
  stock: 22,
  country:'Tunisia',
},{
  id: 'col1f5',
  image:'ring2.jpg',
  name:'Gold Ring',
  priceinCents:3000,
  shippingDate:"Estimated Shipping Date: June 28th",
  permitedquantity: [1,2],
  stock: 25,
  country:'Tunisia',

},{
  id: 'ff89mm5',
  image:'pc1.jpg',
  name:'Pc and Mouse',
  priceinCents:4000,
  shippingDate:"Estimated Shipping Date: June 28th",
  permitedquantity: [1],
  stock: 15,
  country:'Tunisia',
},{
  id: 'ph2o14',
  image:'iphone14.jpg',
  name:'iphone14',
  priceinCents:80000,
  shippingDate:"Estimated Shipping Date: June 24th",
  colors:['Choose Color','black','white','gold'],
  permitedquantity: [1],
  stock: 0,
  defaulcolor:'white',
  country:'Tunisia',
},{
  id: 'll9ks5',
  image:'bracelet1.jpg',
  name:'Bracelet',
  priceinCents:1900,
  shippingDate:"Estimated Shipping Date: august 2th",
  permitedquantity: [1,2,3],
  stock: 22,
  country:'Tunisia',
},{
  id: 'ok88jh',
  image:'bracelet2.jpg',
  name:'Bracelet 2',
  priceinCents:2200,
  shippingDate:"Estimated Shipping Date: august 8th",
  permitedquantity: [1,2,3],
  stock: 31,
  country:'Tunisia',
},{
  id: 'hhlf55t',
  image:'toy1.jpg',
  name:'Toy',
  priceinCents:1000,
  shippingDate:"Estimated Shipping Date: august 1th",
  permitedquantity: [1,2,3,4],
  stock: 44,
  country:'Tunisia',
},{
  id: 'ps5tfg',
  image:'toy2.jpg',
  name:'kids toy',
  priceinCents:900,
  shippingDate:"Estimated Shipping Date: august 4th",
  permitedquantity: [1,2,3,4],
  stock: 48,
  country:'Tunisia',
},{
  id: 'ps5tfgss',
  image:'table.jpg',
  name:'wooden table',
  priceinCents:3000,
  shippingDate:"Estimated Shipping Date: august 8th",
  permitedquantity: [1,2],
  stock: 48,
  country:'Tunisia',
}];






export const productselectronics = [{
  id: 'ff89mm5',
  image:'pc1.jpg',
  name:'Pc and Mouse',
  priceinCents:4000,
  shippingDate:"Estimated Shipping Date: June 28th",
  permitedquantity: [1],
  stock: 15,
  country:'Tunisia',
},{
  id: 'ph2o14',
  image:'iphone14.jpg',
  name:'iphone14',
  priceinCents:80000,
  shippingDate:"Estimated Shipping Date: June 24th",
  colors:['Choose Color','black','white','gold'],
  permitedquantity: [1],
  stock: 0,
  defaulcolor:'white',
  country:'Tunisia',
}];

export const productsclothes = [{
  id: '41ij8g',
  image: 'shoes.jpg',
  name:'Shoes',
  priceinCents: 1541,
  shippingDate: "Estimated Shipping Date: July 6th",
  sizes: ['Choose size','1','2','3','4','5'],
  permitedquantity: [1,2,3,4,5,6],
  stock: 2,
  country:'Tunisia',
},{
  id:'58jk5j',
  image:'robe.jpg',
  name: 'robe',
  priceinCents: 2014,
  shippingDate: "Estimated Shipping Date: July 4th",
  colors:['Choose Color','brown','black','blue'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2,3,4,5],
  stock: 55,
  defaulcolor: 'black',
  country:'France',
},{
  id: '791sa2e',
  image:'classic-leather-jacket.jpg',
  name:'Classic-man-leather-jacket',
  priceinCents: 1700,
  shippingDate: "Estimated Shipping Date: June 28th",
  colors:['Choose Color','black'],
  sizes: ['Choose size','Small'],
  permitedquantity: [1,2,3],
  stock: 32,
  defaulcolor: 'black',
  country:'USA',
},{
  id:'z47rt',
  image:'coat.jpg',
  name:'Coat',
  priceinCents: 2499,
  shippingDate: "Estimated Shipping Date: July 1st",
  colors:['Choose Color','brown','white','black'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2],
  stock: 42,
  defaulcolor: 'brown',
  country:'Sweeden',
},{
  id: 'ui4i1s',
  image:'Man-Tshirt.jpg',
  name:'Man-cotton-T-shirt',
  priceinCents: 1875,
  shippingDate: "Estimated Shipping Date: June 10th",
  colors:['Choose Color','black','blue','white'],
  sizes: ['Choose size','Small','Large','X-Large'],
  permitedquantity: [1,2,3,4,5,6,7,8],
  stock: 111,
  defaulcolor: 'blue',
  country:'UK',
},{
  id:'cpu566',
  image:'sport-short.jpg',
  name:'Man-Sport-Short ',
  priceinCents: 1239,
  shippingDate: "Estimated Shipping Date: June 12th",
  colors:['Choose Color','black','gray'],
  sizes: ['Choose size','Small','Large','Medium'],
  permitedquantity: [1,2,3,4,5],
  stock: 105,
  defaulcolor: 'black',
  country:'Tunisia',
},{
  id:'x4d6g9',
  image:'pant.jpg',
  name:'Pants',
  priceinCents: 999,
  shippingDate: "Estimated Shipping Date: June 20th",
  colors:['Choose Color','brown','black','blue'],
  sizes: ['Choose size','Small','Large'],
  permitedquantity: [1,2,3],
  stock: 86,
  defaulcolor: 'brown',
  country:'USA',
}];

export const productsmiscellaneous = [{
  id: 'll9ks5',
  image:'bracelet1.jpg',
  name:'Bracelet',
  priceinCents:1900,
  shippingDate:"Estimated Shipping Date: august 2th",
  permitedquantity: [1,2,3],
  stock: 22,
  country:'Tunisia',

},{
  id: 'ok88jh',
  image:'bracelet2.jpg',
  name:'Silver Ring',
  priceinCents:2200,
  shippingDate:"Estimated Shipping Date: august 8th",
  permitedquantity: [1,2,3],
  stock: 31,
  country:'Tunisia',
  
},{
  id: 'siu435',
  image:'ring1.jpg',
  name:'Ring',
  priceinCents:2500,
  shippingDate:"Estimated Shipping Date: June 24th",
  permitedquantity: [1,2],
  stock: 22,
  country:'Tunisia',
},{
  id: 'col1f5',
  image:'ring2.jpg',
  name:'Gold Ring',
  priceinCents:3000,
  shippingDate:"Estimated Shipping Date: June 28th",
  permitedquantity: [1,2],
  stock: 25,
  country:'Tunisia',
},];

export const productstoys = [{
  id: 'hhlf55t',
  image:'toy1.jpg',
  name:'Toy',
  priceinCents:1000,
  shippingDate:"Estimated Shipping Date: august 1th",
  permitedquantity: [1,2,3,4],
  stock: 44,
  country:'Tunisia',
},{
  id: 'ps5tfg',
  image:'toy2.jpg',
  name:'kids toy',
  priceinCents:900,
  shippingDate:"Estimated Shipping Date: august 4th",
  permitedquantity: [1,2,3,4],
  stock: 48,
  country:'Tunisia',
}];

export const productsfurn = [{
  id: 'ps5tfgss',
  image:'table.jpg',
  name:'wooden table',
  priceinCents:3000,
  shippingDate:"Estimated Shipping Date: august 8th",
  permitedquantity: [1,2],
  stock: 48,
  country:'Tunisia',
}]


