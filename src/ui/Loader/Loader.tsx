import { FC } from "react";
import "./Loader.css"

interface LoaderProps {
    isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
    return (
        <div className="loader">
            {isLoading && <div className="spinner"></div>}
        </div>
    );
};

export default Loader;
