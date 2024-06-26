// import '../styles/normal.css'

const ShowTableContinious = ({intervals, ni, pi, npi}) => {
    return ( 
        <div className='continious-table-container'>
            <table className="continious-table">
                <tbody>
                    <tr>
                        <th>(hi-1; hi]</th>
                        {intervals.map(interval => (
                            <td>{'(' + interval[0]} {interval[1] + ']'}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>ni</th>
                        {ni.map(num => (
                            <td>{num}</td>
                        ))}
                    </tr>
                    {pi && <tr>
                        <th>pi</th>
                        {pi.map(pi => (
                            <td>{pi}</td>
                        ))}
                    </tr>}

                    {npi && <tr className='npi'>
                        <th>npi</th>
                        {npi.map(npi => (
                            <td className='item'>{npi}</td>
                        ))}
                    </tr>}
                </tbody>
                
            </table>
        </div>
     );
}
 
export default ShowTableContinious;