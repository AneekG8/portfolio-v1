import SectionTitle from "../components/SectionTitle"
import { Button } from "../components/Button"
import ComputerModelExperience from "../components/models/ComputerModels/ComputerModelExperience"

const Contact = () => {
  return (
    <section id="contact" className="mt-32 section-padding flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <SectionTitle title="Contact Me" subtitle="💬 Get in touch"/>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                    <div className="card-border rounded-xl md:p-10 p-5 flex-center">
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
                <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    <div className="bg-black-500 hover:cursor-grab rounded-lg w-full xl:h-120 sm:h-90 h-70">
                    <ComputerModelExperience/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact