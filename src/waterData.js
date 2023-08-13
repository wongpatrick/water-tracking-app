// export const saveWaterData = (data) => {
//     localStorage.setItem("waterData", JSON.stringify(data));
// };
  
export const getWaterData = () => {
    const data = localStorage.getItem("waterData");
    return data ? JSON.parse(data) : [];
};