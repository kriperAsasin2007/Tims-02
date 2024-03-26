const ShowTableContinious = ({intervals, ni}) => {
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
            </table>
        </div>
     );
}
 
export default ShowTableContinious;