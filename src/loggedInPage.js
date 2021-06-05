import React, { useContext } from "react";
import { FirebaseContext } from "./FirebaseReducer/firebaseStore";
import FirebaseInitialized from "./FirebaseReducer/initialize";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const { state, dispatch } = useContext(FirebaseContext);
    const history = useHistory();

    const handleSignOut = async () => {
        await FirebaseInitialized.auth().signOut();
        dispatch({type: "LOGOUT", payload: null});
        history.push("/signin");
    }

    return (
        <div>
            <h2>ダッシュボード</h2>
            {state.user}
            <p>ログインしました。こんにちは {state.user ? state.user.email : null} さん</p>
            <hr />
            <button onClick={() => handleSignOut()}>サインアウト</button>
        </div>
    )
}

export default Dashboard;