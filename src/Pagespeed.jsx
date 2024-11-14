// import React, { useEffect, useState } from "react";
// import "./App.css";

// const PageSpeedInsights = () => {
//   const [pageSpeedData, setPageSpeedData] = useState(null);
//   const url = "https://developers.google.com"; // Target URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
//         );
//         const data = await response.json();
//         setPageSpeedData(data);
//       } catch (error) {
//         console.error("Error fetching PageSpeed data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!pageSpeedData) return <div>Loading...</div>;

//   // Extract relevant metrics for display
//   const { lighthouseResult } = pageSpeedData;
//   const performanceScore = lighthouseResult.categories.performance.score * 100;
//   const metrics = lighthouseResult.audits;

//   return (
//     <div className="container">
//       <h1>PageSpeed Insights Report</h1>

//       {/* Performance Score Card */}
//       <div className="card">
//         <h2>Performance Score</h2>
//         <p>{performanceScore}</p>
//       </div>

//       {/* Metric Cards */}
//       <div className="cards">
//         <MetricCard
//           title="First Contentful Paint"
//           metric={metrics["first-contentful-paint"]}
//         />
//         <MetricCard title="Speed Index" metric={metrics["speed-index"]} />
//         <MetricCard
//           title="Largest Contentful Paint"
//           metric={metrics["largest-contentful-paint"]}
//         />
//         <MetricCard
//           title="Time to Interactive"
//           metric={metrics["interactive"]}
//         />
//         <MetricCard
//           title="Total Blocking Time"
//           metric={metrics["total-blocking-time"]}
//         />
//         <MetricCard
//           title="Cumulative Layout Shift"
//           metric={metrics["cumulative-layout-shift"]}
//         />
//       </div>
//     </div>
//   );
// };

// const MetricCard = ({ title, metric }) => (
//   <div className="card">
//     <h3>{title}</h3>
//     <p>Score: {metric.score * 100}</p>
//     <p>Display Value: {metric.displayValue}</p>
//   </div>
// );

// export default PageSpeedInsights;




import React, { useEffect, useState } from "react";
import "./App.css";

const PageSpeedInsights = () => {
  const [pageSpeedData, setPageSpeedData] = useState(null);
  const [error, setError] = useState(null); // To handle errors

  const url = "https://developers.google.com"; // Target URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPageSpeedData(data);
      } catch (error) {
        setError("Error fetching PageSpeed data");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!pageSpeedData) return <div>Loading...</div>;

  const { lighthouseResult } = pageSpeedData;
  const performanceScore = lighthouseResult.categories.performance.score * 100;
  const metrics = lighthouseResult.audits;

  return (
    <div className="container">
      <h1>PageSpeed Insights Report</h1>

      {/* Performance Score Card */}
      <div className="card">
        <h2>Performance Score</h2>
        <p>{performanceScore}</p>
      </div>

      {/* Metric Cards */}
      <div className="cards">
        <MetricCard
          title="First Contentful Paint"
          metric={metrics["first-contentful-paint"]}
        />
        <MetricCard title="Speed Index" metric={metrics["speed-index"]} />
        <MetricCard
          title="Largest Contentful Paint"
          metric={metrics["largest-contentful-paint"]}
        />
        <MetricCard
          title="Time to Interactive"
          metric={metrics["interactive"]}
        />
        <MetricCard
          title="Total Blocking Time"
          metric={metrics["total-blocking-time"]}
        />
        <MetricCard
          title="Cumulative Layout Shift"
          metric={metrics["cumulative-layout-shift"]}
        />
      </div>
    </div>
  );
};

const MetricCard = ({ title, metric }) => {
  if (!metric) return null; // Check for metric existence to avoid errors

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Score: {metric.score ? metric.score * 100 : "N/A"}</p>
      <p>Display Value: {metric.displayValue || "N/A"}</p>
    </div>
  );
};

export default PageSpeedInsights;
