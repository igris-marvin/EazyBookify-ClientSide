import { Link } from "react-router-dom"
import { CheckInDatePicker } from "./acc_comps/CheckInDatePicker"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../assets/styles/lab.css'
import '../assets/styles/style.nav.css'
import { useEffect, useState } from "react"
import { addDays, format, isAfter } from 'date-fns'
import { CheckOutDatePicker } from "./acc_comps/CheckOutDatePicker"
import { AccOptions } from "./acc_comps/AccOptions"

export const NavComp = () => {

    // check in date dates
    const [ checkInDate, setCheckInDate ] = useState<Date | null>(null);
    const [ checkInText, setCheckInText ] = useState<string | undefined>("Check-In Date");

    // check out date states
    const [ checkOutDate, setCheckOutDate ] = useState<Date | null>(null);
    const [ checkOutText, setCheckOutText ] = useState<string | undefined>("Check-Out Date");

    useEffect(() => {

        const date = checkInDate ? checkInDate : "string"

        const text = typeof date === 'string' ? "Check-In Date" : format(date, "iii dd MMM");

        setCheckInText(text)
    }
    , [checkInDate])

    useEffect(() => {

        const date = checkOutDate ? checkOutDate : "string"

        const text = typeof date === 'string' ? "Check-Out Date" : format(date, "iii dd MMM");

        setCheckOutText(text)
    }
    , [checkOutDate])

    useEffect(() => { // resolve dates
        if(!checkInDate && !checkOutDate) { // if both dates are undefined, do nothing

            // no comment P-P

        } else if(!checkInDate && checkOutDate) { // if the check out date is selcted but the check in date is empty, initialize the check in date to todays date
            
            updateCheckInDate(new Date())

        } else if(checkInDate && !checkOutDate) { // if the check in date is sel

            setCheckOutDate(addDays(checkInDate, 1));

        } else if(checkInDate && checkOutDate) {

            const result = isAfter(checkOutDate, checkInDate) // check if the checkOutDate is after the checkInDate

            if(!result) {

                setCheckOutDate(addDays(checkInDate, 1));
            }

        }

    },[checkInDate, checkOutDate])

    const updateCheckInDate = (date: Date | null) => setCheckInDate(date)
    const updateCheckOutDate = (date: Date | null) => setCheckOutDate(date)

    // options states

    const [adults, setAdults] = useState<number>(2);
    const [children, setChildren] = useState<number>(0);
    const [numberOfRooms, setNumberOfRooms]= useState<number>(1);
    const [petsAllowed, setPetsAllowed] = useState<boolean>(false);

    const [optionsText, setOptionsText] = useState<string>("")

    const updateAdults = (adults: number) => { setAdults(adults) }
    const updateChildren = (children: number) => { setChildren(children) }
    const updateNumberOfRooms = (numberOfRooms: number) => { setNumberOfRooms(numberOfRooms) }
    const updatePetsAllowed = (petsAllowed: boolean) => { setPetsAllowed(petsAllowed) }

    useEffect(
        () => {

            let optText = "";
            
            const optionsArr = [
                {
                    opt: adults,
                    text: adults + " Adult(s)"
                },
                {
                    opt: children,
                    text: children + " Children"
                },
                {
                    opt: numberOfRooms,
                    text: numberOfRooms + " Room(s)"
                },
                {
                    opt: petsAllowed,
                    text: "Pets Allowed"
                }
            ]

            for(let x = 0; x < optionsArr.length; x++) {

                if(typeof optionsArr[x].opt === 'number') {

                    if(Number(optionsArr[x].opt) > 0) {
                        optText = x === 0 ? optionsArr[x].text : optText + " - " + optionsArr[x].text;
                    }

                } else if(typeof optionsArr[x].opt === 'boolean') {

                    if(optionsArr[x].opt) {
                        optText = x === 0 ? optionsArr[x].text : optText + " - " + optionsArr[x].text;
                    }
                }
            }

            setOptionsText(optText)
        }

    , [adults, children, numberOfRooms, petsAllowed])

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
                            updateCheckInDate={updateCheckInDate}
                        />
                        {/* <AccDatePicker /> */}
                    </div>
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center">
                        {/* <FontAwesomeIcon icon={faCalendar} /> */}
                        <CheckOutDatePicker
                            checkOutText={checkOutText}
                            checkOutDate={checkOutDate}
                            updateCheckOutDate={updateCheckOutDate}
                        />
                        {/* <input className="w-100 merge-input" type="text" name="check-out-date" value="Check-out date" readOnly /> */}
                    </div>
                    <div className="col merge-outline d-inline-flex align-items-center justify-content-center">
                        {/* <FontAwesomeIcon icon={faUserPlus} /> */}
                        <AccOptions 
                            adults={adults}
                            children={children}
                            numberOfRooms={numberOfRooms}
                            petsAllowed={petsAllowed}
                            setAdults={updateAdults}
                            setChildren={updateChildren}
                            setNumberOfRooms={updateNumberOfRooms}
                            setPetsAllowed={updatePetsAllowed}
                            optionsText={optionsText}
                        />
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