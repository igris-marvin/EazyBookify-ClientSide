import { Link } from "react-router-dom"
import { CheckInDatePicker } from "./CheckInDatePicker"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/lab.css'
import '../../assets/styles/style.nav.css'
import { useEffect, useState } from "react"
import { format } from 'date-fns'

export const NavComp = () => {

    const [ checkInDate, setCheckInDate ] = useState<Date | null>(null)
    const [ checkInText, setCheckInText ] = useState<string | undefined>("Check-In Date")

    useEffect(() => {

        const date = checkInDate ? checkInDate : "string"

        console.log(typeof date)

        // const ph = typeof date === typeof "" ? format(date, "iii dd MMM") : "Check-In Date";

        const text = typeof date === 'string' ? "Check-In Date" : format(date, "iii dd MMM");

        setCheckInText(text)
    }
    , [checkInDate])

    const updateCheckInDate = (date: Date | null) => {
        setCheckInDate(date)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">

                    <div className="col-sm-3">
                        <h1>EasyBookings</h1>
                    </div>
                    <div className="col-sm-6 justify-content-center">
                        <div className="row">

                            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                                <a className="d-inline-flex align-items-center text-decoration-none">
                                    <i className="bi bi-buildings-fill"></i>
                                    <span className='ms-1'>Accommodation</span>
                                </a>
                            </div>
                            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                                <a className="d-inline-flex align-items-center text-decoration-none">
                                    <i className="bi bi-cake2-fill"></i>
                                    <span className='ms-1'>Event</span>
                                </a>
                            </div>
                            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                                <a className="d-inline-flex align-items-center text-decoration-none">
                                    <i className="bi bi-airplane-fill"></i>
                                    <span className='ms-1'>Flight</span>
                                </a>
                            </div>
                            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                                <a className="d-inline-flex align-items-center text-decoration-none">
                                    <i className="bi bi-car-front-fill"></i>
                                    <span className='ms-1'>Car Rentals</span>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3 justify-content-center">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col dropdown">
                                {/* <img
                                    className='btn p-0 m-0 dropdown-toggle p-0'
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                    src={zar}
                                    width={40}
                                    height={40}
                                    alt='currency dropdown image'
                                /> */}
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'>ZAR</li>
                                </ul>
                            </div>

                            <div className="col">
                                <a className='btn btn-outline-info'>
                                    Login
                                </a>
                            </div>

                            <div className="col">
                                <a className='btn btn-info'>
                                    SignUp
                                </a>
                            </div>

                            <div className="col dropdown">
                                <a className="btn btn-secondary dropdown-toggle m-0 p-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <img src={zar} alt="User" className="rounded-circle" width={30} height={30} /> */}
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            {/* <FontAwesomeIcon icon={faUser} className="me-2" /> */}
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            {/* <FontAwesomeIcon icon={faCog} className="me-2" /> */}
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            {/* <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> */}
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="row"> */}

                {/* <img className="img-fluid img-thumbnail object-fit-scale"  src="./assets/cover.jpeg" alt="Cover Page"> */}

                {/* </div> --> */}

                <div className="row row-cols-5 g-2">
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center" tabIndex={0}>
                        {/* <!-- add icons > add reset button> make them same line --> */}

                        {/* <FontAwesomeIcon icon={faBed} /> */}
                        <input className="w-100 merge-input" type="text" name="destination" placeholder="Where to?" />
                        {/* <FontAwesomeIcon icon={faX} className='' onClick={ () => {} } /> */}
                    </div>
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center">
                        {/* <FontAwesomeIcon icon={faCalendar} /> */}
                        {/* <input className="w-100 merge-input" type="text" name="check-in-date" value="Check-in date" readOnly /> */}
                        <CheckInDatePicker 
                            checkInDate={checkInDate} 
                            checkInText={checkInText}
                            updateDate={updateCheckInDate}
                        />
                        {/* <AccDatePicker /> */}
                    </div>
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center">
                        {/* <FontAwesomeIcon icon={faCalendar} /> */}
                        {/* <SearchDatePicker /> */}
                        {/* <input className="w-100 merge-input" type="text" name="check-out-date" value="Check-out date" readOnly /> */}
                    </div>
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center">
                        {/* <FontAwesomeIcon icon={faUserPlus} /> */}
                        <input className="w-100 merge-input" type="text" name="catering" value="1 adult - 0 children - 1 room - pets included" readOnly />
                    </div>
                    <div className="col d-inline-flex align-items-center justify-content-center">
                        <button className="w-100 h-100 d-flex align-items-center rounded">
                            <div className="d-flex justify-content-start">
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <span>Search</span>
                            </div>
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}