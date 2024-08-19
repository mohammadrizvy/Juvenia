import { Pagination } from "@nextui-org/react";
import React from "react";
import { MyButton } from "../../MyButton/MyButton";

const PaginationButton = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex flex-col items-center gap-5 mb-5">
      <p className="text-small text-default-500">
        {/* Selected Page: {currentPage} */}
      </p>
      <Pagination
      color="default"
        total={20}
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <MyButton
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </MyButton>
        <MyButton
          size="sm"
          variant="flat"
          color="primary"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
        >
          Next
        </MyButton>
      </div>
    </div>
  );
};

export default PaginationButton;
