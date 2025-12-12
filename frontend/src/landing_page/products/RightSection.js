import React from "react";

function Right({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 p-5 mt-5">
                <h1 className="text-muted fs-3 mb-4">{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={learnMore}>
                    Learn More
                    </a>
                </div>
            </div>
            <div className="col-6">
                <img src={imageURL} />
            </div>
        </div>
    </div>
  );
}

export default Right;
