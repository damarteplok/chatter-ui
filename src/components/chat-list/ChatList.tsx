import List from '@mui/material/List';
import ChatListItem from './chat-list-item/ChatListItem';
import { Stack } from '@mui/material';
import ChatListHeader from './chat-list-header/ChatListHeader';
import { useEffect, useState } from 'react';
import ChatListAdd from './chat-list-add/ChatListAdd';
import { useGetChats } from '../../hooks/useGetChats';
import { usePath } from '../../hooks/usePath';

const ChatList = () => {
	const [chatListAddVisible, setChatListAddVisible] = useState(false);
	const [selectedChat, setSelectedChat] = useState('');
	const { data } = useGetChats();
	const { path } = usePath();

	useEffect(() => {
		const pathSplit = path.split('chats/');
		if (pathSplit.length === 2) {
			setSelectedChat(pathSplit[1]);
		}
	}, [path]);

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
						bgcolor: 'background.paper',
						maxHeight: '89vh',
						overflow: 'auto',
					}}
				>
					{data?.chats
						.map((chat) => (
							<ChatListItem
								chat={chat}
								key={chat._id}
								selected={chat._id === selectedChat}
							/>
						))
						.reverse()}
				</List>
			</Stack>
		</>
	);
};

export default ChatList;
