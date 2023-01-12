import { Link } from "react-router-dom";
function ElectionCommision({ state, account, selectAccount }) {
  async function voteStart(event) {
    event.preventDefault();
    const { contract } = state;
    const startTime = document.querySelector("#start").value;
    const endTime = document.querySelector("#end").value;
    try {
      await contract.methods.voteTime(startTime, endTime).send({
        from: account,
        gas: "1000000",
      });
      alert("Voting Started");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
  async function emergency() {
    const { contract } = state;
    try {
      await contract.methods.emergency().send({
        from: account,
        gas: "1000000",
      });
      alert("Emergency Declared");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
  async function result() {
    const { contract } = state;
    try {
      await contract.methods.result().send({
        from: account,
        gas: "1000000",
      });
      alert("Result declared");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/voter">Voter</Link>
      <Link to="/candidate">Candidate</Link>

      <form onSubmit={voteStart}>
        <label htmlFor="start">Start Time:</label>
        <input type="text" id="start"></input>

        <label htmlFor="end">End Time:</label>
        <input type="text" id="end"></input>
        <button type="submit">Voting Start</button>
      </form>
      <button onClick={emergency}>Emergency</button>
      <button onClick={result}>Result</button>
    </div>
  );
}
export default ElectionCommision;
