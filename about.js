import Link from "next/link";

const About =()=>{
    return(
        <div style={{fontsize:"20px",color:"blue"}}>

            <h1>About</h1>
            <button>
                <Link href ="./"><a>Back to homepage</a></Link>

            </button>
        </div>
    )
}

export default About