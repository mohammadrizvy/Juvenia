import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ProductAccordion() {
  const descriptionContent =
    "Our products are crafted with the finest materials and attention to detail. Each item is designed to offer style, comfort, and durability. Explore the features and benefits of our collection.";

  const recommendationsContent =
    "Pair this product with our best-selling accessories for a complete look. Customers often purchase this item with our stylish belts, shoes, and watches to enhance their outfit.";

  return (
    <Accordion aria-label="Product Information">
      <AccordionItem
        key="1"
        aria-label="Product Descriptions"
        title="Product Descriptions"
        className="text-sm"
      >
        <div className="text-sm">
          {descriptionContent}
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Recommended Combinations"
        title="Recommended Combinations"
        className="text-sm"
      >
        <div className="text-sm">
          {recommendationsContent}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
