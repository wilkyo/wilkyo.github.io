import { FC, PropsWithChildren, ReactNode } from "react";
import "./GenericDialog.scss";

interface GenericDialogProps {
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
  const { isModal = false, header, children: body, footer } = props;
  return (
    <div className={`generic-dialog${isModal ? " generic-dialog-modal" : ""}`}>
      {header}
      {body}
      {footer}
    </div>
  );
};
