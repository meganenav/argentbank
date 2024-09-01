import React, { useState, useEffect } from "react"
import { update } from "../../../services/update"
import { useDispatch } from "react-redux"
import { setFirstName, setLastName } from "../../../redux/userSlice"

export default function Header(props) {
    const [isActive, setIsActive] = useState(false)
    const [token, setToken] = useState("")
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await update(token, newFirstName, newLastName)
        dispatch(setFirstName(newFirstName))
        dispatch(setLastName(newLastName))
        if (success) {
            console.log("Update successful")
        }
    }

    const handleCancel = () => {
        setIsActive(false)
    }

    useEffect(() => {
        setToken(localStorage.site)
    }, [])

    return (
        <div className="header">
            <h1>
                Welcome back<br />
                <span className={ isActive ? "hidden-element" : "username" }>{ props.firstName + " " + props.lastName }!</span>
            </h1>
            <button className={ isActive ? "hidden-element" : "edit-button" } onClick={() => setIsActive(!isActive)}>Edit Name</button>
            <div className={ isActive ? "edit-user" : "hidden-element" }>
                <form className="form-update" onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <input type="text" id="firstName" name="firstName" value={newFirstName} placeholder={props.firstName} onChange={(e) => setNewFirstName(e.target.value)} />
                        <input type="text" id="lastName" name="lastName" value={newLastName} placeholder={props.lastName} onChange={(e) => setNewLastName(e.target.value)} />
                    </div>
                    <div className="buttons-update-form">
                        <button type="submit" className="update-button">Save</button>
					    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}