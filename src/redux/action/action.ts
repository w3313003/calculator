import * as Types from './action_types';

const action: any = {
    [Types.ADD]: (payload: any) => ({
        type: Types.ADD,
		payload
    }),
    [Types.DECREASE]: (payload: any) => ({
        type: Types.DECREASE,
		payload
    }),
    [Types.MULTIPLY]: (payload: any) => ({
        type: Types.MULTIPLY,
        payload
    }),
    [Types.DIVISION]: (payload: any) => ({
        type: Types.DIVISION,
        payload
    }),
    [Types.CLEAR]: (payload: any) => ({
        type: Types.CLEAR,
        payload
    })
}; 

export default action;