import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getScopusJson } from "../actions/scopusSearchActions";

export const ScopusInput = () => {
  const dispatch = useDispatch();

  //states
  const [scopusInfo, setScopusInfo] = useState({
    query: "",
    apiKeyUser: "",
  });

  const handleFormChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    scopusInfo[name] = value;
    setScopusInfo(scopusInfo);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getScopusJson({
        scopusConfig: scopusInfo,
      })
    );
  };

  return (
    <div className="container">
      {/* Input to Load CSV File */}
      <fieldset>
        <form method="POST" onSubmit={(e) => handleFormSubmit(e)}>
          <div
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="form-group col-6"
          >
            <label htmlFor="query">Search Parameters</label>
            <textarea
              className="form-control"
              id="query"
              name="query"
              onChange={handleFormChange}
              defaultValue='"inverse reinforcement learning"  AND  ( "system"  OR  "e-learning"  OR  "stochastic"  OR  "smart grids"  OR  "control"  OR  "system controller"  OR  "control tuning"  OR  "optimization")'
              rows="3"
            ></textarea>
            <hr className="border border-dark" />
            <label htmlFor="apiKeyUser">Scopus™ API Key</label>
            <input
              className="form-control"
              type="text"
              name="apiKeyUser"
              id="apiKeyUser"
              onChange={handleFormChange}
              placeholder="Enter in your Scopus Generated API Key"
            ></input>
            <button
              type="submit"
              className="btn btn-outline-dark mt-2"
              value="handleFormSubmit"
            >
              Submit Search Query
            </button>
            <hr className="border border-dark" />
          </div>
        </form>
      </fieldset>
    </div>
  );
};
