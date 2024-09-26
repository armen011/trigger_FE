import Typography from "./Typography";
import CaretIcon from "@/assets/icon/caret.svg";
import SuccessIcon from "@/assets/icon/success.svg";
import LoadingIcon from "@/assets/icon/loading.svg";

type SubmitButtonProps = {
  isSubmitting: boolean;
  isValid: boolean;
  isSubmittedSuccessfully: boolean;
  isDirty: boolean;
  isSubmitted: boolean;
};

const stateObject = {
  default: {
    content: "Submit",
    icon: <CaretIcon className="w-6 h-6 opacity-50" />,
  },
  active: {
    content: "Submit",
    icon: <CaretIcon className="w-6 h-6" />,
  },
  loading: {
    content: "Submitting",
    icon: <LoadingIcon className="w-6 h-6 animate-rotate" />,
  },
  success: {
    content: "Submitted",
    icon: <SuccessIcon className="w-6 h-6" />,
  },
};

const getButtonState = ({
  isDirty,
  isSubmittedSuccessfully,
  isSubmitting,
  isValid,
  isSubmitted,
}: SubmitButtonProps): keyof typeof stateObject => {
  if (isSubmittedSuccessfully) return "success";
  if (isSubmitting) return "loading";
  if (isDirty && !isSubmitted) return "active";
  if (isValid && isSubmitted) return "active";

  return "default";
};

const disabledStates: Array<keyof typeof stateObject> = [
  "loading",
  "default",
  "success",
];

const SubmitButton = (props: SubmitButtonProps) => {
  const state = getButtonState(props);
  const { icon, content } = stateObject[state];

  return (
    <button
      type="submit"
      className={`flex items-center gap-1 bg-white px-4 md:px-6 py-2 md:py-3 rounded-[40px] mt-7 md:mt-8 xl:mt-10 2xl:mt-12 ${
        state === "active" && "hover:bg-opacity-50 transition-colors"
      }`}
      disabled={disabledStates.includes(state)}
    >
      <Typography
        color="lightPrimary"
        variant="p1"
        className={
          (state === "default" && "text-opacity-50 font-medium") ||
          "font-medium"
        }
      >
        {content}
      </Typography>
      {icon}
    </button>
  );
};

export default SubmitButton;
