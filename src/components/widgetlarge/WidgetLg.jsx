import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Adeleke Juwwy</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$3,550</td>
                    <td className="widgetLgStatus"><Button type="Approve"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Adeleke Juwwy</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$6,500</td>
                    <td className="widgetLgStatus"><Button type="Decline"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Adeleke Juwwy</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$6,500</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Adeleke Juwwy</span>
                    </td>
                    <td className="widgetLgDate">2 Aug 2021</td>
                    <td className="widgetLgAmount">$7,540</td>
                    <td className="widgetLgStatus"><Button type="Approve"/></td>
                </tr>
            </table>

        </div>
    )
}
