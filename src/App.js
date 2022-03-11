import React from "react";
import "./styles.css";

import faker from "faker";

faker.seed(123);

const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

export default function App() {
  return (
    <>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        <div class="filter-and-category megaContainer">
          <div class="topContainer flex-space-between">
            <h3>Filters</h3>
            <p>Clear</p>
          </div>

          <div class="input scroll-input display-flex">
            <h4>Price</h4>
            <div class="price-range display-flex">
              <p>50</p>
              <p>150</p>
              <p>200</p>
            </div>

            <input
              type="range"
              id="range-input"
              min="0"
              max="100"
              defaultValue="10"
            />
          </div>

          <div class="checheckbox-list column-flex-start">
            <div class="list-title">
              <p>Delivery</p>
            </div>

            <div class="checkbox-list-items column-flex-start">
              <div class="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label for="item-1">Include Out of stock</label>
              </div>
              <div class="list-item">
                <input id="item-2" type="checkbox" name="checkbox-input" />
                <label for="item-1">Fast delivery only</label>
              </div>
            </div>
          </div>

          <div class="radio-list radio-category spacing-s column-flex-start">
            <div class="list-title">
              <p>Sort By</p>
            </div>

            <div class="radio-list-items">
              <div class="list-item">
                <input id="item-1" type="radio" name="radio-input-2" />
                <label for="item-1">Price-Low to High</label>
              </div>
              <div class="list-item">
                <input id="item-2" type="radio" name="radio-input-2" />
                <label for="item-1">Price-High to Low</label>
              </div>
            </div>
          </div>
        </div>
        {data.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem",
                maxWidth: "300px",
                maxHeight: "500px"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
