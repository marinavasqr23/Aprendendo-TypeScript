import {BrowserRowter, RouterProvider, Switch, Redirect} from "react-router-dom";
import { PagInicial } from "../pages/inicial"; 
import { Login } from "../pages/login";
export const Routes = ( ) =>{
    return(
        <BrowserRowter> 
            <Switch>
                <Route exact path="/paginainicial" component={PagInicial}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="paginainicial" />
                <Route exact path="paginainicial" />

            </Switch>
        </BrowserRowter>
    );
}