import { FC, useState } from "react";
import { GenericDialogComponent } from "../../../api/GenericDialogComponent/GenericDialogComponent";
import "./BillionsDialogComponent.scss";

export const BillionsDialogComponent: FC = () => {
  console.log("Rendered parent of billions' dialog component");

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const handleOnClose = () => setIsDialogVisible(false);

  return (
    <>
      <button
        className="btn btn-outline-secondary btn-lg"
        onClick={() => setIsDialogVisible(true)}
      >
        Click me to show the dialog !
      </button>
      <GenericDialogComponent
        visible={isDialogVisible}
        isModal
        header={
          <div className="billions-dialog--header">
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <h2>Billions</h2>
                </div>
                <div className="col-3 billions-dialog--header--cross-container">
                  <button className="btn btn-cross" onClick={handleOnClose}>
                    x
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        }
        footer={<div className="billions-dialog--footer">And another...</div>}
      >
        <div className="billions-dialog--body">A big picture</div>
      </GenericDialogComponent>
    </>
  );
};
