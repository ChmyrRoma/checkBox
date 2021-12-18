import React, { useState } from 'react';
import classes from './Posts.module.css';


const Posts = (props) => {
    const [checkedStatus, setCheckedStatus] = useState(props.status);

    const updateCheckBox = () => {
        setCheckedStatus(!checkedStatus)
    }
    
    return (
        <div>
            <div>
                <div key={props.id}>
                    {
                        <div className={classes.post}>
                            <input style={{ zoom: '1.5' }} type='checkbox' checked={checkedStatus} onChange={updateCheckBox} />
                            <div style={{ zoom: '1.3' }}>
                                { 
                                    <div className={checkedStatus && classes.posts}>{props.message}</div>
                                }
                            </div> 
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts;
