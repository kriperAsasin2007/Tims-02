import { useState } from "react";
import ShowTableContinious from "../utils/ShowTableContinious";





const NormalDistCheck = ({a, sigma, intervals, ni}) => {

    const laplaceTable = [
        { x: 0, phi: 0 },
        { x: 0.01, phi: 0.004 },
        { x: 0.02, phi: 0.008 },
        { x: 0.03, phi: 0.012 },
        { x: 0.04, phi: 0.016 },
        { x: 0.05, phi: 0.0199 },
        { x: 0.06, phi: 0.0239 },
        { x: 0.07, phi: 0.0279 },
        { x: 0.08, phi: 0.0319 },
        { x: 0.09, phi: 0.0359 },
        { x: 0.1, phi: 0.0398 },
        { x: 0.11, phi: 0.0438 },
        { x: 0.12, phi: 0.0478 },
        { x: 0.13, phi: 0.0517 },
        { x: 0.14, phi: 0.0557 },
        { x: 0.15, phi: 0.0596 },
        { x: 0.16, phi: 0.0636 },
        { x: 0.17, phi: 0.0675 },
        { x: 0.18, phi: 0.0714 },
        { x: 0.19, phi: 0.0753 },
        { x: 0.2, phi: 0.0793 },
        { x: 0.21, phi: 0.0832 },
        { x: 0.22, phi: 0.0871 },
        { x: 0.23, phi: 0.091 },
        { x: 0.24, phi: 0.0948 },
        { x: 0.25, phi: 0.0987 },
        { x: 0.26, phi: 0.1026 },
        { x: 0.27, phi: 0.1064 },
        { x: 0.28, phi: 0.1103 },
        { x: 0.29, phi: 0.1141 },
        { x: 0.3, phi: 0.1179 },
        { x: 0.31, phi: 0.1217 },
        { x: 0.32, phi: 0.1255 },
        { x: 0.33, phi: 0.1293 },
        { x: 0.34, phi: 0.1331 },
        { x: 0.35, phi: 0.1368 },
        { x: 0.36, phi: 0.1406 },
        { x: 0.37, phi: 0.1443 },
        { x: 0.38, phi: 0.148 },
        { x: 0.39, phi: 0.1517 },
        { x: 0.4, phi: 0.1554 },
        { x: 0.41, phi: 0.1591 },
        { x: 0.42, phi: 0.1628 },
        { x: 0.43, phi: 0.1664 },
        { x: 0.44, phi: 0.17 },
        { x: 0.45, phi: 0.1736 },
        { x: 0.46, phi: 0.1772 },
        { x: 0.47, phi: 0.1808 },
        { x: 0.48, phi: 0.1844 },
        { x: 0.49, phi: 0.1879 },
        { x: 0.5, phi: 0.1915 },
        { x: 0.51, phi: 0.195 },
        { x: 0.52, phi: 0.1985 },
        { x: 0.53, phi: 0.2019 },
        { x: 0.54, phi: 0.2054 },
        { x: 0.55, phi: 0.2088 },
        { x: 0.56, phi: 0.2123 },
        { x: 0.57, phi: 0.2157 },
        { x: 0.58, phi: 0.219 },
        { x: 0.59, phi: 0.2224 },
        { x: 0.6, phi: 0.2257 },
        { x: 0.61, phi: 0.2291 },
        { x: 0.62, phi: 0.2324 },
        { x: 0.63, phi: 0.2357 },
        { x: 0.64, phi: 0.2389 },
        { x: 0.65, phi: 0.2422 },
        { x: 0.66, phi: 0.2454 },
        { x: 0.67, phi: 0.2486 },
        { x: 0.68, phi: 0.2517 },
        { x: 0.69, phi: 0.2549 },
        { x: 0.7, phi: 0.258 },
        { x: 0.71, phi: 0.2611 },
        { x: 0.72, phi: 0.2642 },
        { x: 0.73, phi: 0.2673 },
        { x: 0.74, phi: 0.2703 },
        { x: 0.75, phi: 0.2734 },
        { x: 0.76, phi: 0.2764 },
        { x: 0.77, phi: 0.2794 },
        { x: 0.78, phi: 0.2823 },
        { x: 0.79, phi: 0.2852 },
        { x: 0.8, phi: 0.2881 },
        { x: 0.81, phi: 0.291 },
        { x: 0.82, phi: 0.2939 },
        { x: 0.83, phi: 0.2967 },
        { x: 0.84, phi: 0.2995 },
        { x: 0.85, phi: 0.3023 },
        { x: 0.86, phi: 0.3051 },
        { x: 0.87, phi: 0.3078 },
        { x: 0.88, phi: 0.3106 },
        { x: 0.89, phi: 0.3133 },
        { x: 0.9, phi: 0.3159 },
        { x: 0.91, phi: 0.3186 },
        { x: 0.92, phi: 0.3212 },
        { x: 0.93, phi: 0.3238 },
        { x: 0.94, phi: 0.3264 },
        { x: 0.95, phi: 0.3289 },
        { x: 0.96, phi: 0.3315 },
        { x: 0.97, phi: 0.334 },
        { x: 0.98, phi: 0.3365 },
        { x: 0.99, phi: 0.3389 },
        { x: 1, phi: 0.3413 },
        { x: 1.01, phi: 0.3438 },
        { x: 1.02, phi: 0.3461 },
        { x: 1.03, phi: 0.3485 },
        { x: 1.04, phi: 0.3508 },
        { x: 1.05, phi: 0.3531 },
        { x: 1.06, phi: 0.3554 },
        { x: 1.07, phi: 0.3577 },
        { x: 1.08, phi: 0.3599 },
        { x: 1.09, phi: 0.3621 },
        { x: 1.1, phi: 0.3643 },
        { x: 1.11, phi: 0.3665 },
        { x: 1.12, phi: 0.3686 },
        { x: 1.13, phi: 0.3708 },
        { x: 1.14, phi: 0.3729 },
        { x: 1.15, phi: 0.3749 },
        { x: 1.16, phi: 0.377 },
        { x: 1.17, phi: 0.379 },
        { x: 1.18, phi: 0.381 },
        { x: 1.19, phi: 0.383 },
        { x: 1.2, phi: 0.3849 },
        { x: 1.21, phi: 0.3869 },
        { x: 1.22, phi: 0.3883 },
        { x: 1.23, phi: 0.3907 },
        { x: 1.24, phi: 0.3925 },
        { x: 1.25, phi: 0.3944 },
        { x: 1.26, phi: 0.3962 },
        { x: 1.27, phi: 0.398 },
        { x: 1.28, phi: 0.3997 },
        { x: 1.29, phi: 0.4015 },
        { x: 1.3, phi: 0.4032 },
        { x: 1.31, phi: 0.4049 },
        { x: 1.32, phi: 0.4066 },
        { x: 1.33, phi: 0.4082 },
        { x: 1.34, phi: 0.4099 },
        { x: 1.35, phi: 0.4115 },
        { x: 1.36, phi: 0.4131 },
        { x: 1.37, phi: 0.4147 },
        { x: 1.38, phi: 0.4162 },
        { x: 1.39, phi: 0.4177 },
        { x: 1.4, phi: 0.4192 },
        { x: 1.41, phi: 0.4207 },
        { x: 1.42, phi: 0.4222 },
        { x: 1.43, phi: 0.4236 },
        { x: 1.44, phi: 0.4251 },
        { x: 1.45, phi: 0.4265 },
        { x: 1.46, phi: 0.4279 },
        { x: 1.47, phi: 0.4292 },
        { x: 1.48, phi: 0.4306 },
        { x: 1.49, phi: 0.4319 },
        { x: 1.5, phi: 0.4332 },
        { x: 1.51, phi: 0.4345 },
        { x: 1.52, phi: 0.4357 },
        { x: 1.53, phi: 0.437 },
        { x: 1.54, phi: 0.4382 },
        { x: 1.55, phi: 0.4394 },
        { x: 1.56, phi: 0.4406 },
        { x: 1.57, phi: 0.4418 },
        { x: 1.58, phi: 0.4429 },
        { x: 1.59, phi: 0.4441 },
        { x: 1.6, phi: 0.4452 },
        { x: 1.61, phi: 0.4463 },
        { x: 1.62, phi: 0.4474 },
        { x: 1.63, phi: 0.4484 },
        { x: 1.64, phi: 0.4495 },
        { x: 1.65, phi: 0.4505 },
        { x: 1.66, phi: 0.4515 },
        { x: 1.67, phi: 0.4525 },
        { x: 1.68, phi: 0.4535 },
        { x: 1.69, phi: 0.4545 },
        { x: 1.7, phi: 0.4554 },
        { x: 1.71, phi: 0.4564 },
        { x: 1.72, phi: 0.4573 },
        { x: 1.73, phi: 0.4582 },
        { x: 1.74, phi: 0.4591 },
        { x: 1.75, phi: 0.4599 },
        { x: 1.76, phi: 0.4608 },
        { x: 1.77, phi: 0.4616 },
        { x: 1.78, phi: 0.4625 },
        { x: 1.79, phi: 0.4633 },
        { x: 1.8, phi: 0.4641 },
        { x: 1.81, phi: 0.4649 },
        { x: 1.82, phi: 0.4656 },
        { x: 1.83, phi: 0.4664 },
        { x: 1.84, phi: 0.4671 },
        { x: 1.85, phi: 0.4678 },
        { x: 1.86, phi: 0.468 },
        { x: 1.87, phi: 0.4693 },
        { x: 1.88, phi: 0.4699 },
        { x: 1.89, phi: 0.4706 },
        { x: 1.9, phi: 0.4713 },
        { x: 1.91, phi: 0.4719 },
        { x: 1.92, phi: 0.4726 },
        { x: 1.93, phi: 0.4732 },
        { x: 1.94, phi: 0.4738 },
        { x: 1.95, phi: 0.4744 },
        { x: 1.96, phi: 0.475 },
        { x: 1.97, phi: 0.4756 },
        { x: 1.98, phi: 0.4761 },
        { x: 1.99, phi: 0.4767 },
        { x: 2, phi: 0.4772 },
        { x: 2.02, phi: 0.4783 },
        { x: 2.04, phi: 0.4793 },
        { x: 2.06, phi: 0.4803 },
        { x: 2.08, phi: 0.4812 },
        { x: 2.1, phi: 0.4821 },
        { x: 2.12, phi: 0.483 },
        { x: 2.14, phi: 0.4838 },
        { x: 2.16, phi: 0.4846 },
        { x: 2.18, phi: 0.4854 },
        { x: 2.2, phi: 0.4861 },
        { x: 2.22, phi: 0.4868 },
        { x: 2.24, phi: 0.4875 },
        { x: 2.26, phi: 0.4881 },
        { x: 2.28, phi: 0.4887 },
        { x: 2.3, phi: 0.4893 },
        { x: 2.32, phi: 0.4898 },
        { x: 2.34, phi: 0.4904 },
        { x: 2.36, phi: 0.4909 },
        { x: 2.38, phi: 0.4913 },
        { x: 2.4, phi: 0.4918 },
        { x: 2.42, phi: 0.4922 },
        { x: 2.44, phi: 0.4927 },
        { x: 2.46, phi: 0.4931 },
        { x: 2.48, phi: 0.4934 },
        { x: 2.5, phi: 0.4938 },
        { x: 2.52, phi: 0.4941 },
        { x: 2.54, phi: 0.4945 },
        { x: 2.56, phi: 0.4948 },
        { x: 2.58, phi: 0.4951 },
        { x: 2.6, phi: 0.4953 },
        { x: 2.62, phi: 0.4956 },
        { x: 2.64, phi: 0.4959 },
        { x: 2.66, phi: 0.4961 },
        { x: 2.68, phi: 0.4963 },
        { x: 2.7, phi: 0.4965 },
        { x: 2.72, phi: 0.4967 },
        { x: 2.74, phi: 0.4969 },
        { x: 2.76, phi: 0.4971 },
        { x: 2.78, phi: 0.4973 },
        { x: 2.8, phi: 0.4974 },
        { x: 2.82, phi: 0.4976 },
        { x: 2.84, phi: 0.4977 },
        { x: 2.86, phi: 0.4979 },
        { x: 2.88, phi: 0.498 },
        { x: 2.9, phi: 0.4981 },
        { x: 2.92, phi: 0.4982 },
        { x: 2.94, phi: 0.4984 },
        { x: 2.96, phi: 0.4985 },
        { x: 2.98, phi: 0.4986 },
        { x: 3, phi: 0.49865 },
        { x: 3.2, phi: 0.49931 },
        { x: 3.4, phi: 0.49966 },
        { x: 3.6, phi: 0.499841 },
        { x: 3.8, phi: 0.499928 },
        { x: 4, phi: 0.499968 },
        { x: 4.5, phi: 0.499997 },
        { x: 5, phi: 0.499997 }
      ];

    // Create copies of the arrays
    const newIntervals = [...intervals];
    const newNi = [...ni];
    const pi = [];
    const npi = [];


    const checkNi = (ni) => {
        let toReturn;
        for (let i = 0; i < ni.length; i++) {
            if(ni[i] < 5) {
                toReturn = i;
            }
            
        }
        return toReturn;
    }


    const fixNi = (ni) => {
        let index = checkNi(ni);
        // alert(index);
        

        

        while(index !== undefined) {
            let tempH = newIntervals[index];
            let tempN = newNi[index];


            

            // Splice the copied arrays
            newIntervals.splice(index, 1);
            newNi.splice(index, 1);

            

            if(index !== 0) {
                
                newIntervals[index - 1][1] = tempH[1];

                newNi[index - 1] += tempN;
            }
            else {

                newIntervals[index][0] = tempH[0];

                newNi[index] += tempN;
            }

            // alert(`interval[1]: ${newIntervals[index][1]}`);
            index = checkNi(newNi);

            
            // alert(`index: ${index}`);
        }

        
    }

    const getXi = (intervals) => {
        let intervalsCopy = [...intervals]
        return intervalsCopy.map(interval => (interval[0] + interval[1])/2);
    }

    const getA = (intervals, ni) => {
        let n = ni.reduce((sum, curr) => sum + curr, 0);
        let xi = getXi(intervals);

        let sum = 0;
        for (let i = 0; i < ni.length; i++) {
            sum += ni[i] * xi[i];
        }
        return sum / n;

    }

    const getSigma = (intervals, ni) => {
        let n = ni.reduce((sum, curr) => sum + curr, 0);
        let a = getA(intervals, ni);
        let xi = getXi(intervals);
        let sum = 0;
        

        for (let i = 0; i < ni.length; i++) {
            sum += ni[i] * (xi[i] - a)**2;
        }
        let D = sum / n;

        return Math.sqrt(D);
    }

    const getPhi = (x) => {
        let xRounded = Math.abs(parseFloat(x.toFixed(2)));

        const entry = laplaceTable.find(entry => entry.x == xRounded);

        return (x > 0) ? entry.phi : entry.phi * -1;
    }

    const setPi = (intervals, ni) => {
        let a = getA(intervals, ni);
        let sigma = getSigma(intervals, ni);

        let phi = getPhi((intervals[0][1] - a) / sigma);
        pi.push(phi + 0.5);

        for (let i = 1; i < ni.length - 1; i++) {
            let phi1 = getPhi((intervals[i][1] - a)/sigma);
            let phi2 = getPhi((intervals[i][0] - a)/sigma);
            pi.push(phi1 - phi2);
        }

        let sum = pi.reduce((sum, curr) => sum + curr, 0);
        pi.push(1 - sum);
    }

    const setNpi = (pi, ni) => {
        let n = ni.reduce((sum, curr) => sum + curr, 0);
        for (let i = 0; i < pi.length; i++) {
            npi.push(pi[i] * n);
        }
    }

    

    return ( 
        <div className='normal-dist-container'>
            <ShowTableContinious intervals={intervals} ni={ni} />
            {fixNi(ni)}
            <ShowTableContinious intervals={newIntervals} ni={newNi} />
            <div>
                a: {getA(newIntervals, newNi)}
            </div>

            <div>
                sigma: {getSigma(newIntervals, newNi)}
            </div>
            
            <div>
                laplace : {getPhi(-0.52)}
            </div>

            <div>
                pi : {setPi(newIntervals, newNi)}
                {pi[0]}
            </div>
            {setNpi(pi, newNi)}

            <ShowTableContinious intervals={newIntervals} ni={newNi} pi={pi} npi={npi}/>
        </div>
     );
}
 
export default NormalDistCheck;