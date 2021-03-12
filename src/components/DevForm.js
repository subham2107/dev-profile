import './DevForm.css';

function DevForm() {
    return (
        <div>
            <form>
                <h2>Add developer profile</h2>
                <hr></hr>
                <div className="LabelInput">
                    <img className="CompanyIcon" src={'images/iconfinder_github_317712.png'} alt="icon" />
                    <label>Github*</label>
                </div>
                <input className="LabelInput" type="text" placeholder="subham2107" />
                <div className="LabelInput">
                    <img
                        className="CompanyIcon"
                        src={'images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png'}
                        alt="icon"
                    />
                    <label>LinkedIn</label>
                </div>
                <input className="LabelInput" type="text" />
                <div className="LabelInput">
                    <img className="CompanyIcon" src={'images/codechef-1324440139527402917_32.png'} alt="icon" />
                    <label>Codechef</label>
                </div>
                <input className="LabelInput" type="text" />
                <div className="LabelInput">
                    <img
                        className="CompanyIcon"
                        src={'images/iconfinder_160_Hackerrank_logo_logos_4373234.png'}
                        alt="icon"
                    />
                    <label>Hackerrank</label>
                </div>
                <input className="LabelInput" type="text" />
                <div className="LabelInput">
                    <img
                        className="CompanyIcon"
                        src={'images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png'}
                        alt="icon"
                    />
                    <label>Twitter</label>
                </div>
                <input className="LabelInput" type="text" />
                <div className="LabelInput">
                    <img className="CompanyIcon" src={'images/iconfinder_Circled_Medium_svg5_5279113.png'} alt="icon" />
                    <label>Medium</label>
                </div>
                <input className="LabelInput" type="text" />
                <hr className="BottomLine"></hr>
                <div className="Buttons">
                    <button className="CancelBtn">Cancel</button>
                    <button className="SubmitBtn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default DevForm;
