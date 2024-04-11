import { FC, PropsWithChildren, ReactNode } from "react";
import "./GenericDialog.scss";

interface GenericDialogProps {
  visible: boolean;
  isModal?: boolean;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

/**
 * Shows a dialog component over the page. If it's a modal, adds an overlay to block navigation.
 * @param props The body is passed through children
 */
export const GenericDialog: FC<GenericDialogProps> = (
  props: PropsWithChildren<GenericDialogProps>
) => {
  console.log("Rendered generic dialog component");

  const { visible, isModal = false, header, children: body, footer } = props;

  return (
    visible && (
      <>
        {isModal && <div className="generic-dialog--overlay"></div>}
        <div className="generic-dialog">
          <div className="generic-dialog--header">{header}</div>
          <div className="generic-dialog--body">{body}</div>
          <div className="generic-dialog--footer">{footer}</div>
        </div>
      </>
    )
  );
};
