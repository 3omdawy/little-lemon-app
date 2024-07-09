import { useFormik } from "formik";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { useState, useReducer, useEffect } from 'react';
import '../styles/global.css';
import * as API from '../helpers/api';
import { useAlertContext } from "../helpers/alertContext";

let prevDate = "";

export const updateTimes = (state, action) => {
    if (action.date) {
        console.log(action);
        let currentDate = new Date(action.date);
        return API.fetchAPI(currentDate);
    }
    else return state;
}

export const initializeTimes = () => {
    return API.fetchAPI(new Date());
}

function BookingForm() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState({ type: '', message: '' });

    const { onOpen } = useAlertContext();

    useEffect(() => {
        if (response && response.type && response.message) {
            onOpen(response.type, response.message);
            if (response.type === 'success') formik.resetForm();
        }
    }, [response])

    function submitForm(url, values) {
        setIsLoading(true);
        API.submitAPI(values);
        let confirmationMessage = 'Your reservation is confirmed for the ' + values.occasion + '. We expect ' + values.guests + ' guests on ' + values.date + ' at ' + values.time;
        setResponse({
            type: 'success',
            message: confirmationMessage
        });
        setIsLoading(false);
    }

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        onSubmit: (values) => {
            submitForm('', values);
        },
        validationSchema: Yup.object({
            date: Yup.date().required(),
            time: Yup.string().required(),
            guests: Yup.number().required().integer().min(1).max(10),
            occasion: Yup.string().required()
        }),
    });

    function handleNewDate() {
        let date = document.getElementById('date');
        if (date && !formik.errors.date && date.value !== prevDate) {
            prevDate = date.value;
            dispatch({ date: date.value });
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Choose date</FormLabel>
                <Input
                    id="date"
                    name="date"
                    type='date'
                    onBlur={handleNewDate()}
                    {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                <Select id="time" name="time" placeholder="time" {...formik.getFieldProps("time")}>
                    {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input
                    id="guests"
                    name="guests"
                    type='number'
                    placeholder='1'
                    {...formik.getFieldProps("guests")}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select placeholder="occasion" id="occasion" name="occasion" {...formik.getFieldProps("occasion")}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <Button data-testid = "reserve-button" role="button" type="submit" className="button" style={{ backgroundColor: "var(--primary-yellow)", color: "var(--highlight-dark)" }} isLoading={isLoading} loadingText='Submitting'>
                Book Now
            </Button>
        </form>
    );
}

export default BookingForm;