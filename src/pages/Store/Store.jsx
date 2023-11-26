import React, { useState } from 'react';

import '../Store/Store.css';

import Header from '../../components/Header/Header';
import CartIcon from '../../assets/images/card.png';

import ImgMug from '../../assets/images/store/mug.png';
import ImgBook from '../../assets/images/store/book-esg.jpg';
import ImgPlanner from '../../assets/images/store/planner-esg.png';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const productsData = [
  {
    id: 1,
    nome: 'Agenda 2024',
    img: ImgPlanner,
    price: 100.00,
    descricao: 'Ótima para organizar seu dia!'
  },
  {
    id: 2,
    nome: 'Livro ESG',
    img: ImgBook,
    price: 50.00,
    descricao: 'Vamos falar de ESG?'
  },
  {
    id: 3,
    nome: 'Caneca Ecológica',
    img: ImgMug,
    price: 80.00,
    descricao: 'Perfeita para tomar seu café ☕!'
  },
];

const Store = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <h1 className='title-loja'>LOJA GREENQUEST  </h1>
      <div className='products'>
        {productsData.map((product) => (
          <div className='card-box' key={product.id}>
            <h1 className='card-title'>{product.nome}</h1>
            <img src={product.img} alt='Agenda' />
            <h3 className='title-price'>R${product.price}</h3>
            <p className='card-describe'>{product.descricao}</p>
            <button className='button-buy' onClick={() => addToCart(product)}>COMPRAR</button>
          </div>
        ))}
      </div>
    </>
  )

  const renderCart = () => (
    <>
      <h1 className='title-lojacart'>CARRINHO</h1>
      <div className='products-cart'>
        {cart.map((product) => (
          <div className='card-box' key={product.id}>
            <h1 className='card-title'>{product.nome}</h1>
            <img src={product.img} alt='Agenda' />
            <h3 className='title-price'>R${product.price}</h3>
            <p className='card-describe'>{product.descricao}</p>
            <button className='button-remove' onClick={() => removeCart(product)}>REMOVER ITEM</button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <>
      <Header />
      <button className='cart' onClick={() => navigateTo(PAGE_CART)}>
        <img src={CartIcon} alt="Carrinho de compras" className='icon' />
        ({cart.length})
      </button>
      <button className='button-product' onClick={() => navigateTo(PAGE_PRODUCTS)}>VER PRODUTOS</button>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </>
  )
};

export default Store;
