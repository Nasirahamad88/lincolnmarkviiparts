"use client"
import { useEffect, useState } from 'react';
import { client } from '@/app/lib/sanity';

const ProductsFilter = () => {
    const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getData = async () => {
      const fullQuery = `*[_type == 'product']`;
      try {
        const data = await client.fetch(fullQuery);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [categoryFilter, searchQuery, products]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-4 mb-4">Products</h1>
      <div className="flex-1 space-y-4 justify-between mb-4">
        <div className="w-1/2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Filter by Category:</label>
          <select id="category" value={categoryFilter} onChange={handleCategoryChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">All</option>
            <option value="body">Body</option>
            <option value="parts">Parts</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <li key={product._id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            {/* Render other product details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;