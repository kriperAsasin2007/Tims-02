import '../styles/binomial.css'

const ShowTableDiscrete = ({xi, ni, pi, npi}) => {
    return ( 
        <div className='discrete-table-container'>
            <table className="discrete-table">
                <tr>
                    <th>xi</th>
                    {xi.map(num => (
                        <td>{num}</td>
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
            </table>
        </div>
     );
}
 
export default ShowTableDiscrete;