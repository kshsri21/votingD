import { Link } from "react-router-dom";
import CandidateDisplay from "./CandidateDisplay";
import VoterList from "./VoterList";
import Vote from "./Vote";
function VoterRegister({ state, account }) {
  async function register(event) {
    event.preventDefault();
    const { contract } = state;
    //console.log(contract);
    const name = document.querySelector("#name").value;

    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;

    try {
      await contract.methods.voterRegister(name, age, gender).send({
        from: account,
        gas: "1000000",
      });
      alert("Voter Registration Successful");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/candidate">Candidate</Link>
      <Link to="/electioncommision">Election Commision</Link>
      <form onSubmit={register}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"></input>

        <label htmlFor="age">Age:</label>
        <input type="text" id="age"></input>

        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender"></input>
        <button type="submit">Register</button>
      </form>
      <Vote state={state} account={account}></Vote>
      <CandidateDisplay state={state} />
      <VoterList state={state}></VoterList>
    </div>
  );
}
export default VoterRegister;
