import { TransationProvider } from "./trasations/transations";

const Provider = ({children}) => {
    return(
        <TransationProvider>
            {children}
        </TransationProvider>
    )
}

export { Provider }