import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import "chart.js/auto";
import "./DataSiswa.css";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin


const DataSiswa = () => {
  const [data, setData] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState("Semua");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "siswa";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/${type}`);
        const result = await response.json();
        setData(result || []);
        setFilteredData(result || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    let tempData = data;

    if (selectedKabupaten !== "Semua") {
      tempData = tempData.filter(
        (item) => item.kabupaten_kota === selectedKabupaten
      );
    }

    if (searchTerm) {
      tempData = tempData.filter((item) =>
        item.kabupaten_kota.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(tempData);
    setCurrentPage(1); // Reset ke halaman pertama jika ada perubahan filter
  }, [selectedKabupaten, searchTerm, data]);

  const handleDropdownChange = (event) => {
    setSelectedKabupaten(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const barData = {
    labels: filteredData.map((item) => item.kabupaten_kota),
    datasets: [
      {
        label: "Negeri",
        data: filteredData.map((item) => item.negeri),
        backgroundColor: "#3b82f6",
      },
      {
        label: "Swasta",
        data: filteredData.map((item) => item.swasta),
        backgroundColor: "#f97316",
      },
    ],
  };

  const totalNegeri = filteredData.reduce((sum, item) => sum + item.negeri, 0);
  const totalSwasta = filteredData.reduce((sum, item) => sum + item.swasta, 0);

  const pieData = {
    labels: ["Negeri", "Swasta"],
    datasets: [
      {
        label: "Proporsi Siswa",
        data: [totalNegeri, totalSwasta],
        backgroundColor: ["#3b82f6", "#f97316"],
        borderWidth: 0, 
      },
    ],
  };
  const barOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white", // Warna label legenda menjadi putih
        },
      },
      datalabels: {
        display: function () {
          // Tampilkan angka hanya jika filter dropdown atau search digunakan
          const isFiltered =
            selectedKabupaten !== "Semua" || searchTerm.trim() !== "";
          return isFiltered;
        },
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: (value) => {
          // Format angka menjadi pemisah ribuan
          return new Intl.NumberFormat("id-ID").format(value);
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Warna teks label sumbu X
        },
  
      },
      y: {
        ticks: {
          color: "white", // Warna teks label sumbu Y
        },
       
      },
    },
  };
  
  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "white", // Warna label legenda menjadi putih
        },
      },
      datalabels: {
        display: true, // Selalu tampilkan angka
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: (value) => {
          // Format angka menjadi pemisah ribuan
          return new Intl.NumberFormat("id-ID").format(value);
        },
      },
    },
  };
  

  return (
    <div className="visualisasi-container">
    <h1>DATABASE {type.toUpperCase()}</h1>

    <div className="controls-container">
      <div className="dropdown-container">
        <label htmlFor="kabupaten">Pilih Kabupaten/Kota: </label>
        <select
          id="kabupaten"
          value={selectedKabupaten}
          onChange={handleDropdownChange}
        >
          <option value="Semua">Semua</option>
          {data.map((item) => (
            <option key={item.no} value={item.kabupaten_kota}>
              {item.kabupaten_kota}
            </option>
          ))}
        </select>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari Kabupaten/Kota..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>


    <div className="charts-container">
      <div className="bar-chart">
        <Bar data={barData} options={barOptions} plugins={[ChartDataLabels]} />
      </div>
      <div className="pie-chart">
        <Pie data={pieData} options={pieOptions} plugins={[ChartDataLabels]} />
      </div>
    </div>
    <div className="scorecards-container">
    <div className="scorecard">
      <h3>Total {type.charAt(0).toUpperCase() + type.slice(1)}</h3>
      <p>{new Intl.NumberFormat("id-ID").format(filteredData.reduce((sum, item) => sum + item.jml, 0))}</p>
    </div>
    <div className="scorecard">
      <h3>Total {type.charAt(0).toUpperCase() + type.slice(1)} Negeri</h3>
      <p>{new Intl.NumberFormat("id-ID").format(filteredData.reduce((sum, item) => sum + item.negeri, 0))}</p>
    </div>
    <div className="scorecard">
      <h3>Total {type.charAt(0).toUpperCase() + type.slice(1)} Swasta</h3>
      <p>{new Intl.NumberFormat("id-ID").format(filteredData.reduce((sum, item) => sum + item.swasta, 0))}</p>
    </div>
  </div>


      <div className="table-container">
        <h2>Data Detail</h2>
        {paginatedData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kabupaten/Kota</th>
                <th>Negeri</th>
                <th>Swasta</th>
                <th>Jumlah</th>
                <th>N1</th>
                <th>S1</th>
                <th>Sub Jumlah 1</th>
                <th>N2</th>
                <th>S2</th>
                <th>Sub Jumlah 2</th>
                <th>N3</th>
                <th>S3</th>
                <th>Sub Jumlah 3</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.kabupaten_kota}</td>
                  <td>{item.negeri}</td>
                  <td>{item.swasta}</td>
                  <td>{item.jml}</td>
                  <td>{item.n1}</td>
                  <td>{item.s1}</td>
                  <td>{item.sub_jml1}</td>
                  <td>{item.n2}</td>
                  <td>{item.s2}</td>
                  <td>{item.sub_jml2}</td>
                  <td>{item.n3}</td>
                  <td>{item.s3}</td>
                  <td>{item.sub_jml3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Data tidak tersedia.</p>
        )}

        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Halaman {currentPage} dari {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSiswa;
