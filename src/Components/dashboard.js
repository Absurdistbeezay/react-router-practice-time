import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = (props)=>{

    const redir = ()=>{
     props.history.push('/');
    }
   
    return(
        <div>
        <Link to ={{
            pathname:`${props.match.url}/posts`
        }}>Take me to /dashboard/posts</Link>
        {redir()}
        </div>

    );
}
export default Dashboard;