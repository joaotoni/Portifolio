import Envelope from "../../assets/icons/envelope.svg"
import Github from "../../assets/icons/github-logo.svg"
import Linkedin from "../../assets/icons/linkedin-logo.svg"
import Identification from "../../assets/icons/identification.svg"
import Projetos from "../../assets/icons/bag-simple.svg"

export default function Header(){
    return(
        <>
            <header className="flex bg-[#1B1B1B] ;
">
                <div>
                    <a href="" className="text-[#9C9C9C]"> <img src={Identification} alt="" className="w-8" />About Me</a>
                    <a href="" className="text-[#9C9C9C]"> <img src={Projetos} alt="" className="w-8" /> Alguns Projetos</a>
                </div>
                <div>
                    <a href="" className="text-[#9C9C9C]"> <img src={Github} className="w-8" alt="" /> Github </a>
                    <a href="" className="text-[#9C9C9C]"> <img src={Linkedin} className="w-8" alt="" /> Linkedin</a>
                    <a href="" className="text-[#9C9C9C]"> <img src={Envelope} className="w-8" alt="" /> Email</a>
                </div>
            </header>
        </>
    )
}