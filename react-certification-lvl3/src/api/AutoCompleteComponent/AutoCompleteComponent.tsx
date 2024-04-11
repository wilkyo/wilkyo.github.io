import { ChangeEvent, PropsWithChildren, useState } from "react";

/**
 * This component is typed for the data it searches for.
 * @param data Array of this type
 * @param labelProp The label to show in the results. They are filtered by it
 * @param filterProp The additionnal filter property.
 * @param onValueChange Function called with the selected item
 * @param className To add custom CSS
 * @param placeholder Specifies the placeholder
 */
interface AutoCompleteProps<T extends object> {
  data: T[];
  labelProp: keyof T;
  filterProp?: keyof T;
  onValueChange: (value: T) => void;
  className?: string;
  placeholder?: string;
}

export const AutoCompleteComponent = <T extends object>(
  props: PropsWithChildren<AutoCompleteProps<T>>
) => {
  const {
    className,
    placeholder,
    data,
    labelProp,
    filterProp = labelProp,
    onValueChange,
  } = props;
  console.log("Render AutoComplete component");

  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T[]>([]);

  const handleOnInputChange = (value: string) => {
    setInputValue(value);
    if (value === "" || value === " ") {
      setFilteredData([]);
    } else {
      setFilteredData(
        data
          .filter((result: T) => {
            const lowerCaseValue = value.toLowerCase();
            const propA = result[labelProp]?.toString();
            const propB = result[filterProp]?.toString();

            return (
              propA?.toLowerCase().includes(lowerCaseValue) ||
              propB?.toLowerCase().includes(lowerCaseValue)
            );
          })
          .map((result: T) => result)
      );
    }
  };

  const handleOnValueSelected = (value: T) => {
    onValueChange(value);
  };

  return (
    <div className="autoComplete--wrapper">
      <input
        type="text"
        className={`autoComplete--input ${className ?? ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleOnInputChange(event.target.value)
        }
      />
      {filteredData.length > 0 && (
        <div className="autoComplete--selector">
          {filteredData.map((result: T) => (
            <button
              key={`${result[labelProp]}`}
              className="autoComplete--selector-option"
              onClick={() => handleOnValueSelected(result)}
            >
              {`${result[labelProp]}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
