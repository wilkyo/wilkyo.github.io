import { ChangeEvent, PropsWithChildren, useMemo, useState } from "react";
import "./AutoComplete.scss";

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
  valueChange: (value: T) => void;
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
    valueChange,
  } = props;
  console.log("Render AutoComplete component", labelProp);

  const [inputValue, setInputValue] = useState<string>("");
  // TODO : The focus/hover thing

  /**
   * When the input value change, the results list is filtered
   * @param value The input value
   */
  const filteredData: T[] = useMemo(() => {
    if (!data || inputValue === "" || inputValue === " ") {
      return [];
    }
    const lowerCaseValue = inputValue.toLowerCase();

    return data.filter((result: T) => {
      const propA = result[labelProp]?.toString() ?? "";
      const propB = result[filterProp]?.toString() ?? "";

      // Compare with lowercase to ignore the case
      return (
        propA.toLowerCase().includes(lowerCaseValue) ||
        propB.toLowerCase().includes(lowerCaseValue)
      );
    });
  }, [data, inputValue, labelProp, filterProp]);

  const handleOnValueSelected = (value: T) => {
    valueChange(value);
    setInputValue(value[labelProp]?.toString() ?? ""); // Will trigger a new filtering
  };

  return (
    <div className="auto-complete--wrapper">
      <input
        type="text"
        className={`auto-complete--input ${className ?? ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />

      {filteredData.length > 0 && (
        <div className="auto-complete--selector">
          {filteredData.map((result: T) => (
            <button
              key={result[labelProp]?.toString()}
              className="auto-complete--selector-option"
              onClick={() => handleOnValueSelected(result)}
            >
              {result[labelProp]?.toString()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
