import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

interface SDPProps {
    checkInText: string | undefined;
    checkInDate: Date | null;
    updateDate: (date: Date | null) => void;
}

export const CheckInDatePicker = (
    { checkInDate, checkInText, updateDate}: SDPProps
) => {

    return (
        <>
            <DatePicker
                selected={checkInDate}
                value={checkInText}
                onChange={ (e) => { updateDate(e) } }
                onFocus={(e) => { e.target.blur()}}
                className="w-00 merge-input"
                minDate={new Date()}
                dateFormat="Pp"
            />
        </>
    )
}