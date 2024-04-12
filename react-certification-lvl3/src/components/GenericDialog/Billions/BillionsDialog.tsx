import { FC, useEffect, useState } from "react";
import { GenericDialog } from "../../../api/GenericDialog/GenericDialog";
import { Loader } from "../../Loader";
import { Photo, usePhotosData } from "../useImagesData";
import "./BillionsDialog.scss";

export const BillionsDialog: FC = () => {
  console.log("Rendered parent of billions' dialog component");

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo>();

  const { photos } = usePhotosData();

  // Sets the photo after fetch
  useEffect(() => {
    if (photos) {
      setCurrentPhoto(photos[0]);
    }
  }, [photos]);

  const handleOnClose = () => setIsDialogVisible(false);

  return (
    <>
      <button
        className="btn btn-outline-secondary btn-lg"
        onClick={() => setIsDialogVisible(true)}
      >
        Click me to show the dialog !
      </button>
      <GenericDialog
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
            {photos ? (
              photos.map((photo: Photo) => (
                <button
                  key={photo.title}
                  onClick={() => setCurrentPhoto(photo)}
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt={`${photo.title} thumbnail`}
                  />
                </button>
              ))
            ) : (
              <Loader />
            )}
          </div>
        }
      >
        <div className="billions-dialog--body">
          {currentPhoto ? (
            <img src={currentPhoto.url} alt={currentPhoto.title} />
          ) : (
            <Loader />
          )}
        </div>
      </GenericDialog>
    </>
  );
};
