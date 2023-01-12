import { useEffect, useState } from "react";
function Vote({ state, account }) {
  const [status, setStatus] = useState("Not Started");
  useEffect(() => {
    const { contract } = state;

    async function statusVoting() {
      const status = await contract.methods.votingStatus().call();
      setStatus(status);
    }
    contract && statusVoting();
  }, [state]);
  async function vote(event) {
    event.preventDefault();
    const { contract } = state;
    const voterId = document.querySelector("#voterId").value;
    const candidateId = document.querySelector("#candidateId").value;
    try {
      await contract.methods.vote(voterId, candidateId).send({ from: account });
      alert("Voting Done");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <form onSubmit={vote}>
        <label htmlFor="voterId">VoterId:</label>
        <input type="text" id="voterId"></input>

        <label htmlFor="candidateId">Candidate Id:</label>
        <input type="text" id="candidateId"></input>
        <button type="submit">Vote</button>
      </form>
      <p>Voting Status:{status}</p>
    </div>
  );
}
export default Vote;
