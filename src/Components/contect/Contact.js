import './contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <form className='mailtag'>
        <h1>Contact Us</h1>
            <div> 
                <label>Name</label>
                <input type="text" required placeholder='Abc' />
            </div>
            <div> 
                <label>Email</label>
                <input type="email" required placeholder='Abc@xyz.com' />
            </div>
            <div> 
                <label>Message</label>
                <input type="text" required placeholder='Tell us about your query ...' />
            </div>

            <button type="submit">Send</button>
        </form>
    </div>
  )
}
