import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { MyButton } from "../MyButton/MyButton";

const SizeGuideModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      scrollBehavior="inside"
      size="4xl"
      backdrop="transparent"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col text-4xl gap-1 text-center">
            Size Guide
          </ModalHeader>
          <ModalBody>
            <p className="font-semibold ">
              If you're on the borderline between two sizes, order the smaller
              size for a tighter fit or the larger size for a looser fit.
            </p>
            <p className="mb-4 font-semibold ">
              If you still don't know which one you wanna choose, please contact
              us, we are glad to help you!
            </p>

            <div className="flex justify-center">
              <div className="w-full lg:w-3/4">
                <h2 className="font-bold mb-2 text-center">Tops/Outerwear</h2>
                <table className="w-full mb-4 text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Size</th>
                      <th className="text-left p-2">Height(ft)</th>
                      <th className="text-left p-2">Weight(lbs)</th>
                      <th className="text-left p-2">Height(cm)</th>
                      <th className="text-left p-2">Weight(kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        size: "XS/S",
                        heightFt: "4'11-5'5",
                        weightLbs: "88-121",
                        heightCm: "150-165",
                        weightKg: "40-55",
                      },
                      {
                        size: "S/M",
                        heightFt: "5'5-5'7",
                        weightLbs: "110-132",
                        heightCm: "165-170",
                        weightKg: "50-60",
                      },
                      {
                        size: "M/L",
                        heightFt: "5'7-5'9",
                        weightLbs: "132-154",
                        heightCm: "170-175",
                        weightKg: "60-70",
                      },
                      {
                        size: "L/XL",
                        heightFt: "5'9-5'11",
                        weightLbs: "154-176",
                        heightCm: "175-180",
                        weightKg: "70-80",
                      },
                      {
                        size: "XL",
                        heightFt: "5'11-6'1",
                        weightLbs: "176-187",
                        heightCm: "180-185",
                        weightKg: "80-85",
                      },
                      {
                        size: "XXL",
                        heightFt: "6'1-6'3",
                        weightLbs: "186-209",
                        heightCm: "185-190",
                        weightKg: "85-95",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{row.size}</td>
                        <td className="p-2">{row.heightFt}</td>
                        <td className="p-2">{row.weightLbs}</td>
                        <td className="p-2">{row.heightCm}</td>
                        <td className="p-2">{row.weightKg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h2 className="font-bold mb-2 text-center">
                  Women's Size Chart (Bottoms)
                </h2>
                <table className="w-full mb-4 text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Size</th>
                      <th className="text-left p-2">Waist (in)</th>
                      <th className="text-left p-2">Waist (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "XXS", waistIn: "24-27", waistCm: "62-68" },
                      { size: "XS", waistIn: "25-28", waistCm: "64-70" },
                      { size: "S", waistIn: "26-29", waistCm: "66-72" },
                      { size: "M", waistIn: "27-30", waistCm: "68-76" },
                      { size: "L", waistIn: "28-32", waistCm: "72-82" },
                      { size: "XL", waistIn: "31-36", waistCm: "78-92" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{row.size}</td>
                        <td className="p-2">{row.waistIn}</td>
                        <td className="p-2">{row.waistCm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h2 className="font-bold mb-2 text-center">
                  Men's Size Chart (Bottoms)
                </h2>
                <table className="w-full mb-4 text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Size</th>
                      <th className="text-left p-2">Waist (in)</th>
                      <th className="text-left p-2">Waist (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "XS", waistIn: "27-30", waistCm: "68-76" },
                      { size: "S", waistIn: "29-31", waistCm: "72-82" },
                      { size: "M", waistIn: "31-34", waistCm: "84-88" },
                      { size: "L", waistIn: "33-36", waistCm: "89-94" },
                      { size: "XL", waistIn: "35-38", waistCm: "94-102" },
                      { size: "XXL", waistIn: "37-40", waistCm: "96-104" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{row.size}</td>
                        <td className="p-2">{row.waistIn}</td>
                        <td className="p-2">{row.waistCm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <MyButton  size="md" color="primary" onPress={onClose}>
              Close
            </MyButton>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default SizeGuideModal;
