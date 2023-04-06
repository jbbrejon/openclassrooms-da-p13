// Import modules
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios';

// Import Redux selectors
import { selectAuth, selectProfile } from '../../utils/selectors'

// Import Redux reducers
import * as profileActions from '../../features/profile/profileSlice'

// Import API call
import { apiEditProfile } from '../../utils/apiEditProfile';

// Import css module
import styles from './editprofile.module.css'


/**
 * EditProfile component.
 *
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function EditProfile() {
    const dispatch = useDispatch()
    const profile = useSelector(selectProfile);
    const auth = useSelector(selectAuth);

    // Local state (form)
    const [displayForm, setDisplayForm] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("false");

    const handleForm = () => {
        setDisplayForm(!displayForm);
    };

    // Form submission actions
    const handleSubmit = () => {
        if (firstName !== "" && lastName !== "") {
            updateData()
        }
    };

    async function updateData() {
        let responseUpdate = await apiEditProfile(auth.token, firstName, lastName)
        if (responseUpdate.data.status === 200) {
            dispatch(profileActions.update({ firstName: responseUpdate.data.body.firstName, lastName: responseUpdate.data.body.lastName }));
            setDisplayForm(!displayForm);
        }
        else {
            setMessage(responseUpdate.data.message);
            setError(true);
        }
    }

    return (
        displayForm ? (
            <><button className={styles["edit-button"]} onClick={handleForm}>Edit Name</button>
                <div className="container__profile-form">
                    <div className="inputBox">

                        <input
                            className={styles["input-edit"]}
                            name='firstName'
                            type="text"
                            placeholder={profile.firstName}
                            onChange={(e) => setFirstName(e.target.value.trim())}
                            required
                        />

                        <input
                            className={styles["input-edit"]}
                            name='lastName'
                            type="text"
                            placeholder={profile.lastName}
                            onChange={(e) => setLastName(e.target.value.trim())}
                            required
                        />
                    </div>
                    {error ? <div className={styles.error}>{message}</div> : <div></div>}
                    <div className="buttons">
                        <button className={styles["save-button"]} onClick={handleSubmit}>Save</button>
                        <button className={styles["cancel-button"]} onClick={handleForm}>Cancel</button>
                    </div>
                </div>
            </>
        )
            : (
                <><button className={styles["edit-button"]} onClick={handleForm}>Edit Name</button></>
            )
    )
}

export default EditProfile



