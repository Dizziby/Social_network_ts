export const withAuthRedirect = (Component: any) => {

    return
}

// import {useAppSelector} from "../redux/hooks";
// import {Navigate} from "react-router-dom";
//
//
// export const withAuthRedirect = (Component: any) => {
//     const isAuth = useAppSelector(state => state.auth.isAuth)
//
//     const RedirectComponent = (props: any) => {
//         if(!isAuth) {
//             return <Navigate to="/logout"/>
//         }
//         return <props.Component {...props} />
//     }
//     return RedirectComponent
// }
//


// export const withRouter = (Component) =>{
//     let RouterComponent = (props) => {
//         const match = useMatch('/profile/:userId/');
//         return <Component {...props} match={match}/>;
//     }
//     return RouterComponent;
// }