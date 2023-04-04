// Import modules
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios';

// Import Redux selectors
import { selectAuth, selectProfile } from '../../utils/selectors'

// Import Redux reducers
import * as profileActions from '../../features/profile/profileSlice'

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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleForm = () => {
        setDisplayForm(!displayForm);
    };

    // Form submission actions
    const handleSubmit = () => {
        if (firstName !== "" && lastName !== "") {
            updateName();
            setDisplayForm(!displayForm);
        }
    };

    function updateName() {
        axios.put('http://localhost:3001/api/v1/user/profile', {
            "firstName": firstName,
            "lastName": lastName
        }, {
            headers: {
                'authorization': `Bearer ${auth.token}`
            },

        })
            .then(function (response) {
                dispatch(profileActions.update({ firstName: response.data.body.firstName, lastName: response.data.body.lastName }));
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />

                        <input
                            className={styles["input-edit"]}
                            name='lastName'
                            type="text"
                            placeholder={profile.lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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



