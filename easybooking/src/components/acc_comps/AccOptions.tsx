import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../../assets/styles/style.nav.css'

interface AOProps {
    adults: number;
    children: number;
    numberOfRooms: number;
    petsAllowed: boolean;
    setAdults: (adults: number) => void;
    setChildren: (children: number) => void;
    setNumberOfRooms: (numberOfRooms: number) => void;
    setPetsAllowed: (petsAllowed: boolean) => void;
    optionsText: string;
}

export const AccOptions = (
    {
        adults, children, numberOfRooms, petsAllowed,
        setAdults, setChildren, setNumberOfRooms, setPetsAllowed,
        optionsText
    }: AOProps
) => {

    return (
        <>

            <div className="dropdown merge-input w-100">

                <input 
                    className="dropdown-toggle w-100 merge-input" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    value={optionsText}
                />

                <div className="dropdown-menu">

                    <div className="dropdown-item">

                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-4">
                                Adults
                            </div>
                            <div className="col-4">
                                Children
                            </div>
                            <div className="col-4">
                                Rooms
                            </div>
                        </div>

                        <div className="row d-flex align-items-center justify-content-center">

                            <div className="col-4">
                                <input 
                                    type='number'
                                    className='options-inputs dropdown-input'
                                    onKeyDown={(e) => e.preventDefault()}
                                    min={0}
                                    value={adults}
                                    onChange={ (e) => setAdults(Number(e.target.value))}
                                />
                            </div>

                            <div className="col-4">
                                <input 
                                    type='number'
                                    className='options-inputs dropdown-input'
                                    onKeyDown={(e) => e.preventDefault()}
                                    min={0}
                                    value={children}
                                    onChange={ (e) => setChildren(Number(e.target.value))}
                                />
                            </div>

                            <div className="col-4">
                                <input 
                                    type='number'
                                    className='options-inputs dropdown-input'
                                    onKeyDown={(e) => e.preventDefault()}
                                    min={1}
                                    value={numberOfRooms}
                                    onChange={ (e) => setNumberOfRooms(Number(e.target.value))}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="dropdown-item row d-flex align-items-center justify-content-center">

                        <div className="col-8 d-inline-flex justify-content-center">
                            <label className='pe-1'>Pets Allowed</label>

                            <div className="form-check form-switch pets-allowed-switch">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    role="switch" 
                                    id="flexSwitchCheckDefault"
                                    checked={petsAllowed}
                                    onChange={() => { setPetsAllowed(!petsAllowed)}}
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <button className='btn btn-primary'>
                                Done
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

{/* <input 
    className="w-100 merge-input" 
    type="text" 
    name="catering" 
    value="1 adult - 0 children - 1 room - pets included" 
    readOnly 
/> */}