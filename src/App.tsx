import './App.css'
import Table from "./Components/Table.tsx";
import {generateFakeData} from "./data/generateFakeData.ts";
import {columns} from "./data/columns.ts";

const tableData = generateFakeData(10);

function App() {

    return (
        <div className="">
            <Table columns={columns} data={tableData}/>
        </div>
    )
}

export default App
