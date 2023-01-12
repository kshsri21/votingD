import { useState, useEffect } from "react";
function VoterList({ state }) {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const { contract } = state;
    async function votersDisplay() {
      const voters = await contract.methods.voterList().call();
      console.log(voters);
      setVoters(voters);
    }

    contract && votersDisplay();
  }, [state]);

  return (
    <table>
      <tbody>
        {voters.map((voter) => {
          return (
            <tr key={voter.voterId}>
              <td>{voter.name}</td>
              <td>{voter.age}</td>
              <td>{voter.gender}</td>
              <td>{voter.voterId}</td>
              <td>{voter.voterAddress}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default VoterList;
