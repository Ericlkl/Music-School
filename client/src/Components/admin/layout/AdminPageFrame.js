import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Footer from '../../public/layout/Footer';

const AdminPageFrame = ({children}) => {
    return (
        <Fragment>
            <div className="admin-page">
                <Navbar/>
                <div className="admin-page_content">
                    { children }
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPageFrame
