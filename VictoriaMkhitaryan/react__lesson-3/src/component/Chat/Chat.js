import React from 'react';
import classnames from 'classnames';
import './Chat.css';

import MessageList from '../../component/MessagesList/MessagesList';
import MessageForm from '../../component/MessageForm/MessageForm';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';

export default function Chat(props) {
  return(
    <Card className={classnames('chat', props.modifiers)}>
      <CardHeader className='chat__header' 
                  title='Чат с добрым Роботом' />
      <CardContent className='chat__content'
                    id='listScroll2'>
        <List>
          <MessageList messagesData={props.messagesData} />
        </List>
      </CardContent>
      <CardActions className='chat__form'>
        <MessageForm handleMessageSend={props.handleMessageSend} />
      </CardActions>
    </Card>
  );
}