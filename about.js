import Link from "next/link";
import Image from "../components/image";
const About =()=>{
    return(
        <div style={{fontsize:"20px",color:"blue"}}>

            <h1>About</h1>
            <button>
                <Link href ="./"><a>Back to homepage</a></Link>

            </button>
            <Image/>
        </div>
    )
}

export default About