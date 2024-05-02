import React, { useState, useEffect } from "react";
import University from "../../models/University";
import ListingController from "./ListingController";
// import Loader from "../common/Loader/Loader";
import SearchBar from "../common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import SortingDropdown from "../common/SortDropDown/SortDropDown";
import "../../App.css";

const ListingPage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ListingController.fetchUniversities();
        setUniversities(data);
        // setLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = universities.filter((university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm, universities]);

  const handleDelete = (name: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this university? This action cannot be reverted."
    );
    if (confirmDelete) {
      const updatedUniversities = universities.filter(
        (university) => university.name !== name
      );
      setUniversities(updatedUniversities);
      localStorage.setItem("universities", JSON.stringify(updatedUniversities));
      // Redirect to the listing page after deleting
    }
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    const sorted = [...filteredUniversities].sort((a, b) => {
      if (value === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredUniversities(sorted);
  };

  const handleSort = (value: string) => {
    const sorted =
      value === ""
        ? universities
        : [...filteredUniversities].sort((a, b) => {
            return value === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          });

    setSortOrder(value);
    setFilteredUniversities(sorted);
  };

  return (
    <>
      <div
        className="container"
        style={{ width: "", margin: "0 auto", padding: "20px" }}
      >
        <h1 style={{ width: "100%" }}>Universities</h1>
        <div
          className="inrow-filter"
          style={
            {
              display: "grid",
              gridTemplateColumns: "1fr 1fr", // Two equal columns for md and larger screens
              gap: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              backgroundColor: "#ffffff",
            } as any
          }
        >
          <div style={{ width: "100%" }}>
            {" "}
            {/* Full width for both components */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div style={{ width: "100%" }}>
            <SortingDropdown onChange={handleSort} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {filteredUniversities.map((university) => (
          <div
            key={university.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#F8F8F8",
            }}
          >
            <h2 style={{ marginTop: 0 }} className="card-title">
              {university.name}
            </h2>
            <p>Country: {university.country}</p>
            <div style={{ display: "flex", alignItems: " center" }}>
              <button
                style={{
                  backgroundColor: "#FF5733",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  lineHeight: "20px",
                  fontSize: "13px",
                }}
                onClick={() => handleDelete(university.name)}
              >
                Delete
              </button>

              <Link
                to={`/university/${encodeURIComponent(university.name)}`}
                style={{
                  backgroundColor: "blue",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  textDecoration: "none",
                  marginLeft: "5px",
                  lineHeight: "20px",
                  fontSize: "13px",
                }}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListingPage;
