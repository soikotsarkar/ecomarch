import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = ({product,btnUseToCart}) => {
 const  {name,img,price,seller,ratings} = product;
	return (
		<div className='product'>
		<div className='product-info'>
		<img src={img} alt='img'></img>
			<p className='product-name'>{name}</p>
			<p>Price:{price}$</p>
			<p><small>Seller:{seller}</small></p>
			<p><small>Ratings:{ratings} stars</small></p>
		</div>
		<button onClick = {()=>btnUseToCart(product)} className='btn-cart'>
			<p className='btn-text'>Add to Cart</p>
			<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
		</button>
		</div>
	);
};

export default Product;