import './footer.css'

export default function Footer() {
  return (
    <footer>
        <div>
            <h1>TechyStar</h1>
            <p>@all right reserved</p>
        </div>
        <div>
            <h5> Follow Us</h5>
            <div className='footerhref'>
                <a href="https://youtu.be/b50zSyLiCYQ" target={"blank"}>Youtube</a>
                <a href="https://www.instagram.com/" target={"blank"}>Instagram</a>
                <a href="https://github.com/meabhisingh" target={"blank"}>Github</a>
            </div>
        </div>
    </footer>
  )
}
