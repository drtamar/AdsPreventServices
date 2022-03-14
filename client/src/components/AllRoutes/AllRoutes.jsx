import { useRoutes } from "react-router-dom"
import Home from "../Home";
import AccountOverview from "../Dashboard/AccoutOverview/AccountOverview";
import DomainOverview from "../Dashboard/DomainOverview/DomainOverview";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FraudAnalyticsGoogle from "../Dashboard/FraudAnalytics/FraudAnalyticsGoogle";
import FraudAnalyticsFacebook from "../Dashboard/FraudAnalytics/FraudAnalyticsFacebook";
import FraudAnalyticsMicrosoft from "../Dashboard/FraudAnalytics/FraudAnalyticsMicrosoft";
import GoogleServiceConnection from "../Dashboard/ServiceConnections/GoogleServiceConnection";
import GoogleRedirect from "../Dashboard/ServiceConnections/GoogleRedirect";
import Subscription from "../Subscription/Subscription";
import ChoiceOneGoogleAccount from "../Dashboard/ServiceConnections/ChoiceOneGoogleAccount";
import DetectedIps from "../../GoogleAds/DetectedIps";
import BlockIp from "../../GoogleAds/BlockIp";


const AllRoutes = () => {
    const { user } = useSelector((state) => state.authReducer);

    const ProtectedRoutes = ({ children }) => {

        return user ? children : <Navigate to="/login" />;

    }

    const element = useRoutes([

        { path: '/', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'google-redirect', element: <GoogleRedirect /> },
        { path: 'subscription', element: <Subscription /> },
        { path: 'clientid/:id/:refreshToken', element: <ChoiceOneGoogleAccount /> },

        {
            path: 'dashboard', element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>,
            children: [
                { path: '', element: <AccountOverview /> },
                { path: 'domainoverview', element: <DomainOverview /> },
                {path: 'fraudanalyticsgoogle', element: <FraudAnalyticsGoogle />,
                children:[
                    {path:'detectedips',element:<DetectedIps/>},
                    {path:'blockip/:resource',element:<BlockIp/>}
                ]
            },
                { path: 'fraudanalyticsmicrosoft', element: <FraudAnalyticsMicrosoft /> },
                { path: 'fraudanalyticsfacebook', element: <FraudAnalyticsFacebook /> },
                { path: 'googleserviceconnection', element: <GoogleServiceConnection /> }
            ]
        }
    ]);

    return element;
}

export default AllRoutes;
