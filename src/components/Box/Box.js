import "./Box.css";


const Inbox = () => {

    return (
        <>
            <h1>Styling HTML Tables and CSS</h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Domenic</td>
                        <td>88.100</td>
                        <td>dcode</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Stamat</td>
                        <td>72.800</td>
                        <td>Student</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pesho</td>
                        <td>22.800</td>
                        <td>dcode</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

}

export default Inbox;