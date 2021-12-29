import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import data from "./data";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(1);

  // const fetchJobs = async () => {
  //   const response = await fetch(url);
  //   const newJobs = await response.json();
  //   setJobs(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2 style={{ fontFamily: `"Pushster", cursive ` }}>EXPERIENCE</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* button container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
                style={{ fontFamily: `'Moon Dance', cursive` }}
              >
                {item.company.toUpperCase()}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3 style={{ fontFamily: `'Moon Dance', cursive` }}>{title}</h3>
          <h4 style={{ fontFamily: `'Moon Dance', cursive` }}>{company}</h4>
          <p
            className="job-date"
            style={{ fontFamily: `'Moon Dance', cursive`, fontSize: "25px" }}
          >
            {dates}
          </p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p
                  style={{
                    fontFamily: `'Vujahday Script', cursive`,
                    fontSize: "30px",
                  }}
                >
                  {duty}
                </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
