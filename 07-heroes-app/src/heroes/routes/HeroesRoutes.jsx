import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
        <Routes>
            <Route path="/marvel" element={<MarvelPage />} />
            <Route path="/dc" element={<DcPage />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/marvel"/>} />
        </Routes>
        </>
    )
}
