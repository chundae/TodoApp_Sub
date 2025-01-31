import {createContext, useContext, useReducer} from "react";

type Todo = {
    id: bigint;
    createDate : string;
    content: string;
};

type State = {
    todos: Todo[];
};

type Action =
    | { type: "CREATE"; payload: Todo}
    | { type: "DELETE"; payload: bigint}
    | { type: "UPDATE"; payload: {id: bigint; content: string}};


//Mock
const initState : State = {
    todos: [
        {id: BigInt(1), createDate: "2025-01-21", content: "첫번쨰할일"},
        {id: BigInt(2), createDate: "2025-01-22", content: "두번쨰할일"},
        {id: BigInt(3), createDate: "2025-01-22", content: "세번쨰할일"},
        {id: BigInt(4), createDate: "2025-01-23", content: "네번쨰할일"},
        {id: BigInt(5), createDate: "2025-01-23", content: "다섯번쨰할일"},
    ],
};


//Reducer
const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "CREATE":
            return {...state, todos:[...state.todos, action.payload]};
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case "UPDATE":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                todo.id === action.payload.id
                ? {...todo, content: action.payload.content }
                : todo
                ),
            };
        default:
            return state;
    }
};

//Context
const TodoContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: initState, dispatch: () => null });


export const TodoProvider = ( {children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);



// // const navigation = useNavigation<NavigationProp<StackParam>>()
//
// const onCreate = () => {
//     //props -> 이동페이지(Quick(notPage) or NewPage), 받은 데이터 새롭게 로딩하는 함수..? 아님 저장하는 함수
//     //리로딩 혹은 NewPage 이동
// }
//
// const onDelete = () => {
//     //props -> 페이지 새로고침, 데이터 삭제(표시 x)함수
//
// }
//
// const onUpdate = () => {
//     //props -> 페이지 새로고침, 데이터 업데이트 함수 ( Data : {content, data})
// }
// //추가 구성은 id 값을 생성하는 Ref 생성하거나 랜덤으로 id 부여하는 함수 생성하기.
