import React from 'react'

const CreatePost = () =>{
    return(
        <div className="card input-field" style={{
            margin: "30px",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="body"></input>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" >
                Submit post
            </button>

        </div>
    )
}

export default CreatePost