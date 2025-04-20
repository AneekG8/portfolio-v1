import SectionTitle from "../components/SectionTitle"
import { Button } from "../components/Button"

const Contact = () => {
  return (
    <section id="contact" className="mt-32 section-padding flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <SectionTitle title="Contact Me" subtitle="💬 Get in touch"/>
            <div className="mt-16 grid-12-cols">
                <div className="xl:col-span-5">
                    <div className="card-border rounded-xl p-10 flex-center">
                        <form onSubmit={(e)=>{e.preventDefault()}} className="w-full flex flex-col flex-center gap-7">
                            <div className="w-full">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name"/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                            </div>
                            <Button
                                iconPath="/images/arrow-right.svg"
                                className="md:h-16 w-full h-12 send-button" 
                                text="Send Message" 
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className="xl:col-span-7 border-2 border-solid-white min-h-96">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact