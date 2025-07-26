import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
                <h1 className="mb-3">Add your Blog:</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label" required >Title :</label>
                    <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputDescription" />
                </div>
                <div id="emailHelp" className="form-text">Upload Blog's image</div>
                <div className="file is-link">
                    <label className="file-label">
                        <input className="file-input" type="file" name="photo" />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label"> Choose a file… </span>
                        </span>
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDescription" className="form-label">Conclusion</label>
                    <input type="text" className="form-control" id="exampleInputDescription" />
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
