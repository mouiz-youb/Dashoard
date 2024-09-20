import React from 'react'
import {KanbanComponent ,ColumnsDirective,ColumnDirective} from "@syncfusion/ej2-react-kanban"
import { Header } from '../components'
import {kanbanData ,kanbanGrid} from "../data/dummy"
const KanbanX = () => {
  const initialBoard = {
    columns: [
      // Your column data here (from kanbanGrid)
      // Example:
      {
        keyField: 'ToDo',
        headerText: 'To Do',
        // Other properties...
      },
      // More columns...
    ],
  };
  return (
    <div className='m-2 mt-16 p-2  bg-white rounded-3xl'>
      <Header category='App' title='Kanban' />
      <KanbanComponent dataSource={initialBoard} keyField="keyField" textField="headerText">
        <ColumnsDirective>
          <ColumnDirective keyField="keyField" textField="headerText" />
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default KanbanX