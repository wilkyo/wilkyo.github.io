import { FC, useState } from "react";
import { TeamRemovalDialogComponent } from "./TeamRemovalDialogComponent";

export const TeamComponent: FC = () => {
  console.log("Rendered team component");

  const [myTeam, setMyTeam] = useState<string | undefined>("Wild cats");

  const handleOnRemoveTeam = (team: string) => {
    console.log(`Removed team ${team} !`);
    setMyTeam(undefined);
  };

  return (
    <>
      <h2>Here is a test with the overlay dialog</h2>
      {myTeam ? (
        <>
          <p>
            This is the <strong>{myTeam}</strong> team !
          </p>
          <TeamRemovalDialogComponent
            team={myTeam}
            onRemoveTeam={handleOnRemoveTeam}
          />
        </>
      ) : (
        <>
          <p>There is no team...</p>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={() => setMyTeam("All blacks")}
          >
            Click me to add the Team
          </button>
        </>
      )}
    </>
  );
};
