import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Looks like your'e on the wrong page!</h2>
            <h3>Error {err.status} : {err.error.message}</h3>
        </div>
    )
}

export default Error