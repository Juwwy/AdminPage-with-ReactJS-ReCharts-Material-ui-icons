import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h3 className="userTitle">Edit User</h3>
                <Link to="/addUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div  className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="userShowTopImg" alt=""/>
                        <div className="userShowTopTitle">
                            <span className="userShowTopUsername">
                                Boss Juwwy
                            </span>
                            <span className="userShowTopUserJob">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Juwwytv345</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">26-07-2001</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+234 807 56642</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">Juwwytv@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Lagos | Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Username"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder="Fullname"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>E-Mail</label>
                                <input type="email" placeholder="E-mail"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Telephone</label>
                                <input type="text" placeholder="Telephone"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Date Of Birth</label>
                                <input type="text" placeholder="DOB"
                                className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Home address"
                                className="userUpdateInput"/>
                            </div>
                           
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYXV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="userUpdateImg" alt=""/>
                                <label htmlFor="file"><Publish className="userUpdateIcon"/> </label>
                                <input type="file"  id="file" style={{display:"none"}}/>
                               
                            </div>
                            <button className="userUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
