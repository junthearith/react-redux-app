import { Card } from "flowbite-react";

export function ProductCardDetail({image, title, description, price}) {
  return (
    <Card className="max-w-sm" horizontal>
      <img 
        src={
            image ||
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          }
          alt={title || "product image"} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title || "Unknown"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        ${price ? price : "unknown"}
      </p>
    </Card>
  );
}
