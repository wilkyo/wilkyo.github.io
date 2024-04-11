import { ChangeEvent, FC, PropsWithChildren, useState } from "react";

interface AutoCompleteProps {
  className?: string;
  placeholder?: string;
}

export const AutoCompleteComponent: FC<AutoCompleteProps> = (
  props: PropsWithChildren<AutoCompleteProps>
) => {
  const { className, placeholder } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const handleOnChange = (value: string) => {
    console.log("Change", value);
    setInputValue(value);
  };

  return (
    <div className="autoComplete--wrapper">
      <input
        type="text"
        className={`autoComplete--input ${className ?? ""}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleOnChange(event.target.value)
        }
      />
    </div>
  );
};
