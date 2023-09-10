import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import "./_app.scss";
import FlowerDetail from "./components/shop/FlowerDetail";
import FlowerList from "./components/shop/FlowerList";
import ContactPage from "./components/contact/ContactPage.js";
import AdminPage from "./components/admin/Admin";
import NavigationBar from "./components/layout/Nav";

function App() {
	return (
		<AuthProvider>
			<Router>
				<NavigationBar />

				<div className="container">
					<Switch>
						<Route exact ={true} path= "/">
							<FlowerList />
						</Route>
						<Route path="/detail/:id">
                        <FlowerDetail />
                        </Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/contact">
							<ContactPage />
						</Route>
						<Route path="/Admin">
							<AdminPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
