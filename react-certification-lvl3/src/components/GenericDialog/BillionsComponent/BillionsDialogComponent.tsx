import { FC, useState } from "react";
import { GenericDialogComponent } from "../../../api/GenericDialogComponent/GenericDialogComponent";
import "./BillionsDialogComponent.scss";
import { imageUrls } from "./data";

export const BillionsDialogComponent: FC = () => {
  console.log("Rendered parent of billions' dialog component");

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>(imageUrls[0]);

  const handleOnClose = () => setIsDialogVisible(false);

  const handleOnClickShow = () => {
    setIsDialogVisible(true);
  };

  return (
    <>
      <button
        className="btn btn-outline-secondary btn-lg"
        onClick={handleOnClickShow}
      >
        Click me to show the dialog !
      </button>
      <GenericDialogComponent
        visible={isDialogVisible}
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
        footer={
          <div className="billions-dialog--footer">
            {imageUrls?.map((image: string) => (
              <button key={image} onClick={() => setCurrentPhoto(image)}>
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        }
      >
        <div className="billions-dialog--body">
          <img src={currentPhoto} alt="" />
        </div>
      </GenericDialogComponent>
    </>
  );
};
