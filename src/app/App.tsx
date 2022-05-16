import React from 'react';

import { BiSearch } from 'react-icons/bi'
import { FaTshirt } from 'react-icons/fa'

import Card from '../ui/components/Card';

import styles from './styles.module.scss';

import greenTshirt from "../assets/isolated-t-shirt-gb032c0a8a_640.png"
import lightPinkTshirt from "../assets/isolated-t-shirt-gd2b6d9a92_640.png"
import pinkTshirt from "../assets/isolated-t-shirt-ge8ca8758d_640.png"
import lightBrownWinterBoots from "../assets/winter-boots-g6ba3f638f_640.jpg"
import brownWinterBoots from "../assets/winter-boots-ge753c89fb_640.jpg"

function App() {
  const products = [
    {
      imagePath: greenTshirt,
      productName: "Green t-shirt",
      units: 140,
      price: 245.500
    },
    {
      imagePath: lightPinkTshirt,
      productName: "Light pink t-shirt",
      units: 155,
      price: 100.000
    },
    {
      imagePath: pinkTshirt,
      productName: "Pink t-shirt",
      units: 229,
      price: 2.340
    },
    {
      imagePath: lightBrownWinterBoots,
      productName: "Light brown winter boots",
      units: 436,
      price: 22.940
    },
    {
      imagePath: brownWinterBoots,
      productName: "Brown winter boots",
      units: 520,
      price: 3.999
    },
  ]
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div>
          <h2>store</h2>
          <span>600 products</span>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Catalog</li>
            <li>Orders</li>
            <li>Reports</li>
          </ul>
        </nav>

        <FaTshirt />
      </aside>

      <main>
        <div className={styles.topMenu}>
          <h1>Catalog</h1>
          <BiSearch />
        </div>

        <div className={styles.products}>
          {products.map(item =>
            <Card
              imagePath={item.imagePath}
              productName={item.productName}
              units={item.units}
              price={item.price}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
