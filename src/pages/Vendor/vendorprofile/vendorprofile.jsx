import { Footer } from "../../../components/Footer/Footer"
import Dashboard from "../../../components/assets/dashboard.png"
import { Link } from 'react-router-dom'
import shoppingCart from "../../../components/assets/shopping_cart.png"
import Settings from "../../../components/assets/ep_setting.png"
import Chat from "../../../components/assets/fluent_chat-20-regular.png"
import Finance from "../../../components/assets/attach_money.png"
import Analytics from "../../../components/assets/finance.png"
import Product from "../../../components/assets/gridicons_product-virtual.png"
import Promotion from "../../../components/assets/ep_promotion.png"
import Profile from "../../../components/assets/ep_promotion.png"
import "../Vendor Dashboard/vendordashboard.css"

export const Vendorprofile = () => {
  return (
      <>
          <section className='vendorsectioncontainer'>
              <div className='vendorsection'>
                  <div className='vendorleftbar'>
                      <div className='vendorselectedsection'>
                          <img src={Dashboard} alt="" />
                          <h3>Dashboard</h3>
                      </div>
                      <div className='vendorlinks'>
                          <div className='vendorlink'>
                              <img src={shoppingCart} alt="" />
                              <Link><h3>Order</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Chat} alt="" />
                              <Link><h3>Chat</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Finance} alt="" />
                              <Link><h3>Finance</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Analytics} alt="" />
                              <Link><h3>Analytics</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Product} alt="" />
                              <Link><h3>Product</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Finance} alt="" />
                              <Link><h3>Payroll</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Promotion} alt="" />
                              <Link><h3>Promotion</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Profile} alt="" />
                              <Link><h3>Profile</h3></Link>
                          </div>
                          <div className='vendorlink'>
                              <img src={Settings} alt="" />
                              <Link><h3>Settings</h3></Link>
                          </div>
                      </div>
                      <div className='vendorselecteditem'>
                          <div className='img'></div>
                          <div>
                              Sneakers
                          </div>
                      </div>
                  </div>
                  <div className='vendorrightcontent'>
                      <nav className='vendornavbar'>
                          <div className='vendornavbarsearchpart'>
                              <div className='search'>
                                  <input type="search" placeholder='search' />
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                      <path d="M20.5001 20L16.4501 15.95M16.4501 15.95C17.1002 15.3 17.6158 14.5282 17.9676 13.6789C18.3194 12.8296 18.5005 11.9193 18.5005 11C18.5005 10.0807 18.3194 9.17041 17.9676 8.32109C17.6158 7.47176 17.1002 6.70005 16.4501 6.05001C15.8001 5.39996 15.0284 4.88432 14.179 4.53252C13.3297 4.18072 12.4194 3.99965 11.5001 3.99965C10.5808 3.99965 9.67051 4.18072 8.82119 4.53252C7.97187 4.88432 7.20016 5.39996 6.55011 6.05001C5.23729 7.36283 4.49976 9.1434 4.49976 11C4.49976 12.8566 5.23729 14.6372 6.55011 15.95C7.86293 17.2628 9.6435 18.0004 11.5001 18.0004C13.3567 18.0004 15.1373 17.2628 16.4501 15.95Z" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </div>
                              <div className='svg'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44" fill="none">
                                      <path d="M16 31.375C18.4856 31.3724 20.8687 30.3839 22.6263 28.6263C24.3839 26.8687 25.3724 24.4856 25.375 22V9.5C25.375 7.0136 24.3873 4.62903 22.6291 2.87087C20.871 1.11272 18.4864 0.125 16 0.125C13.5136 0.125 11.129 1.11272 9.37087 2.87087C7.61272 4.62903 6.625 7.0136 6.625 9.5V22C6.62758 24.4856 7.61614 26.8687 9.37373 28.6263C11.1313 30.3839 13.5144 31.3724 16 31.375ZM9.75 9.5C9.75 7.8424 10.4085 6.25268 11.5806 5.08058C12.7527 3.90848 14.3424 3.25 16 3.25C17.6576 3.25 19.2473 3.90848 20.4194 5.08058C21.5915 6.25268 22.25 7.8424 22.25 9.5V22C22.25 23.6576 21.5915 25.2473 20.4194 26.4194C19.2473 27.5915 17.6576 28.25 16 28.25C14.3424 28.25 12.7527 27.5915 11.5806 26.4194C10.4085 25.2473 9.75 23.6576 9.75 22V9.5ZM17.5625 37.5469V42.3125C17.5625 42.7269 17.3979 43.1243 17.1049 43.4174C16.8118 43.7104 16.4144 43.875 16 43.875C15.5856 43.875 15.1882 43.7104 14.8951 43.4174C14.6021 43.1243 14.4375 42.7269 14.4375 42.3125V37.5469C10.5852 37.1549 7.01517 35.3484 4.41766 32.4767C1.82016 29.605 0.379758 25.8722 0.375 22C0.375 21.5856 0.53962 21.1882 0.832646 20.8951C1.12567 20.6021 1.5231 20.4375 1.9375 20.4375C2.3519 20.4375 2.74933 20.6021 3.04235 20.8951C3.33538 21.1882 3.5 21.5856 3.5 22C3.5 25.3152 4.81696 28.4946 7.16116 30.8388C9.50537 33.183 12.6848 34.5 16 34.5C19.3152 34.5 22.4946 33.183 24.8388 30.8388C27.183 28.4946 28.5 25.3152 28.5 22C28.5 21.5856 28.6646 21.1882 28.9576 20.8951C29.2507 20.6021 29.6481 20.4375 30.0625 20.4375C30.4769 20.4375 30.8743 20.6021 31.1674 20.8951C31.4604 21.1882 31.625 21.5856 31.625 22C31.6202 25.8722 30.1798 29.605 27.5823 32.4767C24.9848 35.3484 21.4148 37.1549 17.5625 37.5469Z" fill="#121212" />
                                  </svg>
                              </div>
                          </div>
                          <div className='vendornavbarsecondpart'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46" fill="none">
                                  <path d="M5.49992 37.5833V18.8333C5.49992 15.5181 6.81688 12.3387 9.16108 9.99451C11.5053 7.6503 14.6847 6.33334 17.9999 6.33334C21.3151 6.33334 24.4946 7.6503 26.8388 9.99451C29.183 12.3387 30.4999 15.5181 30.4999 18.8333V37.5833M5.49992 37.5833H30.4999M5.49992 37.5833H1.33325M30.4999 37.5833H34.6666M15.9166 43.8333H20.0833" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M17.9998 6.33334C19.1504 6.33334 20.0832 5.4006 20.0832 4.25001C20.0832 3.09941 19.1504 2.16667 17.9998 2.16667C16.8492 2.16667 15.9165 3.09941 15.9165 4.25001C15.9165 5.4006 16.8492 6.33334 17.9998 6.33334Z" stroke="black" stroke-width="2.5" />
                              </svg>
                              <div className='vendorprofilepicture'>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                  <path d="M11.3334 16.5C11.3334 15.5 12.0001 14.8333 13.0001 14.8333C13.5001 14.8333 13.8334 15 14.1667 15.3333L20.0001 21.1667L25.8334 15.3333C26.5001 14.6667 27.5001 14.6667 28.1667 15.3333C28.8334 16 28.8334 17 28.1667 17.6667L21.1667 24.6667C20.5001 25.3333 19.5001 25.3333 18.8334 24.6667L11.8334 17.6667C11.5001 17.3333 11.3334 16.8333 11.3334 16.5Z" fill="black" />
                              </svg>
                          </div>
                      </nav>
                      <div className='vendorcomponent'>
                      </div>
                  </div>
              </div>
          </section >
          <Footer />
      </>
  )
}
