import { FC, useState } from "react";
import { GenericDialog } from "../../../api/GenericDialog/GenericDialog";
import "./TeamRemovalDialog.scss";

interface TeamRemovalDialogProps {
  team: string;
  onRemoveTeam: (team: string) => void;
}
export const TeamRemovalDialog: FC<TeamRemovalDialogProps> = (
  props: TeamRemovalDialogProps
) => {
  console.debug("Rendering parent of team removal's dialog component");

  const { team, onRemoveTeam } = props;

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

  const handleOnClickNo = () => setIsDialogVisible(false);
  const handleOnClickYes = () => {
    setIsDialogVisible(false);
    onRemoveTeam(team);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger btn-lg"
        onClick={() => setIsDialogVisible(true)}
      >
        Remove the team !
      </button>
      <GenericDialog
        isModal
        visible={isDialogVisible}
        footer={
          <div className="team-removal--footer">
            <button
              type="button"
              className="btn btn-light"
              onClick={handleOnClickNo}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleOnClickYes}
            >
              Yes
            </button>
          </div>
        }
      >
        <div className="team-removal--body">
          Are you sure you want to remove this team ?
        </div>
      </GenericDialog>
    </>
  );
};
