import { Fragment } from "react"
import Header from "./Header"
import Main from "./Main"
import Todolist from "./Todolist"
import Footer from "./Footer"

function App() {
    return (
        <Fragment>
            <Header />
            <Main>
                <Todolist />
            </Main>
            <Footer />
        </Fragment>
    )
}

export default App
