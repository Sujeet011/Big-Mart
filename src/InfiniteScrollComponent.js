import React, { useState, useEffect } from 'react';
import './ShoppingCard.css'; // Import your CSS for styling

const ItemCard = ({ title, description, price, image }) => {
  return (
    <div className="item-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">Price: ${price}</p>
    </div>
  );
};

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newData = await response.json();
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="product-list">
      {data.map((item, index) => (
        <ItemCard
          key={`${item.id}-${index}`} 
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
      {loading && <p className="loading">Loading more products...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
