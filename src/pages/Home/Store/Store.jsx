import React, { useState } from 'react';
import agenda from './imgs/Agenda.webp';
import livro from './imgs/Livro2.jpg';
import caneca from './imgs/Caneca.jpg';
import './index.css'
import { Header } from '../../../shared/Header';
import  Cart  from '../../../assets/images/card.png'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

export function Store () {
    const [cart, setCart] = useState([]);
    const  [page, setPage] = useState(PAGE_PRODUCTS);
    const [products] = useState( [
        {
            id: 1,
            nome: 'Agenda 2024',
            img: agenda ,
            price: 100.00,
            descricao: 'Ótima para organizar seu dia!'
        },
    
        {
            id: 2,
            nome: 'Livro ESG',
            img: livro ,
            price: 50.00,
            descricao: 'Vamos falar de ESG?'

        },
    
        {
            id: 3,
            nome: 'Caneca Ecológica',
            img: caneca ,
            price: 80.00,
            descricao: 'Perfeita para tomar seu café ☕'

        },
    
        ]);
    
        const addToCart = (product) => {
setCart([...cart, {...product}]);

        };

        const removeCart = (productToRemove) => {
            setCart(cart.filter(product => product !== productToRemove));


        }


/*Página produtos*/
const navigateTo = (nextPage) => {
    setPage(nextPage);
};

        const renderProducts = () => (
            <>
                <h1 className='title-loja'>LOJA GREENQUEST  </h1>

            <div className='products'> 
            {products.map((product, idx) => (
            <>
            <div className='card-box' key={idx}>
            <h1 className='card-title'>{product.nome}</h1>
            <img src={product.img} alt='Agenda'/>
            <h3 className='title-price'>R${product.price}</h3>
            <p className='card-describe'>{product.descricao}</p>
            <button className='button-buy' onClick={() => addToCart(product) }>COMPRAR</button>
            </div>
            
            </>
            
            ))};
            </div>
            </>
        
        )

        /*Página carrinho*/

        const renderCart = () => (
            <>
            <h1 className='title-lojacart'>CARRINHO</h1>
                <div className='products-cart'> 
                {cart.map((product, idx) => (
            
                <div className='card-box' key={idx}>
                <h1 className='card-title'>{product.nome}</h1>
                <img src={product.img} alt='Agenda'/>
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
    <Header/>
    <button className='cart' onClick={() => navigateTo(PAGE_CART)}><img src={Cart} alt="Carinhho de compras" className='icon'/>({cart.length}) </button>
    <button className='button-product' onClick={() => navigateTo(PAGE_PRODUCTS)} >VER PRODUTOS</button>

        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}

    </>
    )}; 
