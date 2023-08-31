import '../css/home.css'
import BB from '../assets/reaserch meth.jpg'
function Home() {
  return (
    <div className="home">

     <div className="home_right">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, natus voluptates ut sint
         quod praesentium nesciunt officiis minima ducimus,
         repudiandae esse eveniet laborum ipsa? Ullam sit molestiae ipsam sapiente cupiditate.</p>

         <button>Try Dashboard light today!</button>
     </div>
     <div className="home_left">
      <img src={BB} alt="car dashboard" />
      <div className="authorize">
        <div className="">
        <p>Do you have an acount </p> <button> <a href="http://">Sign Up</a></button><br></br>
        </div>
        <div className=""><p>Already have an acount </p> <button> <a href="http://">Sign in</a></button>
      </div></div>
     </div>
    </div>
  )
}

export default Home