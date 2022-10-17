import { useCallback, useState } from "react";

const useInputValidate = (validateInput, inputHasValue = "") => {
  const [enteredValue, setEnteredValue] = useState(inputHasValue);
  const [isTouched, setIsTouched] = useState(false);

  const validInput = validateInput(enteredValue);
  const hasError = !validInput && isTouched;

  const inputChangeHandler = (inputValue) => {
    setEnteredValue(inputValue);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = useCallback(() => {
    setIsTouched(false);
    setEnteredValue("");
  }, []);
  return {
    validInput,
    enteredValue,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};
export default useInputValidate;
