import { Avatar, Button, List } from 'antd';

const ListItem = ({todos, removeTodos,markDone}) => (
  <List
    itemLayout="horizontal"
    dataSource={todos}
    renderItem={(item, index) => (
      <List.Item actions={[<Button onClick={()=>markDone(item.title)}>Mark Done</Button>, <Button onClick={()=>removeTodos(item.title)}>delete</Button>]}>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={item.title}
          style={{textDecoration: item.isDone ? "line-through" : "none"}}
        />
      </List.Item>
    )}
  />
);
export default ListItem;