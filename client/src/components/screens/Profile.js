import React from 'react';


const Profile = () => {
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1597466765990-64ad1c35dafc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=832&q=80"
                    alt=""/>
                </div>
                <div>
                    <h4>Danton</h4>
                    <div style={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>45 followers</h6>
                        <h6>45 following</h6>
                    </div>
                </div>
            </div>
        
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" alt=""/>
            </div>
        </div>
    );
}

export default Profile