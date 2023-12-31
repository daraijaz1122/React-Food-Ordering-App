const Header =()=>{
    return(
      <div className='header'>
            <div className='image'>
              <img className='img' src='data:image/png;base64,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'/>
            </div>
            <div className='nav-items'>
             <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Cart</li>
             </ul>
            </div>
      </div>
    )
  }
  export default Header;