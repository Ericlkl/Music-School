import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Footer from '../../public/layout/Footer';

const AdminPageFrame = (props) => {
    return (
        <Fragment>
            <div className="admin-page">
                <Navbar { ...props }/>
                <div className="admin-page_content">
                    { props.children }
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPageFrame
