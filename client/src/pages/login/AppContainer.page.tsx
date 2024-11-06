import HeaderContainer from "../../components/containers/HeaderContainer";
import LoginContainer from "../../components/containers/LoginContainer";

export default function AppContainer() {
  return (
    <div className="app-container align-column">
      <HeaderContainer height={"3em"}/>
      <LoginContainer />
    </div>
  );
}
