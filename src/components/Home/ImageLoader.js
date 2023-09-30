import { useState } from "react";
import "./ImageLoader.scss";
import Button from "./Button";
export default function ImageLoader({ products }) {
  let Imagescount = 6;
  const [next, setNext] = useState(Imagescount);
  const handleMore = () => {
    setNext(next + Imagescount);
  };

  return (
    <div className="product">
      {products.length ? (
        products.slice(0, next).map((value) => (
          <div className="card" key={value.id}>
            <img src={value.image} alt={value.title} />
            <p className="title">{value.title}</p>
            <p className="title">{value.price}&euro;</p>
            <Button value={value} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {next < products.length ? (
        <button className="LoadMoreBtn" onClick={handleMore}>
          Load more
        </button>
      ) : (
        <p>That's All Folks</p>
      )}
    </div>
  );
}
