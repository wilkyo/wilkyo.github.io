import { FC, PropsWithChildren, ReactNode } from "react";
import "./GenericDialogComponent.scss";

interface GenericDialogProps {
  visible: boolean;
  isModal?: boolean;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

/**
 * Shows a dialog component in the page or into a modal
 * @param props The body is passed through children
 */
export const GenericDialogComponent: FC<GenericDialogProps> = (
  props: PropsWithChildren<GenericDialogProps>
) => {
  const { visible, isModal = false, header, children: body, footer } = props;
  return (
    visible && (
      <>
        {isModal && <div className="generic-dialog-modal-overlay"></div>}
        <div
          className={`generic-dialog${isModal ? " generic-dialog-modal" : ""}`}
        >
          <div className="generic-dialog--header">{header}</div>
          <div className="generic-dialog--body">{body}</div>
          <div className="generic-dialog--footer">{footer}</div>
        </div>
      </>
    )
  );
};
