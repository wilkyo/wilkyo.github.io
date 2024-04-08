import { FC, useState } from "react";
import { GenericDialogComponent } from "../../../api/GenericDialogComponent/GenericDialogComponent";

interface TeamRemovalDialogComponentProps {
  team: string;
  onRemoveTeam: (team: string) => void;
}
export const TeamRemovalDialogComponent: FC<TeamRemovalDialogComponentProps> = (
  props: TeamRemovalDialogComponentProps
) => {
  console.log("Rendered parent dialog component");
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
        className="btn btn-danger btn-lg"
        onClick={() => setIsDialogVisible(true)}
      >
        Remove the team !
      </button>
      <GenericDialogComponent
        visible={isDialogVisible}
        footer={
          <>
            <button className="btn btn-light" onClick={handleOnClickNo}>
              No
            </button>
            <button className="btn btn-secondary" onClick={handleOnClickYes}>
              Yes
            </button>
          </>
        }
      >
        Are you sure you want to remove this team ?
      </GenericDialogComponent>
    </>
  );
};
