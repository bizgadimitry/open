 const PROPOSAL_DESCRIPTION = "This is proposal #1";

    const SET_VALUE = 333;

    const targetContract = "0xf9D7aa83209C5Ae66aCc8136dF7721889590278D"; 

    let encodedFunctionCall = targetContract.interface.encodeFunctionData("setValue", [SET_VALUE]);
