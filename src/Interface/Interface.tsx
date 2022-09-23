
export interface TakeBookType {
    bookId: number,
    userId: number,
    bookName: string,
    auther: string,
    bookImage: string,
    bookCount: number
}

export interface BookCardTypes {
    key: number,
    bookId: number,
    bookName: string,
    bookAuther: string,
    bookImage: string,
    count?: any,
    bookListId?: number,
    loginUserId?: number,
    status?: string | null,
}

export interface BookListDisplayType {
    auther: string,
    bookImage: string,
    bookName: string,
    category: string,
    count: number,
    id: number

}



export interface BookListReducerType {
    loading: boolean,
    books: {
        auther: string,
        bookImage: string,
        bookName: string,
        category: string,
        count: number,
        id: number
    }[] | undefined,
    error?: string,
    bookCategory?: string,
    bookCatgegoryList:any

}



export interface BookCountType {
    bookCount: number
}


export interface SignUpDetailsType {
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    phone: number,
    houseName: string | undefined,
    city: string | undefined,
    district: string | undefined,
    post: string | undefined,
    pin: number
}

export interface LogInDetailsType {
    userName: string | undefined,
    password: string | undefined
}

export interface ChildType  {
    children: React.ReactNode
}


export interface BooksTakenItemType {
    auther: string,
    bookId: number,
    bookImage: string,
    bookName: string,
    id: number,
    userId: number
}

export interface BookDetailsType {
    imgUrl: string,
    key: number
}

export interface AboutUsGeneralSuccessType {
    id: number,
    language: string,
    dailies: string,
    journals: string
}

export interface AboutUsChildSuccessType {
    id: number,
    language: string,
    journals: string
}

export interface AboutUsInitialStateType {
    loading: boolean,
    generalBook: {
        id: number,
        language: string,
        dailies: number,
        journals: number
    } | null,
    childBook: {
        id: number,
        language: string,
        journals: number
    } | null,
    error: string | null
}

export interface UseraAuthReturnType {
    type:string,
    payload:string | null
}

export interface UpdataeBookPicCountreturnType {
    type:string,
    payload: number
}

export interface BooksTakenInitType {
    loading: boolean,
    takenBooks: {
        auther: string,
        bookId: number,
        bookImage: string,
        bookName: string,
        id: number,
        userId: number
    }[] | [] | null | undefined,
    error: string | null | undefined | ''
}

export interface BooksTakenReturnType {
    loading: boolean,
    takenBooks: string | {
        auther: string,
        bookId: number,
        bookImage: string,
        bookName: string,
        id: number,
        userId: number,
    }[] | [] | null | undefined | any,
    error: string | null | undefined | '' | any
}

export interface BooksTakenActionsReturnType {
    type: string,
    payload?: {
        auther: string,
        bookId: number,
        bookImage: string,
        bookName: string,
        id: number,
        userId: number
    } | null | string|undefined|''
}

export interface BooksTakenSuccessType {
    auther: string,
    bookId: number,
    bookImage: string,
    bookName: string,
    id: number,
    userId: number
}

export interface BookSearchResultType {
    auther: string,
    bookImage: string,
    bookName: string,
    category: string,
    count: number,
    id: number
}
export interface SearchSuccessReturnType {
    type: string,
    payload: BookSearchResultType[] | string | null | undefined
}

export interface BookActionBookType {
    auther: string,
    bookImage: string,
    bookName: string,
    category: string,
    count: number,
    id: number
}

export interface BookListActionReturnType {
    type: string,
    payload?: {
        auther: string,
        bookImage: string,
        bookName: string,
        category: string,
        count: number,
        id: number
    }[] | string | undefined |null |any
}

// export interface EventDataType {
//     eventTitle:string,
//     eventDetails:string,
//     id:number
// }
export interface EventDataType {
    eventTitle:string,
    eventDetails:string,
    id:number
}

export interface GalleryCardPropsType {
    imgUrl:string,
    key:number
}

export interface AuthenticateInitStateType {
    loginUserName: null | string,
    loginUserID:null|number
}