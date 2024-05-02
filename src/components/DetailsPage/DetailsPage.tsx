import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import University from "../../models/University";

const DetailsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [university, setUniversity] = useState<University | null>(null);
  console.log(university);
  

  useEffect(() => {
    // Fetch university details from local storage based on the provided name
    const universitiesData = localStorage.getItem("universities");
    if (universitiesData) {
      const universities: University[] = JSON.parse(universitiesData);
      const foundUniversity = universities.find((uni) => uni.name === name);
      if (foundUniversity) {
        setUniversity(foundUniversity);
      }
    }
  }, [name]);

  return university ? (
    <div
    className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        height: "80vh",
        padding:"60px 0px "
      }}
    >
      <div
        style={
          {

            borderRadius: "5px",
            backgroundColor:"rgb(248, 248, 248)",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "40px",
            maxWidth: "100%",
            border:"1px solid rgb(204, 204, 204)",
            width: "100%",
          } as any
        }
      >
        <h2 style={{ margin: "10px 0" }}>{name}</h2>
        <p style={{ margin: "10px 0" }}>
          <strong>Name:</strong> {university.name}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Country:</strong> {university.country}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Country:</strong> {university.country}
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Domains:</strong>{" "}
          {university.domains && university?.domains.length > 0
            ? university?.domains[0]
            : ""}
        </p>

        <p style={{ margin: "0" }}>
          <strong>Domains:</strong>{" "}
          {university.web_pages && university?.web_pages.length > 0 ? (
            <a style={{ color: "red" }}
              href={university.web_pages[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {university.web_pages[0]}
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  ) : (
    <div>University not found</div>
  );
};

export default DetailsPage;
