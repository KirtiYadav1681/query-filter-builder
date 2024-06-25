import React, { useState, useRef } from "react";
import { attributes, operations } from "../constants";
import { FaAngleDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const inputRef = useRef(null);
  const [triplets, setTriplets] = useState([]);
  const [dropdownType, setDropdownType] = useState("attributes");
  const [isEnteringValue, setIsEnteringValue] = useState(true);
  const [currentTriplet, setCurrentTriplet] = useState({
    attribute: "",
    operation: "",
    value: "",
  });

  const handleAttributeSelect = (attribute) => {
    setCurrentTriplet({ ...currentTriplet, attribute });
    setDropdownType("operations");
  };

  const handleOperationSelect = (operation) => {
    setCurrentTriplet({ ...currentTriplet, operation });
    setIsEnteringValue(true);
    inputRef.current.focus();
  };

  const handleValueInput = (event) => {
    setCurrentTriplet({ ...currentTriplet, value: event.target.value });
  };

  const handleDeleteTriplet = (index) => {
    const newTriplets = triplets.filter((_, i) => i !== index);
    setTriplets(newTriplets);
  };

  const handleEnter = () => {
    if (
      currentTriplet.attribute &&
      currentTriplet.operation &&
      currentTriplet.value
    ) {
      setTriplets([...triplets, currentTriplet]);
      setCurrentTriplet({ attribute: "", operation: "", value: "" });
    }
    setIsEnteringValue(false);
    setDropdownType("attributes");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    } else if (e.key === "Backspace") {
      if (currentTriplet.value === "") {
        if (currentTriplet.operation !== "") {
          setCurrentTriplet({ ...currentTriplet, operation: "" });
          setDropdownType("operations");
        } else if (currentTriplet.attribute !== "") {
          setCurrentTriplet({ ...currentTriplet, attribute: "" });
          setDropdownType("attributes");
        }
      }
    }
  };

  return (
    <div className="p-4 w-[60%]">
      <div className="relative">
        <div className="flex items-center border rounded-3xl p-2 w-full bg-slate-900">
          {triplets?.map((triplet, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm bg-slate-500 text-white p-1 rounded ml-2"
            >
              <span className="mr-1">{`${triplet.attribute} ${triplet.operation} ${triplet.value}`}</span>
              <button
                className="text-slate-950"
                onClick={() => handleDeleteTriplet(index)}
              >
                <RxCross1 />
              </button>
            </div>
          ))}
          <span className="flex items-center text-sm text-gray-200 ml-2">{`${currentTriplet.attribute} ${currentTriplet.operation}`}</span>
          <input
            name="query"
            type="text"
            className="flex-grow border-none outline-none bg-slate-900 text-slate-400 pl-1 w-[20%]"
            placeholder={
              currentTriplet.attribute || triplets.length > 0
                ? ""
                : "Select options from suggested values for attributes and operations and then press 'Enter' after writing the value"
            }
            value={currentTriplet.value}
            ref={inputRef}
            onClick={() => setIsEnteringValue(false)}
            onFocus={() => setDropdownType("attributes")}
            onChange={handleValueInput}
            onKeyDown={handleKeyDown}
          />
          <FaAngleDown
            size={20}
            color="white"
            onClick={() => setIsEnteringValue(false)}
            className="cursor-pointer pl-1 pr-2"
          />
        </div>
        {!isEnteringValue && (
          <div className="absolute border rounded-3xl mt-1 w-full bg-slate-900 text-slate-400 p-1">
            {dropdownType === "attributes" &&
              attributes.map((attr) => (
                <div
                  key={attr}
                  className="p-2 hover:bg-gray-700 cursor-pointer rounded-3xl"
                  onClick={() => handleAttributeSelect(attr)}
                >
                  {attr}
                </div>
              ))}
            {dropdownType === "operations" &&
              operations.map((op) => (
                <div
                  key={op}
                  className="p-2 hover:bg-gray-700 cursor-pointer rounded-3xl"
                  onClick={() => handleOperationSelect(op)}
                >
                  {currentTriplet.attribute + " "} {op}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
