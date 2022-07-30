import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from '../../../';



const initialState: UserType = {
    name: '',
    authFlag: false,
}


interface AuthUser {
    authFlag: boolean;
}


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authUser: (state, { payload }: PayloadAction<AuthUser>) => {
            state.authFlag = payload.authFlag;
        },
    }
})

export const { authUser } = userReducer.actions;
export default userReducer.reducer; 