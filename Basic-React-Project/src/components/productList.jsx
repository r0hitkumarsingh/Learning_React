import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input style={{height : "30px"}}
        type="text" 
        placeholder="Search products" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <ul>
        {currentProducts.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button style={{margin:"5px"}} onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul> 
      <Pagination
        productsPerPage={productsPerPage} 
        totalProducts={filteredProducts.length} 
        paginate={paginate} 
      />
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductList;
