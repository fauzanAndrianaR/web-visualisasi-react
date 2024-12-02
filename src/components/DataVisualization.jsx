import { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
  

const DataVisualization = () => {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://localhost:3000/sekolah")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter data based on the selected location
  const filteredData = selectedLocation === "All" 
    ? data 
    : data.filter(item => item.kabupaten_kota === selectedLocation);

  // Generate datasets for Bar Chart
  const barData = {
    labels: filteredData.map(item => item.kabupaten_kota),
    datasets: [
      {
        label: "Jumlah Negeri",
        data: filteredData.map(item => item.negeri),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Jumlah Swasta",
        data: filteredData.map(item => item.swasta),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  // Generate datasets for Pie Chart
  const totalNegeri = filteredData.reduce((sum, item) => sum + item.negeri, 0);
  const totalSwasta = filteredData.reduce((sum, item) => sum + item.swasta, 0);
  const pieData = {
    labels: ["Negeri", "Swasta"],
    datasets: [
      {
        data: [totalNegeri, totalSwasta],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <h1>Visualisasi Data Sekolah</h1>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="location">Pilih Kabupaten/Kota: </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="All">Semua</option>
          {data.map((item) => (
            <option key={item.no} value={item.kabupaten_kota}>
              {item.kabupaten_kota}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2>Grafik Batang</h2>
        <Bar data={barData} />
      </div>

      <div>
        <h2>Pie Chart Negeri vs Swasta</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default DataVisualization;
