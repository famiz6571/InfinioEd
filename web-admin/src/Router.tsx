import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserList from "./pages/Users/UserList";
import UserForm from "./pages/Users/UserForm";
import MenuList from "./pages/Menus/MenuList";
import MenuForm from "./pages/Menus/MenuForm";
import RoleList from "./pages/Roles/RoleList";
import RoleForm from "./pages/Roles/RoleForm";
import NotAuthorized from "./pages/OtherPage/NotAuthorized";

// --- Route config ---
const protectedRoutes = [
  {
    path: "/users",
    Component: () => <Outlet />,
    children: [
      { index: true, element: <UserList /> },
      { path: "create", element: <UserForm /> },
      { path: "edit/:id", element: <UserForm /> },
    ],
  },
  {
    path: "/menus",
    Component: () => <Outlet />,
    children: [
      { index: true, element: <MenuList /> },
      { path: "create", element: <MenuForm /> },
      { path: "edit/:id", element: <MenuForm /> },
    ],
  },
  {
    path: "/roles",
    Component: () => <Outlet />,
    children: [
      { index: true, element: <RoleList /> },
      { path: "create", element: <RoleForm /> },
      { path: "edit/:id", element: <RoleForm /> },
    ],
  },
];

// --- Helper function to render routes recursively ---
function renderRoutes(routes: any[]) {
  return routes.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={<route.Component />}>
        {route.children?.map((child: any, idx: number) => (
          <Route key={idx} {...child} />
        ))}
      </Route>
    );
  });
}

export default function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Protected Dashboard Layout */}
          <Route
            element={
              <PrivateRoute>
                <AppLayout />
              </PrivateRoute>
            }
          >
            <Route index path="/" element={<Home />} />
            {renderRoutes(protectedRoutes)}
          </Route>

          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback */}
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
