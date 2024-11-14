import { createContext, useState } from "react";

export const Comcontext = createContext(null);

export const ContextProvider = ({ children }) => {
    const [performancescore, setPerformanceScore] = useState(85);
    const [seoscore, setSeoScore] = useState(80);
    const [mobilescore, setMobileScore] = useState(30);
    const [security, setSecurityScore] = useState(70);

    return (
        <Comcontext.Provider value={{
            performancescore,
            setPerformanceScore,
            seoscore,
            setSeoScore,
            mobilescore,
            setMobileScore,
            security,
            setSecurityScore
        }}>
            {children}
        </Comcontext.Provider>
    );
};


// 
// import { createContext, useState } from 'react';

// export const Comcontext = createContext(null);

// export const ContextProvider = ({ children }) => {
//     const [performancescore, setPerformanceScore] = useState(15);
//     const [seoscore, setSeoScore] = useState(30);
//     const [mobilescore, setMobileScore] = useState(0);
//     const [security, setSecurityScore] = useState(10);

//     return (
//         <Comcontext.Provider value={{
//             performancescore,
//             setPerformanceScore,
//             seoscore,
//             setSeoScore,
//             mobilescore,
//             setMobileScore,
//             security,
//             setSecurityScore
//         }}>
//             {children}
//         </Comcontext.Provider>
//     );
// };

