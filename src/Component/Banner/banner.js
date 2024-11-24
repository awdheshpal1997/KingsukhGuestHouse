import "./banner.css"
function Banner(){
    return(
        <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    )
}

export default Banner ;