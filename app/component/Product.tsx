import Image from "next/image";

const Product = ({ name, image, unit_amount, id, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Image src={image} alt={name} width={300} height={300} />
    </div>
  );
};

export default Product;
