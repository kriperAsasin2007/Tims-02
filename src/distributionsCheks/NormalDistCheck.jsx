import ShowTableContinious from "../utils/ShowTableContinious";
import laplaceTable from "../tables/laplaceTable";




const NormalDistCheck = ({_a, _sigma, _alpha, intervals, ni, chiSquaredTable}) => {

    

    let s = 0;
    if (!_a) {
        s++;
    }
    if (!_sigma) {
        s++;
    }
    //alert(s);
    
    // Create copies for the ni refactoring
    const newIntervals = [...intervals];
    const newNi = [...ni];

    const pi = [];
    const npi = [];

    // Create copies for the npi refactoring
    
    let newIntervalsNpi = [...newIntervals];
    let newNiNpi = [...newNi];
    let newPi = [];
    let newNpi = [...npi];


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
        newNiNpi = [...newNi];
        newIntervalsNpi = [...newIntervals];
        
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
        let a = (!_a) ? getA(intervals, ni) : _a;
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
        let a = (!_a) ? getA(intervals, ni) : _a;
        
        let sigma = (!_sigma) ? getSigma(intervals, ni) : _sigma;
        // alert(sigma);

        let phi = getPhi((intervals[0][1] - a) / sigma);
        // alert(phi)
        pi.push(phi + 0.5);

        for (let i = 1; i < ni.length - 1; i++) {
            let phi1 = getPhi((intervals[i][1] - a)/sigma);
            let phi2 = getPhi((intervals[i][0] - a)/sigma);
            pi.push(phi1 - phi2);
        }

        let sum = pi.reduce((sum, curr) => sum + curr, 0);
        pi.push(1 - sum);

        newPi = [...pi];
        
    }

    const setNpi = (pi, ni) => {
        let n = ni.reduce((sum, curr) => sum + curr, 0);
        for (let i = 0; i < pi.length; i++) {
            npi.push(pi[i] * n);
            //newNpi.push(npi[i]);
        }

        newNpi = [...npi];
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
        let index = checkNpi(npi);

        while(index !== undefined) {
            let tempH = newIntervalsNpi[index];
            let tempN = newNiNpi[index];
            let tempPi = newPi[index];
            let tempNpi = newNpi[index];


            

            // Splice the copied arrays
            newIntervalsNpi.splice(index, 1);
            newNiNpi.splice(index, 1);
            newPi.splice(index, 1);
            newNpi.splice(index,1);

            

            if(index !== 0) {
                
                newIntervalsNpi[index - 1][1] = tempH[1];

                newNiNpi[index - 1] += tempN;

                newPi[index - 1] += tempPi;

                newNpi[index - 1] += tempNpi;
            }
            else {

                newIntervalsNpi[index][0] = tempH[0];

                newNiNpi[index] += tempN;

                newPi[index] += tempPi;

                newNpi[index] += tempNpi;
            }

            // alert(`interval[1]: ${newIntervals[index][1]}`);
            index = checkNpi(newNpi);

            
            // alert(`index: ${index}`);
        }
    }

    const getXEmp = () => {
        let r = newNpi.length - 1;
        //alert(npi.length);
        let sum = 0;

        for (let i = 0; i < r+1; i++) {
            //alert(newNiNpi[i]);
            sum += (newNiNpi[i] - newNpi[i])**2/newNpi[i];
        }

        return sum;
    }

    const getXCryt = (s) => {
        let r = newNpi.length - 1;
        // alert(r);

        let df = r-s;

        return chiSquaredTable[df][_alpha];
        
    }

    return ( 
        <div className='normal-dist-check-container'>
            <h3>Початкова таблиця: </h3>
            <ShowTableContinious intervals={intervals} ni={ni} />
            {fixNi(ni)}
            

            <h3>Таблиця після об'єднання по ni: </h3>
            <ShowTableContinious intervals={newIntervals} ni={newNi} />
        

            <div>
                {setPi(newIntervals, newNi)}
                <h3>Знаходимо pi: </h3>
                <ShowTableContinious intervals={newIntervals} ni={newNi} pi={pi}/>
                
            </div>
            {setNpi(pi, newNi)}
            


            <h3>Знаходимо npi: </h3>
             <ShowTableContinious intervals={newIntervals} ni={newNi} pi={pi} npi={npi}/>
             
            {fixNpi()}
            <h3>Остаточна таблиця: </h3>
            <ShowTableContinious intervals={newIntervalsNpi} ni={newNiNpi} pi={newPi} npi={newNpi}/>



            <div className="params">
                <div className="params-1">
                    <h4>Параметр a: </h4>
                    <p>{(!_a) ? getA(newIntervals, newNi) : _a}</p>

                    <h4>Параметр σ: </h4>
                    <p>{(!_sigma) ? getSigma(newIntervals, newNi) : _sigma}</p>

                    
                    <h4>Кількість невідомих s: </h4>
                    <p>{s}</p>

                    
                    <h4>Рівень значущості α: </h4>
                    <p>{_alpha}</p>
                </div>
                

                <div className="params-2">
                    <h4>X емп: </h4>
                    <p>{getXEmp()}</p>

                    
                    <h4>X крит: </h4>
                    <p>{getXCryt(s)}</p>
                </div>      
            </div>
                  
            

            <div className="conclusion">
                {(getXEmp() < getXCryt(s)) ? (<h3>Гіпотеза прийнята</h3>) : (<h3>Гіпотеза не прийнята</h3>)}
            </div>
        </div>
     );
}
 
export default NormalDistCheck;