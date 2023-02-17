
let url = 'https://dummyjson.com/products';


let divRoot = document.querySelector('.root')


const render = products => {
const products_cards = products.map(({images,title,price,rating}) => {

      let productDiv = document.createElement('div');
      productDiv.classList.add('classDiv');
      

      let productImage = document.createElement('img');
      productImage.classList.add('classImg');
      productImage.src = images[0];
      console.log(images)
  

      let productTitle = document.createElement('h3');
      productTitle.classList.add('classTitle');
      productTitle.textContent = `Title: ${title}`;
     

      let productPrice = document.createElement('h3');
      productPrice.classList.add('classPrice');
      productPrice.textContent = `Price: ${price} $`;
     

      let productRating = document.createElement('div');
      productRating.classList.add('classRating');
      
      let string = "";
      for (let i = 1; i <= 5; i++) {
       if (i <  Math.round(rating)) {
        string += '<span class="fa fa-star active"></span>'
       }
        else {
            string += '<span class="fa fa-star "></span>'
           }
           productRating.innerHTML = string;
      }


      productDiv.append(productImage, productTitle, productPrice, productRating);
      divRoot.append(productDiv)
    })
};
    const apiUrl = (url) => {
        fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => render(json.products))
      }


    apiUrl()
