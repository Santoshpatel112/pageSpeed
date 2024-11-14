// import React, { useState, useContext } from 'react';
// import './ScoreCard.css';
// import { Comcontext } from '../context/newContext';

// const ScoreCard = () => {
//   const {
//     performancescore,
//     seoscore,
//     mobilescore,
//     security
//   } = useContext(Comcontext);

//   return (
//     <div className="score-card">
//       <div className="score-header">
//         <div className="score-circle">
//           <span className="score-value">{performancescore + seoscore + mobilescore + security}</span>
//         </div>
//         <p className="score-url">www.sarkariresult.com</p>
//       </div>
//       <div className="score-details">
//         <ScoreDetail label="Performance" score={performancescore} maxScore={30} color="red" />
//         <ScoreDetail label="SEO" score={seoscore} maxScore={30} color="green" />
//         <ScoreDetail label="Mobile" score={mobilescore} maxScore={30} color="gray" />
//         <ScoreDetail label="Security" score={security} maxScore={10} color="green" />
//       </div>
//       <div className="score-footer">
//         <p>Is your website slowing you down?</p>
//         <button className="score-button">Get the Free CMS</button>
//         <p className="no-credit">No credit card needed</p>
//       </div>
//     </div>
//   );
// };

// const ScoreDetail = ({ label, score, maxScore, color }) => {
//   const barWidth = (score / maxScore) * 100 + '%';
//   return (
//     <div className="score-detail">
//       <div className="score-label">
//         {label} <span className="score-text">{score}/{maxScore}</span>
//       </div>
//       <div className="score-bar">
//         <div className="score-fill" style={{ width: barWidth, backgroundColor: color }}></div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;


// import React, { useContext } from 'react';
// import './ScoreCard.css';
// import { Comcontext } from '../context/newContext';

// const ScoreCard = () => {
//     const { apiData } = useContext(Comcontext);

//     if (!apiData) {
//         return <div>Loading data...</div>;
//     }

//     // Extract data points for display
//     const { lighthouseResult, finalUrl, loadingExperience } = apiData;
//     const performanceScore = lighthouseResult.categories.performance.score * 100;
//     const seoScore = lighthouseResult.audits['largest-contentful-paint'].numericValue;
//     const mobileScore = loadingExperience.overall_category === 'FAST' ? 30 : 0;
//     const securityScore = lighthouseResult.audits['uses-https']?.score ? 10 : 0;

//     return (
//         <div className="score-card">
//             <div className="score-header">
//                 <div className="score-circle">
//                     <span className="score-value">{performanceScore}</span>
//                 </div>
//                 <p className="score-url">{finalUrl}</p>
//             </div>
//             <div className="score-details">
//                 <ScoreDetail label="Performance" score={performanceScore} maxScore={100} color="red" />
//                 <ScoreDetail label="SEO" score={seoScore} maxScore={100} color="green" />
//                 <ScoreDetail label="Mobile" score={mobileScore} maxScore={30} color="gray" />
//                 <ScoreDetail label="Security" score={securityScore} maxScore={10} color="green" />
//             </div>
//             <div className="score-footer">
//                 <p>Is your website slowing you down?</p>
//                 <button className="score-button">Get the Free CMS</button>
//                 <p className="no-credit">No credit card needed</p>
//             </div>
//         </div>
//     );
// };

// const ScoreDetail = ({ label, score, maxScore, color }) => {
//     const barWidth = (score / maxScore) * 100 + '%';
//     return (
//         <div className="score-detail">
//             <div className="score-label">
//                 {label} <span className="score-text">{score}/{maxScore}</span>
//             </div>
//             <div className="score-bar">
//                 <div className="score-fill" style={{ width: barWidth, backgroundColor: color }}></div>
//             </div>
//         </div>
//     );
// };

// export default ScoreCard;




import React, { useContext } from "react";
import { Comcontext } from "../context/newContext";
import "./ScoreCard.css";

const ScoreCard = () => {
  const { performancescore, seoscore, mobilescore, security } = useContext(Comcontext);

  return (
    <div className="score-card">
      <div className="score-header">
        <div className="score-circle">
          <span className="score-value">{performancescore}</span>
        </div>
        <p className="score-url">www.sarkariresult.com</p>
      </div>
      <div className="score-details">
        <ScoreDetail label="Performance" score={performancescore} maxScore={100} color="red" />
        <ScoreDetail label="SEO" score={seoscore} maxScore={100} color="green" />
        <ScoreDetail label="Mobile" score={mobilescore} maxScore={100} color="gray" />
        <ScoreDetail label="Security" score={security} maxScore={100} color="green" />
      </div>
      <div className="score-footer">
        <p>Is your website slowing you down?</p>
        <button className="score-button">Get the Free CMS</button>
        <p className="no-credit">No credit card needed</p>
      </div>
    </div>
  );
};

const ScoreDetail = ({ label, score, maxScore, color }) => {
  const barWidth = (score / maxScore) * 100 + '%';
  return (
    <div className="score-detail">
      <div className="score-label">
        {label} <span className="score-text">{score}/{maxScore}</span>
      </div>
      <div className="score-bar">
        <div className="score-fill" style={{ width: barWidth, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ScoreCard;
