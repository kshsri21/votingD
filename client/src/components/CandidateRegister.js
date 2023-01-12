import { useState } from "react";
import { Link } from "react-router-dom";
import CandidatesDisplay from "./CandidateDisplay";
function Candidate({ state, account }) {
  async function register(event) {
    event.preventDefault();
    const { contract } = state;
    //console.log(contract);
    const name = document.querySelector("#name").value;
    const party = document.querySelector("#party").value;
    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;

    try {
      await contract.methods.candidateRegister(name, party, age, gender).send({
        from: account,
        gas: "1000000",
      });
      alert("Registration Successful");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/voter">Voter</Link>
      <Link to="/electioncommision">Election Commision</Link>
      <form onSubmit={register}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"></input>

        <label htmlFor="party">Party:</label>
        <input type="text" id="party"></input>

        <label htmlFor="age">Age:</label>
        <input type="text" id="age"></input>

        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender"></input>
        <button type="submit">Register</button>
      </form>
      <CandidatesDisplay state={state} />
    </div>
  );
}
export default Candidate;
