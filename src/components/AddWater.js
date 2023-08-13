import React, { useState } from "react";
import { getWaterData  } from "../waterData";

function AddWater(waterData) {
  const [water, setWater] = useState("");

  const handleWaterChange = (event) => {
    setWater(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const waterData = {
      date: new Date().toLocaleDateString(),
      intake: parseInt(water),
    };
    const data = saveWaterData([waterData, ...getWaterData()]);
    console.log(data);
    setWater("");
  };

  const saveWaterData = (data) => {
    localStorage.setItem("waterData", JSON.stringify(data));
    waterData.setWaterTable(data)
  };

  return (
    <div>
      <h3>Add Water Intake</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="water">Water Intake (in ml)</label>
          <input
            type="number"
            className="form-control"
            id="water"
            value={water}
            onChange={handleWaterChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddWater;