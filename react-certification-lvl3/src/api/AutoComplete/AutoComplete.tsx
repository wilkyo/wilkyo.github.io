import { ChangeEvent, PropsWithChildren, useMemo, useState } from "react";
import "./AutoComplete.scss";

/**
 * This component is typed for the data it searches for.
 * @param data Array of this type
 * @param labelKey The label to show in the results. They are filtered by it
 * @param filterKey The additionnal filter property.
 * @param onValueChange Function called with the selected item
 * @param className To add custom CSS
 * @param placeholder Specifies the placeholder
 */
interface AutoCompleteProps<T extends object> {
  data: T[];
  labelKey: keyof T;
  filterKey?: keyof T;
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
    labelKey,
    filterKey = labelKey,
    valueChange,
  } = props;
  console.log("Render AutoComplete component", labelKey);

  const [inputValue, setInputValue] = useState<string>("");

  // Compare "i" to ignore the case
  const inputRegex = useMemo(
    () => new RegExp(`(${inputValue})`, "i"),
    [inputValue]
  );
  // TODO : The focus/hover thing

  /**
   * When the input value change, the results list is filtered.
   * Matches on one of the keys passed to the component (label or filter key)
   * @param value The input value
   */
  const filteredData: T[] = useMemo(() => {
    if (!data || inputValue === "" || inputValue === " ") {
      return [];
    }

    return data.filter(
      (result: T) =>
        inputRegex.test(result[labelKey]?.toString() ?? "") ||
        inputRegex.test(result[filterKey]?.toString() ?? "")
    );
  }, [inputValue, inputRegex, data, labelKey, filterKey]);

  /**
   * Adds bold on the matches
   * @param label The label to show
   * @returns A list of spans with or without bold
   */
  const getStyledLabel = (label: string) => {
    return label
      .split(inputRegex)
      .map((element: string, index: number) => (
        <span key={`${element}${index}`}>
          {index % 2 === 0 ? element : <b>{element}</b>}
        </span>
      ));
  };

  const handleOnValueSelected = (value: T) => {
    valueChange(value);
    setInputValue(value[labelKey]?.toString() ?? ""); // Will trigger a new filtering
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
              key={result[labelKey]?.toString()}
              type="button"
              className="auto-complete--selector-option"
              onClick={() => handleOnValueSelected(result)}
            >
              {getStyledLabel(result[labelKey]?.toString() ?? "")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
