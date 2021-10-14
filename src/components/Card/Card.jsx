import React from "react";

function Card({ item }) {
  const { userId, id, title, body } = item;
  return (
    <div className="max-w-lg mx-auto min-h-full">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 min-h-full">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt={id}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 capitalize">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
