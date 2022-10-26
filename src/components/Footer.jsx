import React from 'react';

function EmailSubscribe(){
  return(
    <div class="sect6-dv">
    <div class="para-dv">
      <p>
        Subscribe to our mailing list to let you know what might be
        important from us.
      </p>
    </div>
    <div class="email-dv">
      <form>
        <input type="email" placeholder="Email address" />
        <button class="btn btn-success" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  </div>
  )
}

function Footer(){
    return(
               
               <footer>
               <div class="row">
                 <div class="col Help" style={{ textAlign: "left", paddingLeft: "10%" }}>
                   <ul class="navbar-nav">
                     <h5>Help</h5>
                     <li>
                       <a href="#">About Us</a>
                     </li>
                     <li>
                       <a href="#">Live Chat</a>
                     </li>
                     <li>
                       <a href="#">Contact</a>
                     </li>
                     <li>
                       <a href="#">FAQ</a>
                     </li>
                   </ul>
                 </div>
         
                 <div
                   class="col social-medias-l"
                   style={{ textAlign: "left", paddingLeft: "15%" }}
                 >
                   <ul class="navbar-nav">
                     <h5>Connect with us</h5>
                     <li>
                       <a href="#">
                         <i class="bi bi-facebook"></i>Facebook
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i class="bi bi-instagram"></i>Instagram
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i class="bi bi-twitter"></i>Twitter
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i class="bi bi-pinterest"></i>Pinterest
                       </a>
                     </li>
                   </ul>
                 </div>
         
                 <div
                   class="col business"
                   style={{ textAlign: "left", paddingLeft: "10%" }}
                 >
                   <ul class="navbar-nav">
                     <h5>Business</h5>
                     <li>
                       <a href="#">Legal Info</a>
                     </li>
                     <li>
                       <a href="#">Privacy Policy</a>
                     </li>
                     <li>
                       <a href="#">Terms & Conditions</a>
                     </li>
                   </ul>
                 </div>
               </div>
               <hr />
         
               <p class="copyright-p">
                 &copy; Copyright {new Date().getFullYear()} ochu.com ,All rights
                 reserved.
               </p>
               <div class="social-medias-s">
                 <a>
                   <i class="bi bi-facebook"></i>
                 </a>
                 <a>
                   <i class="bi bi-instagram"></i>
                 </a>
                 <a>
                   <i class="bi bi-twitter"></i>
                 </a>
                 <a>
                   <i class="bi bi-pinterest"></i>
                 </a>
               </div>
             </footer>
    )
}

export default Footer;
export {Footer, EmailSubscribe};