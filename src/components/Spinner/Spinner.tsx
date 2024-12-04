import { ClipLoader, ScaleLoader, SyncLoader } from "react-spinners";
import "./Spinner.css";

type Props = {
  //   isLoading: boolean;
};

const Spinner = (props: Props) => {
  return (
    <div id="loading-spinner">
      <ScaleLoader
        color="#36d7b7"
        // loading={isLoading}
        height={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
