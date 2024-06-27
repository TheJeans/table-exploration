import './App.css'
// import Table from "./Components/tables/Table.tsx";
import {generateFakeData} from "./data/generateFakeData.ts";
import {columns, cutColumns, cutColumns2, withActionColumn} from "./data/columns.ts";
import Table_ViewHeight from "./Components/tables/Table_ViewHeight.tsx";
import Table_StickyRowAndHeaders from "./Components/tables/Table_StickyRowAndHeaders.tsx";
import Table_StickyRowAndHeadersAndAction from "./Components/tables/Table_StickyRowAndHeadersAndAction.tsx";
import Nav from './Components/Nav.tsx';
import ProjAndTabs from './Components/ProjAndTabs.tsx';
import Table_MaxColumns from './Components/tables/Table_MaxColumns.tsx';
import Table_TableCards from './Components/tables/Table_TableCards.tsx';
import Table_SidePanel from './Components/tables/Table_SidePanel.tsx';

const tableData = generateFakeData(100);

function App() {

    return (
        <div>
            <Nav />
            <ProjAndTabs />
            {/* <Table_StickyRowAndHeadersAndAction columns={withActionColumn} data={tableData}/> */}
            {/* <Table_MaxColumns columns={cutColumns} data={tableData}/> */}
            {/* <Table_TableCards columns={cutColumns} data={tableData} /> */}
            <Table_SidePanel columns={cutColumns2} data={tableData} />
        </div>
    )
}

export default App
