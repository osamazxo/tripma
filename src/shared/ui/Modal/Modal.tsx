import { FC, HTMLAttributes } from "react";
import ReactDom from "react-dom";
import "./Modal.scss";
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}
export const Modal: FC<ModalProps> = ({ opened, setOpened, children }) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className="modal" aria-expanded={opened}>
          <div className="overlay" onClick={() => setOpened(false)}></div>
          <div className="dialog">{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};
