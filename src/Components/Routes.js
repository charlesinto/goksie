import React, { Component } from 'react';
import PublicRoute from './AuthRoutes/PublicRoute'
import Layout from './HOC/Layout';
import { Switch } from 'react-router-dom';
import Home from './Home';

class Routes extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <Switch> 
                        <PublicRoute exact path='/' component={Home}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default Routes;
