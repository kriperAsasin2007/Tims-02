import { useState } from "react";
import ShowTableContinious from "../utils/ShowTableContinious";





const NormalDistCheck = ({a, sigma, intervals, ni}) => {

    // Create copies of the arrays
    const newIntervals = [...intervals];
    const newNi = [...ni];


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
        alert(index);
        

        

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

            alert(`interval[1]: ${newIntervals[index][1]}`);
            index = checkNi(newNi);

            
            alert(`index: ${index}`);
        }

        
    }
    return ( 
        <div className='normal-dist-container'>
            <ShowTableContinious intervals={intervals} ni={ni} />
            {fixNi(ni)}
            <ShowTableContinious intervals={newIntervals} ni={newNi} />
            
        </div>
     );
}
 
export default NormalDistCheck;