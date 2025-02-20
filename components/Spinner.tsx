import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Spinner(props: { className?: string; text?: string }) {
  return (
    <div className={`tracking-wider ${props.className}`}>
      <FontAwesomeIcon
        icon={faSpinner}
        className="inline-block w-5 text-base mr-1 animate-spin"
      />{" "}
      {props.text ?? "Loading..."}
    </div>
  );
}
