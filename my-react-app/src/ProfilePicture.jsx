
function ProfilePicture() {

    const imgUrl = './src/assets/ced.jpg';

    const clickImg = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => clickImg(e)} src={imgUrl}></img>);
}

export default ProfilePicture