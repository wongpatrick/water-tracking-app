import React, { useState } from "react";
import AddWater from "./AddWater";
import WaterList from "./WaterList";
import { getWaterData } from "../waterData";


function Home() {
  const [waterData, setWaterTable] = useState(getWaterData);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddWater
            setWaterTable = {setWaterTable}
          />
        </div>
        <div className="col-md-6">
          <WaterList 
            waterData = {waterData}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;