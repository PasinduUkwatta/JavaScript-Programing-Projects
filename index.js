import Link from "next/link";



const Index =() =>(
    <div>
        <h1>SSR Magician</h1>
        <button>
            <Link href ="./about"><a>About</a></Link>

        </button>

        {/*<a href="./about">About</a>*/}
    </div>
)

export default Index