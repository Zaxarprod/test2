import React from "react"
import style from './Filter.module.scss'
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {filterAC} from "../../redux/table-reducer";

export const Filter = () => {
    let dispatch = useDispatch()
    return (
        <div className={style.form}>
            <Formik
                initialValues={{ filter: ''}}
                //validate={() => {}}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    dispatch(filterAC(values.filter))
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="filter" />
                        <button type="submit" disabled={isSubmitting}>
                            Найти
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}