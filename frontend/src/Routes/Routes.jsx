import { Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { JobPage } from "../Components/JobPage";

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/post">
                    <JobPage/>
                </Route>
            </Switch>
        </div>
    )
}