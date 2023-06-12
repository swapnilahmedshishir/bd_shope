import React from 'react'

function product(props) {
  const {image,price,rating,description,title} = props.FkData;
console.log(props);
  return (
    
      <article className="product ">
      <img src={image} alt="product_imge" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='product__price'>Price: $ {price}</p>
        <p className='product__rating'>Rating: {rating.rate}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
    
      
   
  )
}
export default product