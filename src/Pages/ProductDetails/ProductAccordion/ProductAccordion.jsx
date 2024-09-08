import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ProductAccordion(item) {
  console.log("ProductAccordion : ", item.item.description);

  return (
    <Accordion aria-label="Product Information">
      <AccordionItem
        key="1"
        aria-label="Product Descriptions"
        title="Product Descriptions"
        className="text-sm"
      >
        <div className="text-sm">{item.item.description}</div>
      </AccordionItem>
    </Accordion>
  );
}
