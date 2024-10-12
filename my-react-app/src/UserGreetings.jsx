import PropTypes from 'prop-types';

// function UserGreetings(props) {

//     const welcomeMess = <h2 className="welcome-mess"> Welcome {props.name} </h2>;
//     const loginMess = <h2 className="login-mess">Please log in first</h2>;

//     return(props.isLoggedIn ? welcomeMess : loginMess);
// }

function UserGreetings({name, isLoggedIn}) {

    return(
        <div>
             { isLoggedIn ? (<h1 className="welcome-mess">Welcome, {name}</h1>) : (<h1 className="login-mess">Please Log in</h1>)}
        </div>
    );
}

UserGreetings.propTypes = {
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreetings.defaultProps = {
    name: "Guest",
    isLoggedIn: false
}
  
export default UserGreetings
