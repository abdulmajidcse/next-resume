import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return (
    <div
      className={`min-h-[calc(100vh-184px)] flex items-center justify-center ${props.className}`}
    >
      <div className="text-lg text-slate-800 tracking-wider">
        <FontAwesomeIcon
          icon={faSpinner}
          className="inline-block w-5 text-lg mr-1 animate-spin"
        />{" "}
        Loading...
      </div>
    </div>
  );
}
