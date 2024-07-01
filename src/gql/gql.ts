/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tfragment ChatFragment on Chat {\n\t\t_id\n\t\tname\n\t\tlatestMessage {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n": types.ChatFragmentFragmentDoc,
    "\n\tfragment MessageFragment on Message {\n\t\t_id\n\t\tcontent\n\t\tcreatedAt\n\t\tchatId\n\t\tuser {\n\t\t\t_id\n\t\t\tusername\n\t\t\temail\n\t\t}\n\t}\n": types.MessageFragmentFragmentDoc,
    "\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n": types.CreateChatDocument,
    "\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n": types.CreateMessageDocument,
    "\n\tmutation CreateUser($createUserInput: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $createUserInput) {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n": types.CreateUserDocument,
    "\n\tquery Chat($_id: String!) {\n\t\tchat(_id: $_id) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n": types.ChatDocument,
    "\n\tquery Chats {\n\t\tchats {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n": types.ChatsDocument,
    "\n\tquery Me {\n\t\tme {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n": types.MeDocument,
    "\n\tquery Messages($chatId: String!) {\n\t\tmessages(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n": types.MessagesDocument,
    "\n\tsubscription messageCreated($chatId: String!) {\n\t\tmessageCreated(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n": types.MessageCreatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ChatFragment on Chat {\n\t\t_id\n\t\tname\n\t\tlatestMessage {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment ChatFragment on Chat {\n\t\t_id\n\t\tname\n\t\tlatestMessage {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment MessageFragment on Message {\n\t\t_id\n\t\tcontent\n\t\tcreatedAt\n\t\tchatId\n\t\tuser {\n\t\t\t_id\n\t\t\tusername\n\t\t\temail\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment MessageFragment on Message {\n\t\t_id\n\t\tcontent\n\t\tcreatedAt\n\t\tchatId\n\t\tuser {\n\t\t\t_id\n\t\t\tusername\n\t\t\temail\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateUser($createUserInput: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $createUserInput) {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateUser($createUserInput: CreateUserInput!) {\n\t\tcreateUser(createUserInput: $createUserInput) {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Chat($_id: String!) {\n\t\tchat(_id: $_id) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Chat($_id: String!) {\n\t\tchat(_id: $_id) {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Chats {\n\t\tchats {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Chats {\n\t\tchats {\n\t\t\t...ChatFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Me {\n\t\tme {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\tme {\n\t\t\t_id\n\t\t\temail\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Messages($chatId: String!) {\n\t\tmessages(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Messages($chatId: String!) {\n\t\tmessages(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription messageCreated($chatId: String!) {\n\t\tmessageCreated(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription messageCreated($chatId: String!) {\n\t\tmessageCreated(chatId: $chatId) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;