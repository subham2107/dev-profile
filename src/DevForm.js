import React from 'react';
import './DevForm.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DevForm() {
    const [form, setForm] = React.useState({
        github: '',
        medium: '',
        linkedin: '',
        codechef: '',
        hackerrank: '',
        twitter: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
            message: '',
        }));
    };
    const history = useHistory();

    const submitClick = (e) => {
        e.preventDefault();
        if (form.github) {
            axios
                .post('/api/developers', {
                    github_id: form.github,
                    medium: form.medium,
                    linkedin: form.linkedin,
                    codechef: form.codechef,
                    hackerrank: form.hackerrank,
                    twitter: form.twitter,
                })
                .then(() => {
                    // console.log(res);
                    history.push('/');
                })
                .catch((error) => {
                    setForm((prevState) => ({
                        ...prevState,
                        message: error.message,
                    }));
                });
        }
    };
    return (
        <div class="formContainer">
            <form>
                <h2>Add developer profile</h2>
                <hr></hr>
                <div className="labelInput">
                    <img className="companyIcon" src={'images/iconfinder_github_317712.png'} alt="icon" />
                    <label>Github*</label>
                </div>
                <input
                    className="labelInput"
                    type="text"
                    required="required"
                    placeholder="subham2107"
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                />
                {form.message ? <h6 style={{ color: 'red' }}>Enter valid github id</h6> : null}
                <div className="labelInput">
                    <img
                        className="companyIcon"
                        src={'images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png'}
                        alt="icon"
                    />
                    <label>LinkedIn</label>
                </div>
                <input
                    className="labelInput"
                    type="text"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                />
                <div className="labelInput">
                    <img className="companyIcon" src={'images/codechef-1324440139527402917_32.png'} alt="icon" />
                    <label>Codechef</label>
                </div>
                <input
                    className="labelInput"
                    name="codechef"
                    value={form.codechef}
                    onChange={handleChange}
                    type="text"
                />
                <div className="labelInput">
                    <img
                        className="companyIcon"
                        src={'images/iconfinder_160_Hackerrank_logo_logos_4373234.png'}
                        alt="icon"
                    />
                    <label>Hackerrank</label>
                </div>
                <input
                    className="labelInput"
                    name="hackerrank"
                    value={form.hackerrank}
                    onChange={handleChange}
                    type="text"
                />
                <div className="labelInput">
                    <img
                        className="companyIcon"
                        src={'images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png'}
                        alt="icon"
                    />
                    <label>Twitter</label>
                </div>
                <input className="labelInput" name="twitter" value={form.twitter} onChange={handleChange} type="text" />
                <div className="labelInput">
                    <img className="companyIcon" src={'images/iconfinder_Circled_Medium_svg5_5279113.png'} alt="icon" />
                    <label>Medium</label>
                </div>
                <input className="labelInput" name="medium" value={form.medium} onChange={handleChange} type="text" />
                <hr className="bottomLine"></hr>
                <div className="buttons">
                    <button className="cancelBtn" onClick={() => window.location='/'}>
                        Cancel
                    </button>
                    <button className="submitBtn" onClick={submitClick}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DevForm;
