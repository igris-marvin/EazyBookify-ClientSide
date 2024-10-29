import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

interface SDPProps {
    checkInText: string | undefined;
    checkInDate: Date | null;
    updateCheckInDate: (date: Date | null) => void;
}

export const CheckInDatePicker = (
    { checkInDate, checkInText, updateCheckInDate}: SDPProps
) => {

    return (
        <>
            <DatePicker
                selected={checkInDate}
                value={checkInText}
                onChange={ (e) => { updateCheckInDate(e) } }
                onFocus={(e) => { e.target.blur()}}
                className="w-00 merge-input"
                minDate={new Date()}
                dateFormat="Pp"
                showIcon={true}
            />
        </>
    )
}