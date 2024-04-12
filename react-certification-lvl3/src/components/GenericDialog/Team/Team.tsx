import { FC, useState } from "react";
import { TeamRemovalDialog } from "./TeamRemovalDialog";

export const Team: FC = () => {
  console.debug("Rendering team component");

  const [myTeam, setMyTeam] = useState<string | undefined>("Wild cats");

  const handleOnRemoveTeam = (team: string) => {
    console.log(`Removed team ${team} !`);
    setMyTeam(undefined);
  };

  return (
    <>
      <h2>Here is a test with the modal dialog</h2>
      {myTeam ? (
        <>
          <p>
            This is the <strong>{myTeam}</strong> team !
          </p>
          <p>
            You can find several information about it on the Internet. Or you
            can simply remove it.
            <br />
            But you have to make your choice once the dialog opened !
          </p>
          <TeamRemovalDialog team={myTeam} onRemoveTeam={handleOnRemoveTeam} />
        </>
      ) : (
        <>
          <p>There is no team...</p>
          <button
            type="button"
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
