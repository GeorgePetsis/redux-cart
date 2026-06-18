import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "This is the first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My second book",
    description: "This is the second book I ever wrote",
  },
  {
    id: "p3",
    price: 7,
    title: "My third book",
    description: "This is the third book I ever wrote",
  },
  {
    id: "p4",
    price: 10,
    title: "My fourth book",
    description: "This is the fourth book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      {DUMMY_PRODUCTS.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </section>
  );
};

export default Products;
