import {
  ChangeEvent,
  FocusEvent,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import "./AutoComplete.scss";

/**
 * This component is typed for the data it searches for.
 * @param data Array of this type
 * @param labelKey The label to show in the results. They are filtered by it
 * @param additionalFilterKey The additionnal filter property.
 * @param onValueChange Function called with the selected item
 * @param className To add custom CSS
 * @param placeholder Specifies the placeholder
 */
interface AutoCompleteProps<T extends object> {
  data: T[];
  labelKey: keyof T;
  additionalFilterKey?: keyof T;
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
    additionalFilterKey = labelKey,
    valueChange,
  } = props;
  console.log("Render AutoComplete component", labelKey, additionalFilterKey);

  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [blurTimeout, setBlurTimeout] = useState<number>();

  // Compare "i" to ignore the case
  const inputRegex = useMemo(
    () => new RegExp(`(${inputValue})`, "i"),
    [inputValue]
  );

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
        inputRegex.test(result[additionalFilterKey]?.toString() ?? "")
    );
  }, [inputValue, inputRegex, data, labelKey, additionalFilterKey]);

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

  /**
   * On blur outside of the wrapper, empties the input if it is not the selected value
   */
  const handleOnBlur = (event: FocusEvent<Element>) => {
    if (event.relatedTarget !== null) {
      return;
    }

    setBlurTimeout(
      setTimeout(() => {
        if (
          filteredData.length !== 1 ||
          filteredData[0][labelKey] !== inputValue
        ) {
          setInputValue("");
        } else {
          setIsFocused(false);
        }
      }, 200)
    );
  };

  const handleOnValueSelected = (value: T) => {
    // Cancels the timeout set in handleOnBlur
    clearTimeout(blurTimeout);

    valueChange(value);
    setInputValue(value[labelKey]?.toString() ?? ""); // Will trigger a new filtering

    // Removes the focus to hide the list
    setTimeout(() => setIsFocused(false), 1000);
  };

  return (
    <div className="auto-complete--wrapper">
      <input
        type="text"
        className={`auto-complete--input ${className ?? ""}`}
        placeholder={placeholder}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={handleOnBlur}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />

      {filteredData.length > 0 && isFocused && (
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
