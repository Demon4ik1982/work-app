import { FC } from "react";
import "./PopUp.css"

interface PopUpProps {
    isActive: boolean;
    children: React.ReactNode;
}

const PopUp: FC<PopUpProps> = ({ isActive, children }) => {
    return (
      <div className="pop-up">
        <div className="pop-up__list">
          {children}
        </div>
      </div>
    );
};

export default PopUp;
