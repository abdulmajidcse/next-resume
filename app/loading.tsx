import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center font-lato">
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
