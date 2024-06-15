import List from '@mui/material/List';
import ChatListItem from './chat-list-item/ChatListItem';
import { Stack } from '@mui/material';
import ChatListHeader from './chat-list-header/ChatListHeader';
import { useState } from 'react';
import ChatListAdd from './chat-list-add/ChatListAdd';

const ChatList = () => {
	const [chatListAddVisible, setChatListAddVisible] = useState(false);
	return (
		<>
			<ChatListAdd
				open={chatListAddVisible}
				handleClose={() => setChatListAddVisible(false)}
			/>
			<Stack>
				<ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
						maxHeight: '89vh',
						overflow: 'auto',
					}}
				>
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
					<ChatListItem />
				</List>
			</Stack>
		</>
	);
};

export default ChatList;