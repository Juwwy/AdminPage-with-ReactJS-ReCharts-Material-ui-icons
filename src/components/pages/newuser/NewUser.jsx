import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newuserTitle">New User</h1>
            <form a className="newUserForm">
                <div className="newUserItem">
                    <label >
                        Username
                    </label>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="newUserItem">
                    <label >
                        Fullname
                    </label>
                    <input type="text" placeholder="Fullname"/>
                </div>
                <div className="newUserItem">
                    <label >
                        E-mail
                    </label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="newUserItem">
                    <label >
                        Telephone
                    </label>
                    <input type="text" placeholder="Telephone"/>
                </div>
                <div className="newUserItem">
                    <label >
                        DOB
                    </label>
                    <input type="text" placeholder="Date of birth"/>
                </div>
                <div className="newUserItem">
                    <label >
                        Address
                    </label>
                    <input type="text" placeholder="Usernae"/>
                </div>
                <div className="newUserItem">
                    <label >
                        Password
                    </label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="newUserItem">
                    <label >
                        Gender
                    </label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"/>
                    <label for="other">Other</label>
                    </div>
                    
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
