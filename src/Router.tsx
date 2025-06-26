import { Route } from "wouter";
import MainPage from "./pages/main";
export default function RouterView() {
  return (
    <>
      <Route path="/" component={MainPage} />
    </>
  );
}
