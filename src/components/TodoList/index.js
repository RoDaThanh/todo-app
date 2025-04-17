import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';

export default function TodoList() {
  
  const todoItemsInistalState = [
    { name: 'Learn React', prioriry: 'High' },
    { name: 'Learn Redux', prioriry: 'Medium' },    
    { name: 'Learn Python', prioriry: 'High' },
    { name: 'Learn Java', prioriry: 'Low' },   
  ]

  const [todoItems, setTodoItems] = useState(todoItemsInistalState);
  const [name, setName] = useState('');
  const [nameStatus, setNameStatus] = useState('');
  const [prioriry, setPrioriry] = useState('Medium');

  const addTodoItem = () => {
    if (name === '') {
      setNameStatus('error');
      return;
    }
    setTodoItems([...todoItems, {name, prioriry}]);
    setName('');
    setPrioriry('Medium');
    setNameStatus('');
  }

  const setNameOnchange = (e) => {
    if(e.target.value === '') {
      setNameStatus('error');
    } else {
      setNameStatus('')
    }
    setName(e.target.value);
  }

  const setPrioriryOnchange = (e) => {
    setPrioriry(e);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoItems.map(({name, prioriry}) => { return (
            <Todo name={name} prioriry={prioriry} />
          )})
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={setNameOnchange} value={name} status={nameStatus} />
          <Select onChange={setPrioriryOnchange} value={prioriry}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={addTodoItem}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
