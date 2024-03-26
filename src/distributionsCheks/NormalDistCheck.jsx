import ShowTableContinious from "../utils/ShowTableContinious";

const checkNi = (ni) => {
    for (let i = 0; i < ni.length; i++) {
        if(ni[i] < 5) {
            return i;
        }
    }
}



const NormalDistCheck = ({a, sigma, intervals, ni}) => {
    const fixNi = (ni, index) => {
        
        let tempH = intervals[index];
        let tempN = ni[index];

        intervals.splice(index, index);
        ni.splice(index, index);
        if(index !== 0) {
            intervals[index-1][1] = tempH[1];
            ni[index-1] += tempN;
        }
        else {
            intervals[index+1][0] = tempH[0];
            ni[index+1] += tempN;
        }
    }
    return ( 
        <div className='normal-dist-container'>
            <ShowTableContinious intervals={intervals} ni={ni} />
        </div>
     );
}
 
export default NormalDistCheck;