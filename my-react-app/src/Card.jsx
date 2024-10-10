import profilePic from './assets/ced.jpg';

function Card() {

    return(
        <div className="card">
              <img src={profilePic} alt="Profile Picture" />
              <h3>Cedric Nano</h3>
              <p>Software Engineer</p>
        </div>
    );
}

export default Card