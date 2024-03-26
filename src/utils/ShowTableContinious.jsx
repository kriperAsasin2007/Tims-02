const ShowTableContinious = ({intervals, ni, pi, npi}) => {
    return ( 
        <div className='continious-table-container'>
            <table>
                <tr>
                    <th>hi-1; hi</th>
                    {intervals.map(interval => (
                        <td>{interval[0]} {interval[1]}</td>
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

                {npi && <tr>
                    <th>npi</th>
                    {npi.map(npi => (
                        <td>{npi}</td>
                    ))}
                </tr>}
            </table>
        </div>
     );
}
 
export default ShowTableContinious;