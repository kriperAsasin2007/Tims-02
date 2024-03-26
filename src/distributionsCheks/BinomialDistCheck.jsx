import ShowTableDiscrete from "../utils/ShowTableDiscrete";

const BinomialDistCheck = ({_p, _alpha, xi, ni}) => {

    let s = 0;
    const m = xi[xi.length-1];

    const newXi = [...xi];
    const newNi = [...ni];
    const pi = [];
    const npi = [];

    //For npi

    const newXiNpi = [];
    const newNiNpi = [];
    const newPi = [];
    const newNpi = [];

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
        let p = getP();
        let q = 1 - p;
        
        for (let i = 0; i < xi.length; i++) {
            pi.push(getC(m, i) * p**i * q**(m-i));
        }
    }

    if (!_p) {
        s++;
    }
    return ( 
        <div className='binomial-dist-check-container'>
            <ShowTableDiscrete xi={xi} ni={ni} />
        </div>
     );
}
 
export default BinomialDistCheck;