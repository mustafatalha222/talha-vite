import ListItem from "../component/ListItem"
import { useState } from 'react'
import { Button,  Form, Input } from 'antd';

function App() {
  const [form] = Form.useForm();
  const [todos, settodos] = useState([])
  
  const addTodos=({name})=>{
    settodos([...todos, {title:name, isDone:false}])
    form.resetFields()
  }

  const removeTodos=(title)=>{
    const _todos=todos.filter(e => e.title !== title)
    settodos(_todos)
  }

  const markDone=(title)=>{
    const newTodos = [...todos];
    let _index=todos.findIndex(e => e.title === title)
    newTodos[_index].isDone = !newTodos[_index].isDone;
    settodos(newTodos);
  }

  return (
    <div  style={{ maxWidth: 600, margin:"auto" }}>
    <Form  form={form} onFinish={addTodos} >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input todo item!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button size="100%" type="primary" htmlType="submit">
          ADD ITEM
        </Button>
      </Form.Item>
    </Form>

     <ListItem todos={todos} removeTodos={removeTodos} markDone={markDone}/>
    </div>
  )
}

export default App