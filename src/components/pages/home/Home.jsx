import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../../dummyData'
import WidgetSm from '../../widgetsmall/WidgetSm'
import WidgetLg from '../../widgetlarge/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/> 
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm className="widgetSm"/>
                <WidgetLg className="widgetLg"/>
            </div>
        </div>
    )
}
