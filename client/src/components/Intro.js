import { Link } from "react-router-dom";
function Intro() {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/candidate">
        <button>Candidate</button>
      </Link>
      <Link to="/voter">
        <button>Voter</button>
      </Link>
      <Link to="/electioncommision">
        <button>Election Commision</button>
      </Link>
    </div>
  );
}
export default Intro;
