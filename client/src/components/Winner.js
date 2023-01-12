import { useEffect, useState } from "react";

function Winner({ state }) {
  const [winner, setWinner] = useState("not declared");
  useEffect(() => {
    const { contract } = state;
    async function displayWinner() {
      const winner = await contract.methods.winner().call();
      if (winner !== "0x0000000000000000000000000000000000000000") {
        setWinner(winner);
      }

      console.log(winner);
    }
    contract && displayWinner();
  }, [state]);
  return <>Winner is : {winner}</>;
}
export default Winner;
