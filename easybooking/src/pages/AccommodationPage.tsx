
import '../assets/styles/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavComp } from '../components/NavComp'

export const AccommodationPage = () => {

  return ( <>

    <NavComp />
    
    <hr />
    <br />

    <section className="container intro-page">
      {/* <!-- <hr style="height:2px;background-color:rgb(0, 0, 0)"></hr> --> */}
      <h1>WELCOME TO EasyBookings</h1>
      <h2>Plan your getaway: Stay, Travel and Celebrate</h2>
      <p>Welcome to our accommodation service! We’re dedicated to making your travel experience as smooth and enjoyable as possible. From booking your stay to ensuring a safe and comfortable arrival at your hotel, we’re here htmlFor you every step of the way. Explore our carefully selected hotels and rest assured that your comfort and safety are our top priorities. Let’s make your journey a memorable one!</p>
    </section>

    <br />

    <section className="Trandinding">

      <div className="container mycontainer">
        <h1 >Popular/Tranding</h1>
        <div id="slider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <a href="#trand0"><img src="Assets/Pictures/HOTEL BOOK.jpeg" className="d-block w-100" alt="Placeholder Image 1" /></a>
                </div>
                <div className="col">
                  <a href="#trand1"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 2" /></a>
                </div>
                <div className="col">
                  <a href="#trand2"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 3" /></a>
                </div>
                <div className="col">
                  <a href="#trand3"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 4" /></a>
                </div>
                <div className="col">
                  <a href="#trand4"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 5" /></a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <a href="#trand6"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 6" /></a>
                </div>
                <div className="col">
                  <a href="#trand7"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 7" /></a>
                </div>
                <div className="col">
                  <a href="#trand8"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 8" /></a>
                </div>
                <div className="col">
                  <a href="#trand9"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 9" /></a>
                </div>
                <div className="col">
                  <a href="#trand10"><img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 10" /></a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev nextBtn" type="button" data-bs-target="#slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next nextBtn" type="button" data-bs-target="#slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section className="advert">

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <picture>
              <img src="Assets/Pictures/HOTEL BOOK.jpeg" alt="image" />
            </picture>
          </div>
          <div className="col-sm-6">
            <picture>
              <img src="Assets/Pictures/ads.png" alt="image" />
            </picture>
          </div>
        </div>
      </div>

    </section>

    <section className="types">
      <div className="container mt-5">
        <h1 >Browse by type</h1>
        <div id="slider2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <img src="Assets/Pictures/HOTEL BOOK.jpeg" className="d-block w-100" alt="Placeholder Image 1" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Hotel</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 2" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Motel</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 3" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Guest House</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 4" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Lodge</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 5" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Flat</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 6" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Villi</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 7" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Hotel</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 8" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Hotel</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 9" />
                  <a href="#Hotel">
                    <div className="myTextDiv">
                      <h5>Hotel</h5>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <img src="Assets/Pictures/Artboard 1.png" className="d-block w-100" alt="Placeholder Image 10" />
                  <a href="#Motel">
                    <div className="myTextDiv d-block w-100">
                      <h5>Hotel</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev nextBtn" type="button" data-bs-target="#slider2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon nextBtn" aria-hidden="true"></span>
            <span className="visually-hidden nextBtn">Previous</span>
          </button>
          <button className="carousel-control-next nextBtn" type="button" data-bs-target="#slider2" data-bs-slide="next">
            <span className="carousel-control-next-icon nextBtn" aria-hidden="true"></span>
            <span className="visually-hidden nextBtn">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section className="Places">
      <div className="container">
        <h1>Discover places around your county</h1>
        <p>How would you feel if someone from another country comes to you and tell you about the place you have been staying htmlFor a long time. discover places
          in your country to be unstoppable and no one tells you a thing. explore to be the hero of you country</p>
        <div className="row">
          <div className="col-sm-4">
            <picture>
              <a href="#9"><img src="Assets/Pictures/cape town.avif" alt="image" /></a>
            </picture>
          </div>
          <div className="col-sm-8">
            <picture>
              <a href="#10"><img src="Assets/Pictures/cape town.avif" alt="image" /></a>
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <picture>
              <a href="#11"><img src="Assets/Pictures/cape town.avif" alt="image" /></a>
            </picture>
          </div>
          <div className="col-sm-4">
            <picture>
              <a href="#12"><img src="Assets/Pictures/cape town.avif" alt="image" /></a>
            </picture>
          </div>
          <div className="col-sm-4">
            <picture>
              <a href="#13">
                <img src="Assets/Pictures/cape town.avif" alt="image" />
                <div className="innerTxt">
                  <p>Cape Town</p>
                </div>
              </a>
            </picture>
          </div>
        </div>
        {/* <button className="mapBtn" onClick={ () => openMap()} id="map">View more in the map</button> */}
      </div>

    </section>

    <section className="quick-trip">
      <div className="container">
        <h1>Plan a quick trip with friends</h1>
        <p>you don't know what kind of a trip to plan?
          easyBookify let you choose the type of a trip you want with few steps. just select the type of your trip and choose the trip destination and fun exploring the
          world</p>
        <div className="row">
          <div className="col-sm-4">
            <picture>
              <img src="Assets/Pictures/City.jpeg" alt="image" />
              <a href="#City"><div className="quick-trip-div">
                <p>City</p>
              </div>
              </a>
            </picture>
          </div>
          <div className="col-sm-2">
            <picture>
              <img src="Assets/Pictures/Fam.avif" alt="image" />
              <a href="#Family"><div className="quick-trip-div">
                <p>Family</p>
              </div>
              </a>
            </picture>
          </div>
          <div className="col-sm-2">
            <picture>
              <img src="Assets/Pictures/beach.jpeg" alt="image" />
              <a href="#Beach"><div className="quick-trip-div">
                <p>Beach</p>
              </div>
              </a>
            </picture>
          </div>
          <div className="col-sm-2">
            <picture>
              <img src="Assets/Pictures/advanture.jpeg" alt="image" />
              <a href="#Adventure">
                <div className="quick-trip-div">
                  <p>Adventure</p>
                </div>
              </a>
            </picture>
          </div>
          <div className="col-sm-2">
            <picture>
              <img src="Assets/Pictures/romentic.avif" alt="image" />
              <a href="#Romantic">
                <div className="quick-trip-div">
                  <p>Romantic</p>
                </div>
              </a>
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section className="trips">
      <div className="container">
        <h1>Suggested trips</h1>
        <p>Welcome to your next adventure! Explore our curated selection of comfortable hotels that
          prioritize your satisfaction. Each property offers exceptional amenities and outstanding service, ensuring
          a delightful stay. Discover the perfect accommodations htmlFor your trip and experience the relaxation you deserve.
          Check out our top recommendations and book your getaway today!</p>
        <div className="row">
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table >
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="Star-Home">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"> 5</i>
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={ () => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={ () => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE<i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={ () => map() } /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={ () => map() } /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table >
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE<i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th>
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="spacial">
      <div className="container">
        <h1>Specials</h1>
        <p>We invite you to check out our selection of special hotels that offer great comfort without breaking the bank. Each property has
          been handpicked htmlFor its quality and exceptional service, ensuring a delightful stay at an affordable price.
          Discover these hidden gems and book your getaway today htmlFor a memorable experience!</p>
        <div className="row">
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table >
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <th className="down-price">
                      from R2000
                    </th>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <th className="special-price">
                      now R1200
                    </th>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE<i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <td className="down-price">
                      from R2000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <th className="special-price">
                      now R1200
                    </th>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <td className="down-price">
                      from R2000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <th className="special-price">
                      now R1200
                    </th>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="all">
              <div className="upper">
                <a href="#21">
                  <div className="inner">
                    <p>RATE PLACE <i className="bi bi-star-fill"></i></p>
                  </div>
                </a>
              </div>
              <div className="lowwer">
                <table>
                  <tr>
                    <th>
                      Manhantan
                    </th>
                    <td className="down-price">
                      from R2000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      gauteng, pretoria CBD
                    </td>
                    <th className="special-price">
                      now R1200
                    </th>
                  </tr>
                  <tr>
                    <td>
                      2 bed, 2 adult, 2 children
                    </td>
                    <td rowSpan={2}>
                      <a href="#20">save as next trip</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      stars
                    </td>

                  </tr>
                  <tr>
                    <td>
                      {/* <input type="button" className="trips-btn" value="View on map" onClick={() => map()} /> */}
                    </td>
                    <td>
                      {/* <input type="button" className="trips-btn" value="check availability" onClick={() => map()} /> */}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lexury">
      <div className="container">
        <h1>luxury and top rated hotels</h1>
        <p>Discover our exclusive selection of top-rated hotels that offer the highest standards of comfort and service.
          Each property has been carefully chosen to ensure an
          exceptional stay, so you can relax and enjoy your trip to the fulles</p>
        <div className="row">
          <div className="col all">
            <div className="myLeft">
              <a href="#211">
                <div className="rate">
                  <p>Rate Place <i className="bi bi-star-fill"></i></p>
                </div>
              </a>
            </div>
            <div className="myRight">
              <h3>Gang Star Hotel</h3>
              <p><i className="bi bi-geo-alt"></i>Gauteng, Johannesburg</p>
              <p>star 5</p>
              <table>
                <tr>
                  <td style={{ borderRight: "2px solid black" }}>
                    <input type="button" className="luxury-btn" value="View Hotel Features" />
                  </td>
                  <td>
                    <input type="button" className="luxury-btn" value="Check Availability" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col all">
            <div className="myLeft">
              <a href="#211">
                <div className="rate">
                  <p>Rate Place <i className="bi bi-star-fill"></i></p>
                </div>
              </a>
            </div>
            <div className="myRight">
              <h3>Gang Star Hotel</h3>
              <p><i className="bi bi-geo-alt"></i>Gauteng, Johannesburg</p>
              <p>star 5</p>
              <table>
                <tr>
                  <td style={{ borderRight: "2px solid black" }} >
                    <input type="button" className="luxury-btn" value="View Hotel Features" />
                  </td>
                  <td>
                    <input type="button" className="luxury-btn" value="Check Availability" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col all">
            <div className="myLeft">
              <a href="#211">
                <div className="rate">
                  <p>Rate Place <i className="bi bi-star-fill"></i></p>
                </div>
              </a>
            </div>
            <div className="myRight">
              <h3>Gang Star Hotel</h3>
              <p><i className="bi bi-geo-alt"></i>Gauteng, Johannesburg</p>
              <p>star 5</p>
              <table>
                <tr>
                  <td style={{ borderRight: "2px solid black" }}>
                    <input type="button" className="luxury-btn" value="View Hotel Features" />
                  </td>
                  <td>
                    <input type="button" className="luxury-btn" value="Check Availability" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col all">
            <div className="myLeft">
              <a href="#211">
                <div className="rate">
                  <p>Rate Place <i className="bi bi-star-fill"></i></p>
                </div>
              </a>
            </div>
            <div className="myRight">
              <h3>Gang Star Hotel</h3>
              <p><i className="bi bi-geo-alt"></i>Gauteng, Johannesburg</p>
              <p>star 5</p>
              <table>
                <tr>
                  <td style={{ borderRight: "2px solid black" }}>
                    <input type="button" className="luxury-btn" value="View Hotel Features" />
                  </td>
                  <td>
                    <input type="button" className="luxury-btn" value="Check Availability" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col all">
            <div className="myLeft">
              <a href="#211">
                <div className="rate">
                  <p>Rate Place <i className="bi bi-star-fill"></i></p>
                </div>
              </a>
            </div>
            <div className="myRight">
              <h3>Gang Star Hotel</h3>
              <p><i className="bi bi-geo-alt"></i>Gauteng, Johannesburg</p>
              <p>star 5</p>
              <table>
                <tr>
                  <td style={{ borderRight: "2px solid black" }}>
                    <input type="button" className="luxury-btn" value="View Hotel Features" />
                  </td>
                  <td>
                    <input type="button" className="luxury-btn" value="Check Availability" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>

    <section className="inspiring-img">
      <div className="container">
        <div className="row">
          <div className="col">
            <picture>
              <img src="Assets/Pictures/City.jpeg" alt="image" />
            </picture>
          </div>
        </div>
      </div>
    </section>

  </>
  )
}