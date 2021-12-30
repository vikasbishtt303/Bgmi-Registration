import React from "react";
import { useState } from "react";

const Country = () => {
  const [country, setCountry] = useState("");
  return (
    <>
      <div className="my-5">
        <h1 className="text-center ">Register Form Part 2</h1>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                class="form-select"
                required
                aria-label="select example"
              >
                <option value="">Select Country</option>
                <option value="nepal">NEPAL</option>
                <option value="china">CHINA</option>
                <option value="australia">AUSTRALIA</option>
                <option value="india">INDIA</option>
                <option value="south africa">SOUTH AFRICA</option>
                <option value="austria">AUSTRIA</option>
              </select> 

              <div className="py-5">
                <h6>Enter Pan card Details (only for India)</h6>
               <input
                type="text" 
                placeHolder="Pan card no."
                disabled={country !== "india"}
              />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
