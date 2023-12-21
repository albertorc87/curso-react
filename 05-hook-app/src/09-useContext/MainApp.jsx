import { Navbar } from "./Navbar"
import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
    return (
        <>
            <Navbar />

            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}
