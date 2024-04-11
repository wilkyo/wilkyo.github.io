import { ChangeEvent, PropsWithChildren, useMemo, useState } from "react";

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

export const AutoComplete = <T extends object>(
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

  /**
   * When the input value change, the results list is filtered
   * @param value The input value
   */
  const filteredData: T[] = useMemo(() => {
    if (!data || inputValue === "" || inputValue === " ") {
      return [];
    }

    return data.filter((result: T) => {
      const lowerCaseValue = inputValue.toLowerCase();
      const propA = result[labelProp]?.toString();
      const propB = result[filterProp]?.toString();

      return (
        propA?.toLowerCase().includes(lowerCaseValue) ||
        propB?.toLowerCase().includes(lowerCaseValue)
      );
    });
  }, [data, inputValue, labelProp, filterProp]);

  const handleOnValueSelected = (value: T) => {
    onValueChange(value);
    setInputValue(""); // The filtered data will empty itself
  };

  return (
    <div className="autoComplete--wrapper">
      <input
        type="text"
        className={`autoComplete--input ${className ?? ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
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
