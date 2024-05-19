import Leaf1 from "../assets/img/leaf1.png";
import Leaf2 from "../assets/img/leaf2.png";
import Leaf3 from "../assets/img/leaf3.png";
import Leaf4 from "../assets/img/leaf4.png";
import Leaf5 from "../assets/img/leaf5.png";
import Leaf6 from "../assets/img/leaf6.png";
import SearchForm from "./SearchBar";
import NotificationIcon from "../assets/img/notificationIcon.png"

export const Diagnose = () => {
  return (
    <div> 
      <div className=" ml-6  m-5 text-2xl flex font-bold">
      <h1 className="pr-2">Plant's</h1> <p className="text-[#6FBD53]"> {"  "} Disease</p>
        </div> 
        <div className="ml-4 flex">
        <SearchForm/>
<img src={NotificationIcon}/>
        </div> 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
   <div>
   <img className="hover:opacity-75" src={Leaf1}/>
   <p>Black spot</p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf2}/>
   <p>Fungi</p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf3}/>
   <p>Powdery mildew</p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf4}/>
   <p>Downy mildew </p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf5}/>
   <p>Blight </p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf6}/>
   <p>Canker </p>
    </div>
    <div>
   <img className="hover:opacity-75" src={Leaf1}/>
   <p>Abiotic</p>
    </div>
    <div>
    <img className="hover:opacity-75" src={Leaf2}/>
   <p>Alternaria</p>
    </div>
</div>
    </div>
  )
}
