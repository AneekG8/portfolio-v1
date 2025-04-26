import { socialImgs } from "../constants"

const Footer = () => {
  return (
   <footer className="footer flex-col gap-7">
        <div className="socials">
            {
                socialImgs.map((img) => (
                    <a key={img.url} href={img.url} className="icon" target="_blank">
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))
            }
        </div>
       <p className="text-center sm:text-base text-sm">
        © {new Date().getFullYear()} Aneek Ghosh. All rights reserved.
       </p>
   </footer>
  )
}

export default Footer