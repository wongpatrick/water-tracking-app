import React from "react";

function WaterList(data) {
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
          {data.waterData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaterList;