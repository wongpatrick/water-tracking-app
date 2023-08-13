import React from "react";

function WaterList(waterState) {
  const handleDelete = (index,e) => {
    let waterData = waterState.waterData.filter((v, i) => i !== index)
    waterState.setWaterTable(waterData);
    localStorage.setItem("waterData", JSON.stringify(waterData));
  }

  return (
    <div>
      <h3>Water Intake History</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Water Intake (in ml)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {waterState.waterData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.intake}</td>
              <td><button onClick={e => handleDelete(index,e)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaterList;