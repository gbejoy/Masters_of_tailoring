export default function Contact(){
    return(
        <section id="contact" className="w-full h-screen bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
            <div className="w-full h-[50%] md:w-1/2 md:h-full flex flex-col justify-center items-left ">
                <h1 className='hidden md:block font-normal text-3xl xl:text-4xl text-left text-[#260502]'><span className='text-[#F28928]'>Contact</span> us</h1><br/>
                <p>Let's Bring Your Vision to Life!<br/>Have a question about our services,or need help placing an order?We'd love to hear from you!
                <br/>Whether it's custom measurements or design inspirations,we are here to guide you.</p><br/>
                <span>Reach Out to Us Anytime</span>
                <ul><li>Phone:<span className='text-[#F28928]'>+123-456-7890</span></li></ul><br/>
                <p>Visit Our Shop<br/>Step into our workshop and experience craftmanship first-hand.We're located at:<br/>
                <span className='text-[#F28928]'>123 Tailor Street,Fashion District,Design city</span></p><br/>
                <p>Business Hours:<br/>
                <span className='text-[#F28928]'>Monday - Friday:9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM <br/>Sunday: Closed</span>
                </p>
            </div>
            <div className="w-full h-[42%] md:w-5/12 md:h-full flex flex-col justify-center items-center ">
                <form class="w-full bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 ml-0">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-black focus:shadow-none" 
                type="email" id="email" placeholder="Email id" ></input></div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                <input class="shadow appearance-none border rounded w-full py-10 px-3 text-black-700 leading-tight focus:outline-black focus:shadow-none"
                id="message" type="text" placeholder="Type your message here"></input></div>
                <div class="flex items-center justify-between">
                    <button class="bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">Submit</button></div>
                </form>
            </div>
        </section>
    );
}