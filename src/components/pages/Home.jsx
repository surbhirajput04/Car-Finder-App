import { useState, useEffect } from 'react';
import CarCard from '../CarCard';
import Filters from '../Filters';
import { Pagination } from '@mui/material';

const Home = () => {
  const [cars, setCars] = useState([]); // Fetched car data
  const [loading, setLoading] = useState(true); // Loading state
  const [search, setSearch] = useState('');
  const [fuel, setFuel] = useState('');
  const [seating, setSeating] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const carsPerPage = 10;
  const [wishlist, setWishlist] = useState([]);

  // Fetch cars from MockAPI
  useEffect(() => {
    fetch('https://67fa81368ee14a542627e24b.mockapi.io/cars/carsdetails')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car) => {
    const exists = wishlist.find((c) => c.id === car.id);
    if (exists) {
      setWishlist(wishlist.filter((c) => c.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  // Filter + Search + Sort
  const filteredCars = cars
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .filter((car) => (fuel ? car.fuel.toLowerCase() === fuel.toLowerCase() : true))
    .filter((car) => (seating ? car.seats === parseInt(seating) : true))
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return 0;
    });

  // Pagination Logic
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (page - 1) * carsPerPage;
  const carsToShow = filteredCars.slice(startIndex, startIndex + carsPerPage);

  useEffect(() => {
    setPage(1); // Reset to page 1 when filters/search/sort change
  }, [search, fuel, seating, sort]);

  return (
    <div style={{ padding: '1rem' }}>
      <Filters
        search={search}
        setSearch={setSearch}
        fuel={fuel}
        setFuel={setFuel}
        seating={seating}
        setSeating={setSeating}
        sort={sort}
        setSort={setSort}
      />

      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {carsToShow.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlist.some((c) => c.id === car.id)}
              />
            ))}
          </div>

          {filteredCars.length > carsPerPage && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, val) => setPage(val)}
              color="primary"
              style={{ marginTop: '1rem' }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
