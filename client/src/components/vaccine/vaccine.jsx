import React from "react";

function Vaccine() {
  const [number, setNumber] = React.useState("");
  const [isGoing, setisGoing] = React.useState(true);
  const [Otp, setOtp] = React.useState("");
  const apihitfun = async () => {
    const ress=await fetch("/api", {
      "method": "POST",
      headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
       body: JSON.stringify({ number: number })
    })
     const res=await ress.json();
     setNumber("")
     setisGoing(false)
     console.log(res);
  };
  const otpfun = async () => {
    const resfun=await fetch("/validateOtp", {
      "method": "POST",
      headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
       body: JSON.stringify({ otp: Otp })
    })
     let response=await resfun.json();
     
     console.log("yha ara h ")
     console.log(response);
  };
  if(isGoing)
  return (
    <>
        <label for="number">
          <strong>Mobile Number:</strong>
        </label>
        <input value={number} onInput={(e) => setNumber(e.target.value)} />
        <button onClick={() => apihitfun()}>generate otp</button>
    </>
  );
  else
  return (
    <>
        <label for="otp">
          <strong>enter the otp:</strong>
        </label>
        <input value={Otp} onInput={(e) => setOtp(e.target.value)} />
        <button onClick={() => otpfun()}>generate otp</button>
    </>
  );
}
export default Vaccine;
