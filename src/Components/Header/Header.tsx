import Envelope from "../../assets/icons/envelope.svg"
import Github from "../../assets/icons/github-logo.svg"
import Linkedin from "../../assets/icons/linkedin-logo.svg"
import Identification from "../../assets/icons/identification.svg"
import Projetos from "../../assets/icons/bag-simple.svg"

export default function Header(){
    return(
        <>
            <header >
                <nav className=" bg-[#1B1B1B]  flex flex-row p-6">
                    <ul className="md:flex md:items-center z-[-1] md:z-auto md-static absolute bg-[#1B1B1B] w-full left-0 md:2-auto md:py-0 py-4 md:pl-0 pl-0 ">
                        <li className="mx-4 my-6 md:my-0">
                            <a href="" className="text-[#9C9C9C] pr-6">Home</a>
                        </li>
                        <li className="mx-4 my-6 md:my-0">
                            <a href="" className="text-[#9C9C9C] pr-6">Case Studies</a>
                        </li >
                        <li className="mx-4 my-6 md:my-0">
                            <a href="" className="text-[#9C9C9C] pr-6">Recent Work </a>
                        </li>
                        <li className="mx-4 my-6 md:my-0">
                            <a href="" className="text-[#9C9C9C]">About Me</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}