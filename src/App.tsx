import './App.css'
import Table from "./Components/Table.tsx";
import {generateFakeData} from "./data/generateFakeData.ts";
import {columns} from "./data/columns.ts";
import Table_ViewHeight from "./Components/Table_ViewHeight.tsx";
import Table_StickyRowAndHeaders from "./Components/Table_StickyRowAndHeaders.tsx";

const tableData = generateFakeData(100);

function App() {

    return (
        <div className="">
            {/*<Table columns={columns} data={tableData}/>*/}
            {/*<Table_ViewHeight columns={columns} data={tableData}/>*/}
            <Table_StickyRowAndHeaders columns={columns} data={tableData}/>

        </div>
    )
}

export default App
