import { jobs } from "../data/jobs"
import Contact from "./Contact"
import Education from "./Education"
import Footer from "./Footer"
import Header from "./Header"
import Jobs from "./Jobs"
import Languages from "./Languages"
import Profile from "./Profile"
import Skills from "./Skills"

const Contents = () => {
    return (
        <>
            <Header/>
            <Profile/>
            <Contact/>
            <Skills/>
            <Jobs jobs={jobs}/>
            <Education/>
            <Languages/>
            <Footer/>
        </>
    )
}

export default Contents