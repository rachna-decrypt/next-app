
const Slug = async () => {
  const prods = await getProducts();
  return (
    <div>
      <ul>
        {prods.map((p: any) => {
          return <li>{p.title}</li>;
        })}
      </ul>
    </div>
  );
};

const getProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products",
  );
  const product = await response.json();
  return product.products;
};

export default Slug;
