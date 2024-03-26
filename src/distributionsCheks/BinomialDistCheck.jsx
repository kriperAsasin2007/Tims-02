import ShowTableDiscrete from "../utils/ShowTableDiscrete";

const BinomialDistCheck = ({_p, _alpha, xi, ni}) => {

    let s = 0;
    const m = xi[xi.length-1];

    const newXi = [...xi];
    const newNi = [...ni];
    const pi = [];
    const npi = [];

    let newPi = [];
    let newNpi = [];

    //For npi

    let newXiNpi = [];
    let newNiNpi = [];
    let newPiNpi = [];
    let newNpiNpi = [];

    const getP = () => {
        let n = ni.reduce((sum, curr) => sum + curr, 0);

        let sum = 0;
        for (let i = 0; i < ni.length; i++) {
            sum += ni[i] * xi[i];
        }
        let xAvg = sum / n;


        return xAvg / m;
    }

    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }

    const getC = (m,n) => {
        return (factorial(m))/(factorial(n) * factorial(m-n));
    }

    const setPi = () => {
        let p = (!_p) ? getP() : _p;
        let q = 1 - p;

        // alert(p);
        
        for (let i = 0; i < xi.length; i++) {
            pi.push(getC(m, i) * p**i * q**(m-i));
        }
    }

    const setNpi = () => {

        let n = ni.reduce((sum, curr) => sum + curr, 0);
        for (let i = 0; i < xi.length; i++) {
            npi.push(n * pi[i]);
        }
    }

    const checkNi = (ni) => {
        let toReturn;
        // alert(ni.length);
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
            let tempX = newXi[index];
            let tempN = newNi[index];
            let tempPi = newPi[index];
            let tempNpi = newNpi[index];


            

            // Splice the copied arrays
            newXi.splice(index, 1);
            newNi.splice(index, 1);
            newPi.splice(index, 1);
            newNpi.splice(index, 1);

            

            if(index !== 0) {
                
                newXi[index - 1] += tempX;

                newNi[index - 1] += tempN;

                newPi[index - 1] += tempPi;

                newNpi[index - 1] += tempNpi;
            }
            else {

                newXi[index] += tempX;

                newNi[index] += tempN;

                newPi[index] += tempPi;

                newNpi[index] += tempNpi;
            }

            // alert(`interval[1]: ${newIntervals[index][1]}`);
            index = checkNi(newNi);

            
            // alert(`index: ${index}`);
        }

        
    }

    const checkNpi = (npi) => {
        let toReturn;
        for (let i = 0; i < npi.length; i++) {
            if(npi[i] < 10) {
                toReturn = i;
            }
            
        }
        return toReturn;
    }

    const fixNpi = () => {
        let index = checkNpi(newNpiNpi);

        while(index !== undefined) {
            let tempX = newXiNpi[index];
            let tempN = newNiNpi[index];
            let tempPi = newPiNpi[index];
            let tempNpi = newNpiNpi[index];


            

            // Splice the copied arrays
            newXiNpi.splice(index, 1);
            newNiNpi.splice(index, 1);
            newPiNpi.splice(index, 1);
            newNpiNpi.splice(index,1);

            

            if(index !== 0) {
                
                newXiNpi[index - 1] += tempX;

                newNiNpi[index - 1] += tempN;

                newPiNpi[index - 1] += tempPi;

                newNpiNpi[index - 1] += tempNpi;
            }
            else {

                newXiNpi[index] += tempX;

                newNiNpi[index] += tempN;

                newPiNpi[index] += tempPi;

                newNpiNpi[index] += tempNpi;
            }

            // alert(`interval[1]: ${newIntervals[index][1]}`);
            index = checkNpi(newNpiNpi);

            
            // alert(`index: ${index}`);
        }
    }

    if (!_p) {
        s++;
    }
    return ( 
        <div className='binomial-dist-check-container'>
            <ShowTableDiscrete xi={xi} ni={ni} />
            {setPi()}
            {newPi = [...pi]}
            <br />
            <br />
            <ShowTableDiscrete xi={xi} ni={ni} pi={pi} />
            {setNpi()}
            {newNpi = [...npi]}
            <br />
            <br />

            <ShowTableDiscrete xi={xi} ni={ni} pi={pi} npi={npi} />

            {fixNi(ni)}
            
            {newXiNpi = [...newXi]}
            {newNiNpi = [...newNi]}
            {newPiNpi = [...newPi]}
            {newNpiNpi = [...newNpi]}
            

            <br />
            <br />
            <p>After fix ni:</p>
            <ShowTableDiscrete xi={newXi} ni={newNi} pi={newPi} npi={newNpi} />

            {fixNpi()}

            <br />
            <br />
            <p>After fix npi:</p>
            <ShowTableDiscrete xi={newXiNpi} ni={newNiNpi} pi={newPiNpi} npi={newNpiNpi} />
        </div>
     );
}
 
export default BinomialDistCheck;