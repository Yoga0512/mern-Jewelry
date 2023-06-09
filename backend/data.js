import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: "Yoga",
      email: "admin@example.com",
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: "Vaibhav",
      email: "user@example.com",
      password: bcrypt.hashSync('654321'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Gold-Floral-ring',
      slug: 'gold-floral-ring',
      category: 'Rings',
      image: '/images/ring1.jpg',
      price: 700.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'Great design ring',
    },
    {
      // _id: '2',
      name: 'Gold-Heart-ring',
      slug: 'gold-heart-ring',
      category: 'Rings',
      image: '/images/ring2.jpg',
      price: 2643.00,
      countInStock: 0,
      rating: 3.0,
      numReviews: 10,
      description: 'Great design ring',
    },
    {
      // _id: '3',
      name: 'Gold-Daisy-Chain',
      slug: 'gold-daisy-Chain',
      category: 'Chains',
      image: '/images/chain1.jpg',
      price: 1999.00,
      countInStock: 20,
      rating: 4.3,
      numReviews: 10,
      description: 'Great design chain',
    },
    {
      // _id: '4',
      name: 'Gold-Ohm-chain',
      slug: 'gold-ohm-chain',
      category: 'Chains',
      image: '/images/chain2.jpg',
      price: 2999.00,
      countInStock: 10,
      rating: 3.7,
      numReviews: 8,
      description: 'Great design chain',
    },
  ],
};
export default data;
