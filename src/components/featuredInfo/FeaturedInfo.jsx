import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,432</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon Negative"/></span>
                </div>
               <span className="featuredSub">Compare to last month</span> 
            </div>
            <div className="featureditem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,096</span>
                    <span className="featuredMoneyRate">-6.40 <ArrowDownward className="featuredIcon Negative"/></span>
                </div>
               <span className="featuredSub">Compare to last month</span> 
            </div>
            <div className="featureditem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,276</span>
                    <span className="featuredMoneyRate">+7.4 <ArrowUpward className="featuredIcon"/></span>
                </div>
               <span className="featuredSub">Compare to last month</span> 
            </div>
        </div>
    )
}
