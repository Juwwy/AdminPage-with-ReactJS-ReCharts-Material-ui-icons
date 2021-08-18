import './sidebar.css'
import {LineStyle, Report, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, PermIdentity, Timeline, TrendingUp, WorkOutline, Storefront, MonetizationOnOutlined} from '@material-ui/icons'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenuItem">
                    <div className="sidebarTitle">Dashbord</div>
                    <ul className="sidebarList">
                        <Link to="/" className="link" className="link">
                        <li className="sidebarListItem Active">
                            <LineStyle className="sidebarIcon"/> Home
                        </li>
                        </Link>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytic
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenuItem">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/> Users
                        </li>
                        </Link>
                        
                        
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/> Product
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MonetizationOnOutlined className="sidebarIcon"/> Transaction
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/> Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenuItem">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/> Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenuItem">
                    <div className="sidebarTitle">Staff</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/> Business
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytic
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/> Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
