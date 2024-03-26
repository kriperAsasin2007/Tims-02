import ShowTableContinious from "../utils/ShowTableContinious";

const NormalDistCheck = ({a, sigma, intervals, ni}) => {
    return ( 
        <div className='normal-dist-container'>
            <ShowTableContinious intervals={intervals} ni={ni} />
        </div>
     );
}
 
export default NormalDistCheck;