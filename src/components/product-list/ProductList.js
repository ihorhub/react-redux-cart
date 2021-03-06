import React from 'react'
import './index'
import { ProductItem } from '../product-item'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleItemInWishList, toggleItemInCart } from '../../redux'

export const ProductList = ({ products }) => {
  const dispatch = useDispatch()

  const wishlist = useSelector(({ wishlist: { wishlist } }) => wishlist)
  const cart = useSelector(({ cart: { cart } }) => cart)

  const onAddToWishlist = (product) => {
    dispatch(toggleItemInWishList(product))
  }
  const onAddToCart = (product) => {
    dispatch(toggleItemInCart(product))
  }

  return (
    <div className="list-wrapper">
      {products.map((product) => (
        <ProductItem
          isAddedTOWishlist={!!wishlist.find(({ id }) => id === product.id)}
          isAddedTOCart={!!cart.find(({ id }) => id === product.id)}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  )
}
