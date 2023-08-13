import React from "react";

function WaterList(data) {
  console.log(data)
  const handleDelete = (index,e) => {
    data.setWaterTable(data.waterData.filter((v, i) => i !== index));
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
          {data.waterData.map((data, index) => (
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