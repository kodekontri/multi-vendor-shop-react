import React from "react"
import { connect } from "react-redux"
import Button from "../../../components/button"
import { setUser } from "../../../redux/actions/user"

function Login(props) {
    const handleChange = (e) =>{
        props.user.setUser({[e.target.name]:e.target.value})
    }

    return (
        <div>
            <input onChange={handleChange} type="text" name="username" placeholder='Enter Username' />
            <input onChange={handleChange} type="email" name="email" placeholder='Enter Email' />
            <Button>Submit</Button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        user: {
        setUser: (user)=>dispatch(setUser(user))
        }
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);