import './App.css'
// import Table from "./Components/tables/Table.tsx";
import {generateFakeData} from "./data/generateFakeData.ts";
import {columns, withActionColumn} from "./data/columns.ts";
import Table_ViewHeight from "./Components/tables/Table_ViewHeight.tsx";
import Table_StickyRowAndHeaders from "./Components/tables/Table_StickyRowAndHeaders.tsx";
import Table_StickyRowAndHeadersAndAction from "./Components/tables/Table_StickyRowAndHeadersAndAction.tsx";

const tableData = generateFakeData(100);

function App() {

    return (
        <div>
            {/* <Table columns={columns} data={tableData}/> */}
            {/* <Table_ViewHeight columns={columns} data={tableData}/> */}
            <Table_StickyRowAndHeaders columns={columns} data={tableData}/>
            {/* <Table_StickyRowAndHeadersAndAction columns={withActionColumn} data={tableData}/> */}

        </div>
    )
}

export default App
